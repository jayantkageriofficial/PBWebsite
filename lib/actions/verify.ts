import { cookies } from "next/headers";
import { verifyToken } from "@/lib/operations/auth";

export default async function verify() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("session");
  if (!cookie?.value) return false;
  const auth = await verifyToken(cookie.value);
  if (!auth?.email) return null;
  return auth;
}
