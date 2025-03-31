"use client"

import { useState, useEffect, useRef } from "react"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

export default function SearchBar() {
  const [isTyping, setIsTyping] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // Simulate AI assistant typing effect
  useEffect(() => {
    if (isFocused) {
      const typingTimeout = setTimeout(() => {
        setIsTyping(true)

        // Stop typing effect after 2 seconds
        setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }, 500)

      return () => clearTimeout(typingTimeout)
    }
  }, [isFocused])

  return (
    <div className="w-full max-w-3xl relative">
      <div
        className={cn(
          "relative flex items-center w-full rounded-full transition-all duration-300",
          "bg-black/30 border border-white/10 backdrop-blur-sm",
          isFocused ? "ring-2 ring-amber-500/50" : "hover:border-white/20",
        )}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Seek, and ye shall read."
          className="w-full bg-transparent text-white/90 py-4 px-6 rounded-full outline-none placeholder:text-white/50"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          aria-label="Search for books"
        />

        <div className="absolute right-4 flex items-center">
          {isTyping && (
            <div className="flex items-center mr-3">
              <div className="typing-dots flex space-x-1">
                <span
                  className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"
                  style={{ animationDelay: "0ms" }}
                ></span>
                <span
                  className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"
                  style={{ animationDelay: "300ms" }}
                ></span>
                <span
                  className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"
                  style={{ animationDelay: "600ms" }}
                ></span>
              </div>
            </div>
          )}

          <button className="p-2 text-white/70 hover:text-white transition-colors duration-200" aria-label="Search">
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* AI Assistant glow effect */}
      <div
        className={cn(
          "absolute -bottom-12 left-1/2 -translate-x-1/2 w-32 h-4 bg-amber-500/20 rounded-full blur-xl transition-opacity duration-500",
          isTyping ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  )
}

