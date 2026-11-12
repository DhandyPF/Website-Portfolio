import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "../../../../lib/admin-auth";
import { getCollectionSchema } from "../../../../lib/content-schema";

const maxFileSize = 5 * 1024 * 1024;
const uploadTargets = {
  education: { directory: "edu-logos", extensions: [".png", ".jpg", ".jpeg", ".svg"] },
  certificates: { directory: "certificates", extensions: [".png", ".jpg", ".jpeg", ".svg"] },
  "tech-stack": { directory: "tech-logos", extensions: [".svg", ".png", ".jpg", ".jpeg"] },
};

function errorResponse(message, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

function hasSafeSvgContent(contents) {
  return !/<script\b|on[a-z]+\s*=|javascript:|<foreignObject\b/i.test(contents);
}

export async function POST(request) {
  if (!(await isAdminAuthenticated())) return errorResponse("Sesi admin tidak valid.", 401);

  try {
    const formData = await request.formData();
    const collection = String(formData.get("collection") || "");
    const file = formData.get("file");
    const schema = getCollectionSchema(collection);
    const target = uploadTargets[collection];

    if (!schema || !target || !(file instanceof File)) {
      return errorResponse("Koleksi atau file tidak valid.");
    }
    if (file.size === 0 || file.size > maxFileSize) {
      return errorResponse("Ukuran file harus lebih dari 0 dan maksimal 5 MB.");
    }

    const originalExtension = path.extname(file.name).toLowerCase();
    if (!target.extensions.includes(originalExtension)) {
      return errorResponse("Format file harus PNG, JPG, JPEG, atau SVG.");
    }

    const contents = Buffer.from(await file.arrayBuffer());
    if (originalExtension === ".svg" && !hasSafeSvgContent(contents.toString("utf8"))) {
      return errorResponse("File SVG mengandung konten yang tidak diizinkan.");
    }

    const filename = `${randomUUID()}${originalExtension}`;
    const publicDirectory = path.join(process.cwd(), "public", target.directory);
    await mkdir(publicDirectory, { recursive: true });
    await writeFile(path.join(publicDirectory, filename), contents, { flag: "wx" });

    const publicPath = `/${target.directory}/${filename}`;
    return NextResponse.json({ path: publicPath, value: publicPath });
  } catch (error) {
    console.error("Upload aset admin gagal:", error);
    return errorResponse("File tidak dapat diunggah.", 500);
  }
}
