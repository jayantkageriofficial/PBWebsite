"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/lib/store/auth";

type Props = {
  authenticated: boolean;
  email: string | null;
  token: string | null;
};

export default function AuthInitializer({ authenticated, email, token }: Props) {
  const setAuth = useAuthStore((s) => s.setAuth);

  useEffect(() => {
    setAuth(authenticated, email, token);
  }, [authenticated, email, token, setAuth]);

  return null;
}
