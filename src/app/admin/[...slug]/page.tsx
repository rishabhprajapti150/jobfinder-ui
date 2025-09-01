import { notFound } from "next/navigation";

export default function AdminCatchAll({ params }: { params: { slug?: string[] } }) {
  // Any invalid child route under /admin/* will be caught here
  notFound(); // ✅ this renders /admin/not-found.tsx (no raw error)
}
