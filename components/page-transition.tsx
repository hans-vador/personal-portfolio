"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 400)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div className="relative overflow-hidden">
      <div
        className={`transition-all duration-500 ease-out ${
          isLoading ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-0"
        }`}
      >
        {children}
      </div>

      {isLoading && (
        <div className="fixed top-4 right-4 z-50">
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg">
            <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600 font-medium">Loading</span>
          </div>
        </div>
      )}
    </div>
  )
}
