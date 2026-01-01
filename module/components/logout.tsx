"use client"
import { signOut } from "@/lib/auth-client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export const Logout = () => {
    const router = useRouter()
    return (
        <Button onClick={async () => {
             await signOut({
                fetchOptions: {
                    onSuccess: () => {
                        router.push("/login")
                    }
                }
             })
        }}>
            Logout
        </Button>
    )
}
