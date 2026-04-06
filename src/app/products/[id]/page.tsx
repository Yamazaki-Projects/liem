import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import ProductOptions from "@/components/ProductOptions";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return siteConfig.products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = siteConfig.products.find((p) => p.id === id);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = siteConfig.products.find((p) => p.id === id);
  if (!product) notFound();

  return (
    <>
      <section className="section">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="breadcrumb">
            <Link href="/">ホーム</Link>
            <span>/</span>
            <Link href="/products">商品一覧</Link>
            <span>/</span>
            <span>{product.name}</span>
          </nav>

          {/* Product Detail */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", marginTop: "8px" }}>
            {/* Image */}
            <div>
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={800}
                style={{ width: "100%", height: "auto", borderRadius: "var(--radius)", objectFit: "cover" }}
                priority
              />
            </div>

            {/* Info */}
            <div>
              <p style={{ fontSize: "0.8rem", color: "var(--text-light)", marginBottom: "8px" }}>{product.category}</p>
              <h1 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "16px", color: "var(--accent)" }}>
                {product.name}
                {product.isNew && <span className="badge-new">NEW</span>}
              </h1>
              <p style={{ fontSize: "2rem", fontWeight: 700, color: "var(--accent)", marginBottom: "4px" }}>
                ¥{product.price.toLocaleString()}
              </p>
              <p style={{ fontSize: "0.8rem", color: "var(--text-light)", marginBottom: "32px" }}>税込・送料別</p>

              <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "var(--text)", marginBottom: "32px" }}>
                {product.description}
              </p>

              {/* Interactive size/color selector + CTA */}
              <ProductOptions product={product} />

              {/* Shipping */}
              <div style={{ marginTop: "32px", padding: "16px", background: "var(--bg-sub)", borderRadius: "var(--radius)", fontSize: "0.8rem", color: "var(--text-light)", lineHeight: 1.8 }}>
                <p>送料：{siteConfig.policy.shippingFee}（{siteConfig.policy.freeShippingOver.toLocaleString()}円以上で送料無料）</p>
                <p>返品：{siteConfig.policy.returnPeriod}以内・{siteConfig.policy.returnNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
