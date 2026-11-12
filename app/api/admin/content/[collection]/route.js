import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "../../../../../lib/admin-auth";
import { getCollectionSchema } from "../../../../../lib/content-schema";
import { readCollection, updateCollection } from "../../../../../lib/content-store";

function unauthorized() {
  return NextResponse.json({ error: "Sesi admin tidak valid." }, { status: 401 });
}

function validatePayload(collection, payload) {
  const schema = getCollectionSchema(collection);
  if (!schema || !payload || typeof payload !== "object") {
    return { error: "Data yang dikirim tidak valid." };
  }
  const values = {};
  for (const field of schema.fields) {
    const value = payload[field.name];
    if (field.type === "items") {
      if (!Array.isArray(value) || value.length === 0 || value.some((item) => !item?.name || !item?.logo)) {
        return { error: `${field.label} harus berisi item yang valid.` };
      }
      values[field.name] = value.map((item) => ({
        name: String(item.name).trim(),
        logo: String(item.logo).trim().replace(/\.svg$/i, ""),
      }));
      continue;
    }
    if (field.required && (typeof value !== "string" || !value.trim())) {
      return { error: `${field.label} wajib diisi.` };
    }
    values[field.name] = typeof value === "string" ? value.trim() : "";
  }
  return { values };
}

export async function GET(_request, { params }) {
  if (!(await isAdminAuthenticated())) return unauthorized();
  try {
    const collection = await params.collection;
    const schema = getCollectionSchema(collection);
    if (!schema) return NextResponse.json({ error: "Koleksi tidak ditemukan." }, { status: 404 });
    return NextResponse.json({ collection, label: schema.label, fields: schema.fields, items: await readCollection(collection) });
  } catch (error) {
    console.error("Konten admin gagal dibaca:", error);
    return NextResponse.json({ error: "Konten tidak dapat dibaca." }, { status: 500 });
  }
}

export async function POST(request, { params }) {
  if (!(await isAdminAuthenticated())) return unauthorized();
  try {
    const collection = await params.collection;
    const payload = await request.json();
    const result = validatePayload(collection, payload);
    if (result.error) return NextResponse.json(result, { status: 400 });
    const items = await updateCollection(collection, (current) => [
      ...current,
      { id: current.reduce((max, item) => Math.max(max, Number(item.id) || 0), 0) + 1, ...result.values },
    ]);
    return NextResponse.json({ items });
  } catch (error) {
    console.error("Konten admin gagal dibuat:", error);
    return NextResponse.json({ error: "Konten tidak dapat dibuat." }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  if (!(await isAdminAuthenticated())) return unauthorized();
  try {
    const collection = await params.collection;
    const payload = await request.json();
    const id = Number(payload.id);
    const result = validatePayload(collection, payload);
    if (!Number.isInteger(id) || id < 1 || result.error) {
      return NextResponse.json({ error: result.error || "ID tidak valid." }, { status: 400 });
    }
    const items = await updateCollection(collection, (current) => {
      if (!current.some((item) => item.id === id)) throw new Error("Item tidak ditemukan.");
      return current.map((item) => (item.id === id ? { id, ...result.values } : item));
    });
    return NextResponse.json({ items });
  } catch (error) {
    console.error("Konten admin gagal diperbarui:", error);
    return NextResponse.json({ error: "Konten tidak dapat diperbarui." }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  if (!(await isAdminAuthenticated())) return unauthorized();
  try {
    const collection = await params.collection;
    const id = Number(new URL(request.url).searchParams.get("id"));
    if (!Number.isInteger(id) || id < 1) return NextResponse.json({ error: "ID tidak valid." }, { status: 400 });
    const items = await updateCollection(collection, (current) => {
      if (!current.some((item) => item.id === id)) throw new Error("Item tidak ditemukan.");
      return current.filter((item) => item.id !== id);
    });
    return NextResponse.json({ items });
  } catch (error) {
    console.error("Konten admin gagal dihapus:", error);
    return NextResponse.json({ error: "Konten tidak dapat dihapus." }, { status: 500 });
  }
}
