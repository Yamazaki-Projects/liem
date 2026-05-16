"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./admin.css";

const navItems = [
  { href: "/admin", label: "ダッシュボード", icon: "📊" },
  { href: "/admin/orders", label: "注文一覧", icon: "📋" },
  { href: "/admin/products", label: "商品管理", icon: "💅" },
  { href: "/admin/inquiries", label: "お問い合わせ", icon: "✉️" },
];

const pageTitles: Record<string, string> = {
  "/admin": "ダッシュボード",
  "/admin/orders": "注文一覧",
  "/admin/products": "商品管理",
  "/admin/inquiries": "お問い合わせ",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const title = pageTitles[pathname] ?? "管理画面";
  const now = new Date().toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" });

  return (
    <div className="admin-root">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-logo">
          liem
          <span>管理画面</span>
        </div>

        <nav className="admin-nav">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "active" : ""}
            >
              <span className="admin-nav-icon">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          liem Admin v1.0
        </div>
      </aside>

      <div className="admin-main">
        <div className="admin-topbar">
          <span className="admin-topbar-title">{title}</span>
          <span className="admin-topbar-right">{now}</span>
        </div>
        <div className="admin-content">
          {children}
        </div>
      </div>
    </div>
  );
}
