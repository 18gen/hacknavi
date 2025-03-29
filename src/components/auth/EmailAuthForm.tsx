"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function EmailAuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = (password: string) => {
    const regex = /^[a-zA-Z0-9]{8,}$/;
    return regex.test(password);
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (isSignUp && !validatePassword(password)) {
        throw new Error("パスワードは半角英数字8文字以上で入力してください");
      }

      if (isSignUp) {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        alert("確認メールを送信しました");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "認証に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleAuth} className="space-y-4">
      {/* メールアドレス入力 */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          メールアドレス
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          required
        />
      </div>

      {/* パスワード入力 */}
      <div className="relative">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          パスワード
          <span className="text-red-500 ml-1">*</span>
          {isSignUp && (
            <span className="text-gray-500 text-xs ml-2">
              （半角英数字8文字以上）
            </span>
          )}
        </label>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          required
          minLength={8}
          pattern={isSignUp ? "^[a-zA-Z0-9]{8,}$" : undefined}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-[45px] transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          aria-label={showPassword ? "パスワードを隠す" : "パスワードを表示"}
        >
          {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
        </button>
      </div>

      {/* エラーメッセージ */}
      {error && <div className="text-red-500 text-sm text-center">{error}</div>}

      {/* 送信ボタン */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors disabled:opacity-50"
      >
        {loading ? "処理中..." : isSignUp ? "新規登録" : "ログイン"}
      </button>

      {/* 登録切り替えリンク */}
      <div className="text-center text-sm space-y-2">
        <button
          type="button"
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-blue-600 hover:underline"
        >
          {isSignUp ? "既にアカウントをお持ちですか？" : "アカウントを作成"}
        </button>
        {!isSignUp && (
          <Link
            href="/password-reset"
            className="block text-gray-500 hover:text-blue-600"
          >
            パスワードを忘れた方
          </Link>
        )}
      </div>
    </form>
  );
}
