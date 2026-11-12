const collectionSchemas = {
  education: {
    file: "education.json",
    label: "Pendidikan",
    fields: [
      { name: "institusi", label: "Institusi", type: "text", required: true },
      { name: "logo", label: "Path logo", type: "text", required: true, placeholder: "/edu-logos/nama-file.png" },
      { name: "jurusan", label: "Jurusan", type: "text", required: true },
      { name: "periode", label: "Periode", type: "text", required: true },
      { name: "deskripsi", label: "Deskripsi", type: "textarea" },
    ],
  },
  certificates: {
    file: "certificates.json",
    label: "Kegiatan dan sertifikat",
    fields: [
      { name: "judul", label: "Judul", type: "text", required: true },
      { name: "penerbit", label: "Penerbit", type: "text", required: true },
      { name: "periode", label: "Periode", type: "text", required: true },
      { name: "fotoSertifikat", label: "Path foto", type: "text", required: true, placeholder: "/certificates/nama-file.jpg" },
      { name: "deskripsi", label: "Deskripsi", type: "textarea", required: true },
    ],
  },
  "tech-stack": {
    file: "tech-stack.json",
    label: "Kelompok tech stack",
    fields: [
      { name: "number", label: "Nomor kelompok", type: "text", required: true },
      { name: "judul", label: "Nama kelompok", type: "text", required: true },
      {
        name: "items",
        label: "Item (satu per baris, format: Nama | nama-logo)",
        type: "items",
        required: true,
        placeholder: "React | react",
      },
    ],
  },
  interests: {
    file: "peminatan.json",
    label: "Bidang peminatan",
    fields: [
      { name: "judul", label: "Judul", type: "text", required: true },
      { name: "deskripsi", label: "Deskripsi", type: "textarea", required: true },
      { name: "ikon", label: "Ikon", type: "text", required: true, placeholder: "code-block" },
    ],
  },
};

export function getCollectionSchema(collection) {
  return collectionSchemas[collection] || null;
}

export function getCollectionNames() {
  return Object.keys(collectionSchemas);
}
