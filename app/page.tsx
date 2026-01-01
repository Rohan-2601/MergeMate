import { Button } from "@/components/ui/button";
import Image from "next/image";
import { requireAuth } from "@/module/utils/auth-utils";
import { Logout } from "@/module/components/logout";

export default async function Home() {
  await requireAuth()
  return (
    <div className="flex flex-col min-h-screen items-center justify-between p-50">
<Button>hello</Button>
<Logout/>
    </div>
  );
}
