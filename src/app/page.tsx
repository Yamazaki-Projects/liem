import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Home() {
  const { tagline, description, products, category } = siteConfig;
  const newProducts = products.filter((p) => p.isNew).slice(0, 3);
  const featuredProducts = products.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <p className="hero-label">{category}</p>
          <h1 className="hero-title">{tagline}</h1>
          <p className="hero-desc">{description}</p>
          <Link href="/products" className="btn btn-accent">
            商品を見る
          </Link>
        </div>
      </section>

      {/* New Arrivals */}
      {newProducts.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="section-title">New Arrivals</h2>
            <p className="section-sub">新着アイテム</p>
            <div className="product-grid">
              {newProducts.map((product) => (
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
                    <h3 className="product-card-name">
                      {product.name}
                      <span className="badge-new">NEW</span>
                    </h3>
                    <p className="product-card-price">¥{product.price.toLocaleString()}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Feature Banner */}
      <section style={{ background: "var(--bg-sub)", padding: "64px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title">安心のショッピング</h2>
          <p className="section-sub">3つのポイント</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px", marginTop: "8px" }}>
            {[
              { icon: "🚚", title: "送料一律550円", desc: `${siteConfig.policy.freeShippingOver.toLocaleString()}円以上のご購入で送料無料` },
              { icon: "🔄", title: "返品・交換OK", desc: `商品到着後${siteConfig.policy.returnPeriod}以内、未使用品に限り対応` },
              { icon: "💳", title: "銀行振込対応", desc: "ご注文後にお振込先をご案内いたします" },
            ].map((item) => (
              <div key={item.title} style={{ background: "white", padding: "32px 24px", borderRadius: "var(--radius)", boxShadow: "var(--shadow)" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>{item.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "8px", color: "var(--accent)" }}>{item.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-light)", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Products</h2>
          <p className="section-sub">商品一覧</p>
          <div className="product-grid">
            {featuredProducts.map((product) => (
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
                  <h3 className="product-card-name">
                    {product.name}
                    {product.isNew && <span className="badge-new">NEW</span>}
                  </h3>
                  <p className="product-card-price">¥{product.price.toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/products" className="btn btn-outline">
              すべての商品を見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
