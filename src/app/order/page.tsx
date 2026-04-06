"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/config/site";

function OrderForm() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("product");
  const product = siteConfig.products.find((p) => p.id === productId);

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    kana: "",
    email: "",
    tel: "",
    postal: "",
    address: "",
    designRef: product?.id ?? "",
    nailShape: "ラウンド",
    nailLength: product?.sizes[0] ?? "ミディアム",
    colorPref: product?.colors[0] ?? "",
    occasion: "",
    designWish: "",
    note: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectedProduct = siteConfig.products.find((p) => p.id === form.designRef);

  if (submitted) {
    return (
      <section className="section">
        <div className="container" style={{ maxWidth: 680 }}>
          <div className="alert alert-success" style={{ textAlign: "center", padding: "40px 32px" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>✓</div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "12px" }}>デザイン申し込みを受け付けました</h2>
            <p style={{ fontSize: "0.9rem" }}>
              {form.email} 宛に確認メールをお送りします。<br />
              内容を確認後、担当者よりご連絡いたします。
            </p>
          </div>

          <div className="bank-box">
            <h3>お振込先（ご入金はご連絡後にお願いします）</h3>
            <dl>
              <div className="bank-row">
                <dt>銀行名</dt>
                <dd>{siteConfig.bank.bankName}</dd>
              </div>
              <div className="bank-row">
                <dt>支店名</dt>
                <dd>{siteConfig.bank.branchName} （支店番号：417）</dd>
              </div>
              <div className="bank-row">
                <dt>口座種別</dt>
                <dd>{siteConfig.bank.accountType}</dd>
              </div>
              <div className="bank-row">
                <dt>口座番号</dt>
                <dd>{siteConfig.bank.accountNumber}</dd>
              </div>
              <div className="bank-row">
                <dt>口座名義</dt>
                <dd>{siteConfig.bank.accountHolder}</dd>
              </div>
              {selectedProduct && (
                <div className="bank-row">
                  <dt>参考金額</dt>
                  <dd style={{ color: "var(--primary)", fontSize: "1.1rem", fontWeight: 700 }}>
                    ¥{selectedProduct.price.toLocaleString()}〜（税込）
                  </dd>
                </div>
              )}
            </dl>
          </div>

          <div className="alert alert-info">
            <p>{siteConfig.bank.note}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <div className="page-header">
        <h1>デザイン申し込みフォーム</h1>
        <p>ご要望をお聞かせください。担当者よりご連絡いたします。</p>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 680 }}>
          {/* 参考デザイン表示 */}
          {product && (
            <div style={{ background: "var(--bg-sub)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "20px", marginBottom: "32px", display: "flex", gap: "16px", alignItems: "center" }}>
              <img src={product.image} alt={product.name} style={{ width: 80, height: 100, objectFit: "cover", borderRadius: "4px" }} />
              <div>
                <p style={{ fontSize: "0.75rem", color: "var(--text-light)" }}>参考デザイン</p>
                <p style={{ fontWeight: 700, marginBottom: "4px" }}>{product.name}</p>
                <p style={{ fontWeight: 700, color: "var(--primary)" }}>¥{product.price.toLocaleString()}〜（税込）</p>
              </div>
            </div>
          )}

          <div className="alert alert-info" style={{ marginBottom: "32px" }}>
            <p>liemのネイルチップはすべて完全受注制です。お申し込み後、担当者よりデザインの詳細についてご連絡いたします。</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* お客様情報 */}
            <p style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "16px", paddingBottom: "8px", borderBottom: "2px solid var(--border)" }}>
              お客様情報
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div className="form-group">
                <label className="form-label">お名前<span className="required">*必須</span></label>
                <input className="form-input" name="name" value={form.name} onChange={handleChange} required placeholder="金岡 みほ" />
              </div>
              <div className="form-group">
                <label className="form-label">フリガナ<span className="required">*必須</span></label>
                <input className="form-input" name="kana" value={form.kana} onChange={handleChange} required placeholder="カナオカ ミホ" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">メールアドレス<span className="required">*必須</span></label>
              <input className="form-input" type="email" name="email" value={form.email} onChange={handleChange} required placeholder="example@email.com" />
            </div>

            <div className="form-group">
              <label className="form-label">電話番号<span className="required">*必須</span></label>
              <input className="form-input" type="tel" name="tel" value={form.tel} onChange={handleChange} required placeholder="090-0000-0000" />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "16px" }}>
              <div className="form-group">
                <label className="form-label">郵便番号<span className="required">*必須</span></label>
                <input className="form-input" name="postal" value={form.postal} onChange={handleChange} required placeholder="000-0000" />
              </div>
              <div className="form-group">
                <label className="form-label">お届け先住所<span className="required">*必須</span></label>
                <input className="form-input" name="address" value={form.address} onChange={handleChange} required placeholder="愛知県名古屋市..." />
              </div>
            </div>

            {/* デザイン希望 */}
            <p style={{ fontWeight: 700, fontSize: "0.95rem", margin: "32px 0 16px", paddingBottom: "8px", borderBottom: "2px solid var(--border)" }}>
              デザイン希望
            </p>

            <div className="form-group">
              <label className="form-label">参考デザイン</label>
              <select className="form-select" name="designRef" value={form.designRef} onChange={handleChange}>
                <option value="">指定なし（おまかせ）</option>
                {siteConfig.products.map((p) => (
                  <option key={p.id} value={p.id}>{p.name}（¥{p.price.toLocaleString()}〜）</option>
                ))}
              </select>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div className="form-group">
                <label className="form-label">ネイルの形</label>
                <select className="form-select" name="nailShape" value={form.nailShape} onChange={handleChange}>
                  {["ラウンド", "スクエア", "オーバル", "バレリーナ", "スティレット", "おまかせ"].map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">長さ</label>
                <select className="form-select" name="nailLength" value={form.nailLength} onChange={handleChange}>
                  {["ショート", "ミディアム", "ロング", "おまかせ"].map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">カラー・系統のご希望</label>
              <input className="form-input" name="colorPref" value={form.colorPref} onChange={handleChange} placeholder="例：ピンク系、ベージュ系、ホワイト系など" />
            </div>

            <div className="form-group">
              <label className="form-label">使用シーン</label>
              <input className="form-input" name="occasion" value={form.occasion} onChange={handleChange} placeholder="例：結婚式、成人式、日常使いなど" />
            </div>

            <div className="form-group">
              <label className="form-label">デザインのご要望<span className="required">*必須</span></label>
              <textarea
                className="form-textarea"
                name="designWish"
                value={form.designWish}
                onChange={handleChange}
                required
                rows={5}
                placeholder="ご希望のデザインをできるだけ詳しくお聞かせください。参考画像のURLがあればご記入ください。"
                style={{ minHeight: "120px" }}
              />
            </div>

            <div className="form-group">
              <label className="form-label">その他ご要望・ご質問</label>
              <textarea className="form-textarea" name="note" value={form.note} onChange={handleChange} placeholder="サイズ計測のご不安など、お気軽にご記入ください" />
            </div>

            <div className="alert alert-info">
              <p>お申し込み後、3営業日以内に担当者よりメールにてご連絡いたします。デザインのすり合わせ後、制作・お振込みのご案内をいたします。</p>
            </div>

            <button type="submit" className="btn btn-accent" style={{ width: "100%", padding: "16px", fontSize: "1rem" }}>
              申し込みを送信する
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default function OrderPage() {
  return (
    <Suspense>
      <OrderForm />
    </Suspense>
  );
}
