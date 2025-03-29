'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-600">
          HackNavi
        </Link>
        <div className="space-x-4">
          <Link href="/auth/login" className="text-gray-600 hover:text-blue-600">
            ログイン
          </Link>
          <Link href="/auth/signup" className="text-gray-600 hover:text-blue-600">
            新規登録
          </Link>
        </div>
      </div>
    </nav>
  )
}
