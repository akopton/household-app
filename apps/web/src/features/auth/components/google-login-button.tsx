import Link from "next/link"
import { Button } from "../../../components/ui/button"
import { FcGoogle } from "react-icons/fc"

export const GoogleLoginButton = () => {
  return (
    <Button
      asChild
      variant="outline"
      style={{ cursor: "pointer" }}
    >
      <Link href="/api/auth/signin/google">
        <FcGoogle />
        Google
      </Link>
    </Button>
  )
}
