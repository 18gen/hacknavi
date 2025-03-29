"use client";
import { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      if (error || !session) {
        router.push("/auth/login");
      } else {
        // ログイン成功時にトップページにリダイレクト
        router.push("/");
      }
    });
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>認証しています…</p>
    </div>
  );
}
