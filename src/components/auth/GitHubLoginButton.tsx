"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { FaGithub } from "react-icons/fa";

export default function GitHubLoginButton() {
  const [loading, setLoading] = useState(false);
  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
    if (error) alert(error.message);
  };

  return (
    <button
      onClick={handleLogin}
      disabled={loading}
      className="w-full flex items-center justify-center gap-3 py-2.5 px-4 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition-colors"
    >
      <FaGithub className="text-xl" />
      {loading ? "処理中..." : "GitHubで続ける"}
    </button>
  );
}
