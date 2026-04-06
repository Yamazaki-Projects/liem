import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="header-logo">
          {siteConfig.siteName}
        </Link>
        <nav className="header-nav">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
