import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "商品一覧",
  description: `${siteConfig.siteName}の商品一覧ページです。`,
};

export default function ProductsPage() {
  const { products } = siteConfig;

  return (
    <>
      <div className="page-header">
        <h1>商品一覧</h1>
        <p>全{products.length}点のアイテム</p>
      </div>

      <section className="section">
        <div className="container">
          <div className="product-grid">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="product-card">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={533}
                  className="product-card-img"
                  style={{ objectFit: "cover" }}
                />
                <div className="product-card-body">
                  <p className="product-card-category">{product.category}</p>
                  <h2 className="product-card-name">
                    {product.name}
                    {product.isNew && <span className="badge-new">NEW</span>}
                  </h2>
                  <p className="product-card-price">¥{product.price.toLocaleString()}<span style={{ fontSize: "0.75rem", fontWeight: 400, color: "var(--text-light)", marginLeft: 4 }}>（税込）</span></p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
