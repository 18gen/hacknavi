"use client";
import GoogleLoginButton from "@/components/auth/GoogleLoginButton";
import GitHubLoginButton from "@/components/auth/GitHubLoginButton";
import EmailAuthForm from "@/components/auth/EmailAuthForm";

export default function Login() {
  return (
    <div className="flex items-center justify-center w-full pt-5">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-8">
          HackNaviにログイン
        </h1>
        <div className="space-y-6">
          {/* OAuth Section */}
          <div className="space-y-4">
            <GoogleLoginButton />
            <GitHubLoginButton />
          </div>
          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-400">または</span>
            </div>
          </div>
          {/* Email Section */}
          <div className="space-y-4">
            <EmailAuthForm />
          </div>
        </div>
        {/* Footer Links */}
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>
            続けることで、
            <a href="#" className="text-blue-600 hover:underline">
              利用規約
            </a>
            と
            <a href="#" className="text-blue-600 hover:underline">
              プライバシーポリシー
            </a>
            に同意します
          </p>
        </div>
      </div>
    </div>
  );
}
