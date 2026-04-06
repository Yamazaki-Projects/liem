import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "会社概要" };

export default function AboutPage() {
  const { company, siteName } = siteConfig;

  return (
    <>
      <div className="page-header">
        <h1>会社概要</h1>
        <p>{siteName}を運営する会社についてご紹介します</p>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <table className="info-table">
            <tbody>
              {[
                ["会社名", company.name],
                ["設立", company.established],
                ["資本金", company.capital],
                ["代表者", company.representative],
                ["所在地", `〒${company.postalCode} ${company.address}`],
                ["電話番号", company.tel],
                ["メールアドレス", company.email],
                ["営業時間", company.businessHours],
                ["事業内容", company.description],
              ].map(([label, value]) => (
                <tr key={label}>
                  <th>{label}</th>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
