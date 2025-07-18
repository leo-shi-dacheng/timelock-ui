import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import logo from '@/public/logo.png'

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-start gap-2 text-start">
        <img src={logo.src} alt="logo" />
        <h1 className="text-2xl font-bold">Get started</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Connect your wallet to create a new TImelock Account or import an existing one.
        </p>
      </div>
      <div className="grid gap-6">
        <Button type="submit" className="w-full">
          connect wallet
        </Button>
      </div>

    </form>
  )
}
