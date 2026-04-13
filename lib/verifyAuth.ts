export default async function verifyAuth(token: string) {
  try {
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/auth/verify?token=${token}`,
    );
    const res = await req.json();
    if (!res?.user?.email) return false;
    return res.user;
  } catch (error) {
    console.error("Token verification error:", error);
    return false;
  }
}
