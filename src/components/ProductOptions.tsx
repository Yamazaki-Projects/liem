"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

type Product = (typeof siteConfig.products)[number];

export default function ProductOptions({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const orderHref = `/order?product=${product.id}&size=${encodeURIComponent(selectedSize)}&color=${encodeURIComponent(selectedColor)}`;

  return (
    <>
      {/* Sizes */}
      <div style={{ marginBottom: "24px" }}>
        <p style={{ fontSize: "0.875rem", fontWeight: 600, marginBottom: "10px" }}>
          サイズ：<span style={{ fontWeight: 400, color: "var(--text-light)" }}>{selectedSize}</span>
        </p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              style={{
                padding: "8px 20px",
                border: selectedSize === size ? "2px solid var(--accent)" : "1px solid var(--border)",
                borderRadius: "4px",
                fontSize: "0.875rem",
                cursor: "pointer",
                background: selectedSize === size ? "var(--accent)" : "var(--bg)",
                color: selectedSize === size ? "#fff" : "var(--text)",
                fontWeight: selectedSize === size ? 700 : 400,
                transition: "all 0.15s",
              }}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div style={{ marginBottom: "32px" }}>
        <p style={{ fontSize: "0.875rem", fontWeight: 600, marginBottom: "10px" }}>
          カラー：<span style={{ fontWeight: 400, color: "var(--text-light)" }}>{selectedColor}</span>
        </p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {product.colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              style={{
                padding: "8px 20px",
                border: selectedColor === color ? "2px solid var(--accent)" : "1px solid var(--border)",
                borderRadius: "4px",
                fontSize: "0.875rem",
                cursor: "pointer",
                background: selectedColor === color ? "var(--accent)" : "var(--bg)",
                color: selectedColor === color ? "#fff" : "var(--text)",
                fontWeight: selectedColor === color ? 700 : 400,
                transition: "all 0.15s",
              }}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Link
        href={orderHref}
        className="btn btn-accent"
        style={{ width: "100%", display: "block", textAlign: "center", padding: "16px" }}
      >
        注文する（銀行振込）
      </Link>
      <p style={{ fontSize: "0.75rem", color: "var(--text-light)", textAlign: "center", marginTop: "12px" }}>
        ご注文後、振込先口座をご案内いたします
      </p>
    </>
  );
}
