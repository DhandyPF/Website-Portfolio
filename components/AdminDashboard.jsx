"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { getCollectionNames } from "../lib/content-schema";
import Link from "next/link";

const collections = getCollectionNames();

function initialValue(fields) {
  return Object.fromEntries(fields.map((field) => [field.name, field.type === "items" ? [] : ""]));
}

function itemToForm(item, fields) {
  return Object.fromEntries(fields.map((field) => [
    field.name,
    field.type === "items"
      ? item[field.name].map((entry) => `${entry.name} | ${entry.logo}`).join("\n")
      : item[field.name] || "",
  ]));
}

function formToPayload(form, fields) {
  return Object.fromEntries(fields.map((field) => [
    field.name,
    field.type === "items"
      ? form[field.name].split("\n").map((line) => {
          const [name, logo] = line.split("|").map((part) => part.trim());
          return { name, logo };
        }).filter((entry) => entry.name && entry.logo)
      : form[field.name],
  ]));
}

export default function AdminDashboard() {
  const [collection, setCollection] = useState(collections[0]);
  const [data, setData] = useState(null);
  const [form, setForm] = useState({});
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const fields = data?.fields || [];
  const activeLabel = useMemo(() => data?.label || "Konten", [data]);

  const loadCollection = useCallback(async (nextCollection = collection) => {
    setError("");
    const response = await fetch(`/api/admin/content/${nextCollection}`);
    if (response.status === 401) {
      window.location.href = "/admin/login";
      return;
    }
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "Konten gagal dimuat.");
    setData(result);
    setForm(initialValue(result.fields));
    setEditingId(null);
  }, [collection]);

  useEffect(() => {
    loadCollection().catch((loadError) => setError(loadError.message));
  }, [loadCollection]);

  function startEditing(item) {
    setEditingId(item.id);
    setForm(itemToForm(item, fields));
    setMessage("");
  }

  function resetForm() {
    setEditingId(null);
    setForm(initialValue(fields));
  }

  async function submitForm(event) {
    event.preventDefault();
    setBusy(true);
    setError("");
    setMessage("");
    try {
      const response = await fetch(`/api/admin/content/${collection}`, {
        method: editingId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formToPayload(form, fields), ...(editingId ? { id: editingId } : {}) }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Perubahan gagal disimpan.");
      setData({ ...data, items: result.items });
      resetForm();
      setMessage("Perubahan berhasil disimpan.");
    } catch (submitError) {
      setError(submitError.message);
    } finally {
      setBusy(false);
    }
  }

  async function deleteItem(id) {
    if (!window.confirm("Hapus item ini secara permanen?")) return;
    setBusy(true);
    setError("");
    try {
      const response = await fetch(`/api/admin/content/${collection}?id=${id}`, { method: "DELETE" });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Item gagal dihapus.");
      setData({ ...data, items: result.items });
      if (editingId === id) resetForm();
      setMessage("Item berhasil dihapus.");
    } catch (deleteError) {
      setError(deleteError.message);
    } finally {
      setBusy(false);
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  return (
    <main className="min-h-screen bg-bgPrimary text-textMain">
      <div className="page-shell py-8 sm:py-12">
        <header className="flex flex-col justify-between gap-5 border-b border-borderSubtle pb-7 sm:flex-row sm:items-end">
          <div>
            <p className="section-label">Panel administrasi</p>
            <h1 className="serif-heading mt-4 text-4xl sm:text-5xl">Kelola portofolio.</h1>
            <p className="mt-3 text-sm text-textMuted">Perubahan disimpan ke data JSON di server.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/" className="rounded-control border border-borderSubtle px-4 py-2 text-sm hover:border-accentHighlight">Lihat situs</Link>
            <button onClick={logout} className="rounded-control border border-borderSubtle px-4 py-2 text-sm hover:border-accentHighlight">Keluar</button>
          </div>
        </header>

        <div className="mt-8 grid gap-8 lg:grid-cols-[220px_1fr]">
          <nav aria-label="Jenis konten" className="grid content-start gap-2">
            {collections.map((name) => (
              <button
                key={name}
                onClick={() => setCollection(name)}
                className={`rounded-control border px-4 py-3 text-left text-sm ${collection === name ? "border-accentHighlight text-accentHighlight" : "border-borderSubtle text-textMuted hover:border-accentHighlight"}`}
              >
                {name === "tech-stack" ? "Tech stack" : name === "interests" ? "Peminatan" : data?.collection === name ? data.label : name === "education" ? "Pendidikan" : "Sertifikat"}
              </button>
            ))}
          </nav>

          <section>
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <h2 className="font-editorial text-3xl">{activeLabel}</h2>
              <span className="text-sm text-textMuted">{data?.items.length || 0} item</span>
            </div>
            {error && <p className="mt-4 rounded-control border border-accentHighlight px-4 py-3 text-sm" role="alert">{error}</p>}
            {message && <p className="mt-4 text-sm text-accentHighlight" role="status">{message}</p>}

            <form onSubmit={submitForm} className="mt-6 grid gap-4 rounded-surface border border-borderSubtle bg-cardSurface p-5 sm:p-6">
              <h3 className="font-semibold">{editingId ? "Edit item" : "Tambah item"}</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {fields.map((field) => (
                  <label key={field.name} className={`grid gap-2 text-sm ${field.type === "textarea" || field.type === "items" ? "sm:col-span-2" : ""}`}>
                    {field.label}
                    {field.type === "textarea" || field.type === "items" ? (
                      <textarea
                        required={field.required}
                        rows={field.type === "items" ? 5 : 4}
                        value={form[field.name] || ""}
                        placeholder={field.placeholder}
                        onChange={(event) => setForm({ ...form, [field.name]: event.target.value })}
                        className="rounded-control border border-borderSubtle bg-inputSurface px-3 py-3 text-textMain"
                      />
                    ) : (
                      <input
                        required={field.required}
                        value={form[field.name] || ""}
                        placeholder={field.placeholder}
                        onChange={(event) => setForm({ ...form, [field.name]: event.target.value })}
                        className="rounded-control border border-borderSubtle bg-inputSurface px-3 py-3 text-textMain"
                      />
                    )}
                  </label>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <button disabled={busy} className="rounded-control bg-accentHighlight px-4 py-3 font-semibold text-accentContrast disabled:opacity-60">
                  {busy ? "Menyimpan..." : editingId ? "Simpan perubahan" : "Tambah item"}
                </button>
                {editingId && <button type="button" onClick={resetForm} className="rounded-control border border-borderSubtle px-4 py-3 text-sm hover:border-accentHighlight">Batal edit</button>}
              </div>
            </form>

            <div className="mt-6 grid gap-3">
              {data?.items.map((item) => (
                <article key={item.id} className="flex flex-col justify-between gap-4 rounded-surface border border-borderSubtle bg-cardSurface p-4 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-xs text-accentHighlight">ID {item.id}</p>
                    <h3 className="mt-1 font-editorial text-xl">{item.judul || item.institusi || item.number}</h3>
                    <p className="mt-1 text-sm text-textMuted">{item.deskripsi || item.jurusan || `${item.items?.length || 0} item`}</p>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <button onClick={() => startEditing(item)} className="rounded-control border border-borderSubtle px-3 py-2 text-sm hover:border-accentHighlight">Edit</button>
                    <button onClick={() => deleteItem(item.id)} disabled={busy} className="rounded-control border border-borderSubtle px-3 py-2 text-sm hover:border-accentHighlight disabled:opacity-60">Hapus</button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
