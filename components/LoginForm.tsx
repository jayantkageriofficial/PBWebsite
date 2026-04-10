"use client";

import { useState } from "react";
import { sendVerificationEmail } from "@/lib/operations/auth";
import {
  Loader2,
  Mail,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

type State = "idle" | "loading" | "success" | "error";

export default function LoginForm({ error }: { error?: string }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>(error ? "error" : "idle");
  const [errorMsg, setErrorMsg] = useState(error ?? "");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    try {
      const success = await sendVerificationEmail(email);
      if (success) setState("success");
      else {
        setState("error");
        setErrorMsg(
          "This email is not associated with an active team member account.",
        );
      }
    } catch {
      setState("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="min-h-[calc(100vh-7rem)] bg-pbdark flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Sign In</h1>
          <p className="text-white/50 mb-6">
            Enter your email to receive a sign-in link. Access is limited to
            active Point Blank team members.
          </p>
        </div>
        {/* Card */}
        <div className="bg-pbcard border border-white/10 rounded-3xl p-8">
          {state === "success" ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-pbgreen/10 border border-pbgreen/20 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle2
                  className="w-8 h-8 text-pbgreen"
                  strokeWidth={1.5}
                />
              </div>
              <h2 className="text-white font-semibold text-lg mb-2">
                Check your inbox
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                We sent a sign-in link to{" "}
                <span className="text-white">{email}</span>. The link expires in
                15 minutes.
              </p>
              <button
                onClick={() => {
                  setState("idle");
                  setEmail("");
                }}
                className="text-pbgreen text-sm hover:underline transition-opacity"
              >
                Use a different email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {errorMsg && (
                <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                  <AlertCircle
                    className="w-4 h-4 text-red-400 mt-0.5 shrink-0"
                    strokeWidth={1.5}
                  />
                  <p className="text-red-400 text-sm leading-relaxed">
                    {errorMsg}
                  </p>
                </div>
              )}

              <div className="flex flex-col gap-2">
                <label
                  className="text-white/60 text-sm font-medium"
                  htmlFor="email"
                >
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@pointblank.club"
                    className="w-full bg-pbsurface border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-pbgreen/50 focus:ring-1 focus:ring-pbgreen/20 transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={state === "loading" || !email}
                className="w-full bg-pbgreen text-black font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-pbgreen/90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm"
              >
                {state === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending link...
                  </>
                ) : (
                  <>
                    Send sign-in link
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
