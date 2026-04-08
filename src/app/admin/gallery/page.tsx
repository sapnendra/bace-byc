"use client";

import { useEffect, useMemo, useState } from "react";
import { Loader2, Search, Trash2 } from "lucide-react";
import { GALLERY_CATEGORIES } from "@/types/gallery";

type GalleryRecord = {
  _id: string;
  title: string;
  category: string;
  gradient: string;
  size: "short" | "tall";
  images: Array<{ url: string; publicId?: string }>;
  isPublished: boolean;
  sortOrder: number;
  createdAt: string;
};

type GalleryResponse = {
  success: boolean;
  data: GalleryRecord[];
  message?: string;
};

type NewGalleryForm = {
  title: string;
  category: string;
  gradient: string;
  size: "short" | "tall";
  sortOrder: string;
  isPublished: boolean;
  images: FileList | null;
};

const initialForm: NewGalleryForm = {
  title: "",
  category: "daily-life",
  gradient: "from-stone-500 to-stone-700",
  size: "short",
  sortOrder: "0",
  isPublished: true,
  images: null,
};

export default function AdminGalleryPage() {
  const [items, setItems] = useState<GalleryRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [form, setForm] = useState<NewGalleryForm>(initialForm);
  const [creating, setCreating] = useState(false);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState("");

  const gradients = useMemo(
    () => [
      "from-stone-500 to-stone-700",
      "from-slate-500 to-slate-700",
      "from-emerald-600 to-emerald-800",
      "from-teal-600 to-teal-800",
      "from-zinc-600 to-neutral-800",
      "from-amber-600 to-red-800",
      "from-cyan-700 to-blue-800",
    ],
    [],
  );

  useEffect(() => {
    void loadItems();
  }, [search, category]);

  async function loadItems() {
    setLoading(true);
    setError("");

    try {
      const params = new URLSearchParams();
      if (search.trim()) params.set("search", search.trim());
      if (category !== "all") params.set("category", category);

      const response = await fetch(`/api/admin/gallery?${params.toString()}`, {
        method: "GET",
        cache: "no-store",
      });
      const result = (await response.json()) as GalleryResponse;

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to load gallery items");
      }

      setItems(result.data || []);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Failed to load gallery items";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  async function handleCreate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCreating(true);
    setError("");

    try {
      if (!form.images || form.images.length === 0) {
        throw new Error("Please select at least one image");
      }

      const payload = new FormData();
      payload.append("title", form.title);
      payload.append("category", form.category);
      payload.append("gradient", form.gradient);
      payload.append("size", form.size);
      payload.append("sortOrder", form.sortOrder);
      payload.append("isPublished", String(form.isPublished));

      Array.from(form.images).forEach((file) => {
        payload.append("images", file);
      });

      const response = await fetch("/api/admin/gallery", {
        method: "POST",
        body: payload,
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to create gallery item");
      }

      setForm(initialForm);
      await loadItems();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to create gallery item");
    } finally {
      setCreating(false);
    }
  }

  async function togglePublish(item: GalleryRecord) {
    setSavingId(item._id);
    setError("");

    try {
      const response = await fetch(`/api/admin/gallery/${item._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isPublished: !item.isPublished,
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to update publish status");
      }

      setItems((prev) =>
        prev.map((entry) =>
          entry._id === item._id ? { ...entry, isPublished: !entry.isPublished } : entry,
        ),
      );
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to update publish status");
    } finally {
      setSavingId(null);
    }
  }

  async function handleDelete(item: GalleryRecord) {
    const confirmed = confirm(`Delete "${item.title}"? This will also remove uploaded images.`);
    if (!confirmed) return;

    setDeletingId(item._id);
    setError("");

    try {
      const response = await fetch(`/api/admin/gallery/${item._id}`, {
        method: "DELETE",
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to delete item");
      }

      setItems((prev) => prev.filter((entry) => entry._id !== item._id));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to delete item");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-charcoal mb-2">Gallery Management</h1>
        <p className="text-charcoal-light">Create, publish, and organize gallery moments.</p>
      </div>

      <form
        onSubmit={handleCreate}
        className="bg-white rounded-xl shadow-sm border border-orange-100 p-6 mb-6"
      >
        <h2 className="text-xl font-serif font-bold text-charcoal mb-4">Add New Gallery Item</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <input
            type="text"
            required
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
            className="rounded-lg border border-gray-200 px-3 py-2 text-sm"
          />

          <select
            value={form.category}
            onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
            className="rounded-lg border border-gray-200 px-3 py-2 text-sm"
          >
            {GALLERY_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            value={form.gradient}
            onChange={(e) => setForm((prev) => ({ ...prev, gradient: e.target.value }))}
            className="rounded-lg border border-gray-200 px-3 py-2 text-sm"
          >
            {gradients.map((gradient) => (
              <option key={gradient} value={gradient}>
                {gradient}
              </option>
            ))}
          </select>

          <select
            value={form.size}
            onChange={(e) => setForm((prev) => ({ ...prev, size: e.target.value as "short" | "tall" }))}
            className="rounded-lg border border-gray-200 px-3 py-2 text-sm"
          >
            <option value="short">short</option>
            <option value="tall">tall</option>
          </select>

          <input
            type="number"
            min={0}
            max={10000}
            placeholder="Sort Order"
            value={form.sortOrder}
            onChange={(e) => setForm((prev) => ({ ...prev, sortOrder: e.target.value }))}
            className="rounded-lg border border-gray-200 px-3 py-2 text-sm"
          />

          <label className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm">
            <input
              type="checkbox"
              checked={form.isPublished}
              onChange={(e) => setForm((prev) => ({ ...prev, isPublished: e.target.checked }))}
            />
            Published
          </label>

          <div className="md:col-span-2 lg:col-span-3">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => setForm((prev) => ({ ...prev, images: e.target.files }))}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={creating}
          className="mt-4 inline-flex items-center rounded-lg bg-saffron px-4 py-2 text-sm font-medium text-white hover:bg-saffron-dark disabled:opacity-60"
        >
          {creating ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
          {creating ? "Creating..." : "Create Item"}
        </button>
      </form>

      <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-4 mb-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title"
              className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 text-sm"
            />
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-lg border border-gray-200 px-3 py-2 text-sm"
          >
            <option value="all">All Categories</option>
            {GALLERY_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error ? (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      <div className="bg-white rounded-xl shadow-sm border border-orange-100 overflow-hidden">
        {loading ? (
          <div className="p-12 flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-saffron" />
          </div>
        ) : items.length === 0 ? (
          <div className="p-12 text-center text-charcoal-light">No gallery items found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-orange-100 bg-beige">
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-wide text-charcoal">Preview</th>
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-wide text-charcoal">Title</th>
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-wide text-charcoal">Category</th>
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-wide text-charcoal">Size</th>
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-wide text-charcoal">Order</th>
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-wide text-charcoal">Status</th>
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-wide text-charcoal">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-50">
                {items.map((item) => (
                  <tr key={item._id}>
                    <td className="px-4 py-3">
                      {item.images[0] ? (
                        <img
                          src={item.images[0].url}
                          alt={item.title}
                          className="h-12 w-12 rounded-lg border border-beige-200 object-cover"
                        />
                      ) : null}
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-charcoal">{item.title}</td>
                    <td className="px-4 py-3 text-sm text-charcoal-light">{item.category}</td>
                    <td className="px-4 py-3 text-sm text-charcoal-light">{item.size}</td>
                    <td className="px-4 py-3 text-sm text-charcoal-light">{item.sortOrder}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                          item.isPublished
                            ? "bg-forest/10 text-forest"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {item.isPublished ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => togglePublish(item)}
                          disabled={savingId === item._id}
                          className="rounded-lg bg-beige px-3 py-1.5 text-xs font-medium text-charcoal hover:bg-beige-soft disabled:opacity-60"
                        >
                          {savingId === item._id
                            ? "Saving..."
                            : item.isPublished
                              ? "Unpublish"
                              : "Publish"}
                        </button>

                        <button
                          onClick={() => handleDelete(item)}
                          disabled={deletingId === item._id}
                          className="inline-flex items-center gap-1 rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-100 disabled:opacity-60"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                          {deletingId === item._id ? "Deleting..." : "Delete"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
