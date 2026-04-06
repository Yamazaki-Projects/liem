"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="page-header">
        <h1>お問い合わせ</h1>
        <p>ご不明な点はお気軽にお問い合わせください</p>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 640 }}>
          {submitted ? (
            <div className="alert alert-success" style={{ textAlign: "center", padding: "48px 32px" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>✓</div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "12px" }}>お問い合わせを受け付けました</h2>
              <p style={{ fontSize: "0.9rem" }}>
                {form.email} 宛に確認メールをお送りしました。<br />
                {siteConfig.company.businessHours}以内にご返信いたします。
              </p>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: "32px", padding: "20px", background: "var(--bg-sub)", borderRadius: "var(--radius)", fontSize: "0.875rem", lineHeight: 1.8, color: "var(--text-light)" }}>
                <p>お問い合わせへのご返答は <strong style={{ color: "var(--text)" }}>{siteConfig.company.businessHours}</strong> に行っております。</p>
                <p>お急ぎの場合は <strong style={{ color: "var(--text)" }}>{siteConfig.company.tel}</strong> までお電話ください。</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">お名前<span className="required">*必須</span></label>
                  <input className="form-input" name="name" value={form.name} onChange={handleChange} required placeholder="山田 花子" />
                </div>
                <div className="form-group">
                  <label className="form-label">メールアドレス<span className="required">*必須</span></label>
                  <input className="form-input" type="email" name="email" value={form.email} onChange={handleChange} required placeholder="example@email.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">お問い合わせ種別</label>
                  <select className="form-select" name="subject" value={form.subject} onChange={handleChange}>
                    <option value="">選択してください</option>
                    <option value="商品について">商品について</option>
                    <option value="注文・お支払いについて">注文・お支払いについて</option>
                    <option value="配送について">配送について</option>
                    <option value="返品・交換について">返品・交換について</option>
                    <option value="その他">その他</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">お問い合わせ内容<span className="required">*必須</span></label>
                  <textarea className="form-textarea" name="message" value={form.message} onChange={handleChange} required placeholder="ご質問・ご要望をご記入ください" style={{ minHeight: 160 }} />
                </div>
                <button type="submit" className="btn btn-accent" style={{ width: "100%", padding: "16px", fontSize: "1rem" }}>
                  送信する
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
}
