"use client"
import React, { useState } from "react"
import { signIn } from "@/lib/auth-client"
import { GithubIcon } from "lucide-react"

const LoginUI = () => {
  const [loading, setLoading] = useState(false)

  const handleGithubLogin = async () => {
    setLoading(true)
    try {
      await signIn.social({ provider: "github" })
    } catch (error) {
      console.error("GitHub login failed", error)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-[#020617] to-black flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* ---------------- LEFT CONTENT ---------------- */}
        <div className="text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            The AI Pull Request  
            <span className="text-indigo-400"> Reviewer</span>  
            Your Team Deserves
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            Merge-Mate reviews your PRs like a real senior engineer —
            deeply contextual, logic-aware, zero-fluff feedback.
            Faster merges, fewer bugs, happier devs.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 text-gray-300 text-sm">
            <div className="bg-transparent border border-white/10 rounded-xl p-4">
              <p className="font-semibold text-white">Understands Codebase</p>
              <p className="text-gray-400">RAG + semantic awareness</p>
            </div>
            <div className="bg-transparent border border-white/10 rounded-xl p-4">
              <p className="font-semibold text-white">Engineer-Style Reviews</p>
              <p className="text-gray-400">Reasoned + practical feedback</p>
            </div>
            <div className="bg-transparent border border-white/10 rounded-xl p-4">
              <p className="font-semibold text-white">Instant & Reliable</p>
              <p className="text-gray-400">No waiting — just insight</p>
            </div>
            <div className="bg-transparent border border-white/10 rounded-xl p-4">
              <p className="font-semibold text-white">Seamless GitHub</p>
              <p className="text-gray-400">Plug & play integration</p>
            </div>
          </div>
        </div>

        {/* ---------------- RIGHT LOGIN CARD ---------------- */}
        <div className=" p-8">
          <h2 className="text-white text-3xl font-semibold text-center">
            Sign in to Continue
          </h2>
          <p className="text-gray-400 text-center mt-2 text-sm">
            Connect GitHub to enable AI reviews
          </p>

          <button
            onClick={handleGithubLogin}
            disabled={loading}
            className="mt-7 w-full flex items-center justify-center gap-2 bg-white text-black font-semibold py-3 rounded-xl hover:bg-gray-100 transition disabled:opacity-60"
          >
            <GithubIcon size={20} />
            {loading ? "Connecting..." : "Continue with GitHub"}
          </button>

          <p className="text-gray-400 text-xs text-center mt-5">
            Read-only repo access. Secure. Private. No password stored.
          </p>
        </div>

      </div>
    </div>
  )
}

export default LoginUI
