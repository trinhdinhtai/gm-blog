import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/logo.png"
        alt={siteConfig.name}
        width={36}
        height={36}
        className=""
      />
    </Link>
  )
}

export default Logo
