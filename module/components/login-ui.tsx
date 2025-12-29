//  "use client"
// import React, { useState } from "react"
// import { signIn } from "@/lib/auth-client"
// import { GithubIcon } from "lucide-react"

// const LoginUI = () => {
//   const [loading, setLoading] = useState(false)

//   const handleGithubLogin = async () => {
//     setLoading(true)
//     try {
//       await signIn.social({ provider: "github" })
//     } catch (error) {
//       console.error("Error during GitHub sign-in:", error)
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-br from-[#0B1220] via-[#0F172A] to-black flex items-center justify-center px-4">
//       <div className="max-w-4xl w-full grid md:grid-cols-2 gap-6 items-center">

//         {/* ---- Left Branding Section ---- */}
//         <div className="text-white space-y-4">
//           <h1 className="text-4xl md:text-5xl font-bold">
//             Merge-Mate
//           </h1>
//           <p className="text-gray-300 text-lg leading-relaxed">
//             AI-powered pull request reviews, GitHub automation,
//             intelligent RAG-based insights, dashboards & analytics —
//             everything your development workflow deserves.
//           </p>

//           <div className="flex flex-wrap gap-2 mt-2 text-sm text-gray-400">
//             <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
//               AI Code Reviews
//             </span>
//             <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
//               GitHub Integration
//             </span>
//             <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
//               RAG Powered
//             </span>
//             <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
//               Analytics Dashboard
//             </span>
//           </div>
//         </div>

//         {/* ---- Login Card ---- */}
//         <div className="bg-white/10 border border-white/15 backdrop-blur-xl rounded-2xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.4)]">
//           <h2 className="text-white text-2xl font-semibold text-center">
//             Welcome Back 👋
//           </h2>
//           <p className="text-gray-300 text-center mt-1">
//             Sign in to continue to your dashboard
//           </p>

//           <button
//             onClick={handleGithubLogin}
//             disabled={loading}
//             className="mt-6 w-full flex items-center justify-center gap-2 bg-white text-black font-semibold py-3 rounded-xl hover:bg-gray-100 transition disabled:opacity-60"
//           >
//             <GithubIcon size={20} />
//             {loading ? "Signing in..." : "Continue with GitHub"}
//           </button>

//           <p className="text-gray-400 text-xs text-center mt-4">
//             Secure authentication. We never store your credentials.
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LoginUI


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
      console.error("Error during GitHub sign-in:", error)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#020617] via-[#020617] to-black flex items-center justify-center px-4">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-6 items-center">

        {/* Branding */}
        <div className="text-white space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Merge-Mate
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            Your <span className="text-white font-semibold">AI Pull Request Reviewer</span>.  
            Get instant, contextual, developer-style reviews powered by advanced AI.
            No noise. No “hello world” comments. Just real engineering feedback.
          </p>

          <ul className="text-gray-400 space-y-2 text-sm mt-2">
            <li>• Understands your codebase using RAG</li>
            <li>• Explains reasoning like a senior engineer</li>
            <li>• Highlights bugs, smells, risks & improvements</li>
            <li>• Fast, reliable & deeply contextual</li>
          </ul>
        </div>

        {/* Login Card */}
        <div className="bg-white/10 border border-white/15 backdrop-blur-xl rounded-2xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          <h2 className="text-white text-2xl font-semibold text-center">
            Sign in with GitHub
          </h2>
          <p className="text-gray-400 text-center text-sm mt-1">
            Required to review your pull requests
          </p>

          <button
            onClick={handleGithubLogin}
            disabled={loading}
            className="mt-6 w-full flex items-center justify-center gap-2 bg-white text-black font-semibold py-3 rounded-xl hover:bg-gray-100 transition disabled:opacity-60"
          >
            <GithubIcon size={20} />
            {loading ? "Connecting..." : "Continue with GitHub"}
          </button>

          <p className="text-gray-400 text-xs text-center mt-4">
            Read-only access. We never store your credentials.
          </p>
        </div>

      </div>
    </div>
  )
}

export default LoginUI
