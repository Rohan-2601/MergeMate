"use client"
import React, { useState } from "react"
import { signIn } from "@/lib/auth-client"
import { GithubIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
    <div className="flex min-h-screen w-full items-center justify-center bg-background p-6">
      <div className="grid w-full max-w-5xl gap-10 lg:grid-cols-2 lg:gap-16">
        {/* ---------------- LEFT CONTENT ---------------- */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
            The AI Pull Request <br />
            <span className="text-primary">Reviewer</span> <br />
            Your Team Deserves
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Merge-Mate reviews your PRs like a real senior engineer — deeply
            contextual, logic-aware, zero-fluff feedback. Faster merges, fewer
            bugs, happier devs.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Understands Codebase",
                desc: "RAG + semantic awareness",
              },
              {
                title: "Engineer-Style Reviews",
                desc: "Reasoned + practical feedback",
              },
              {
                title: "Instant & Reliable",
                desc: "No waiting — just insight",
              },
              {
                title: "Seamless GitHub",
                desc: "Plug & play integration",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-lg border bg-card/50 p-4 shadow-sm"
              >
                <p className="font-semibold text-foreground">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------- RIGHT LOGIN CARD ---------------- */}
        <div className="flex items-center justify-center">
          <Card className="w-full max-w-md shadow-lg border-2">
            <CardHeader className="text-center space-y-1">
              <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
              <CardDescription>
                Connect GitHub to enable AI reviews
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Button
                variant="default"
                size="lg"
                className="w-full gap-2 font-semibold"
                onClick={handleGithubLogin}
                disabled={loading}
              >
                <GithubIcon className="h-5 w-5" />
                {loading ? "Connecting..." : "Continue with GitHub"}
              </Button>
            </CardContent>
            <CardFooter>
              <p className="w-full text-center text-xs text-muted-foreground">
                Read-only repo access. Secure. Private. No password stored.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default LoginUI
