import Link from "next/link"

import { siteConfig } from "@/config/site"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="rounded-md bg-primary px-2 py-1">
        <span className="font-bod text-lg text-secondary">
          {siteConfig.name}
        </span>
      </div>
    </Link>
  )
}

export default Logo
