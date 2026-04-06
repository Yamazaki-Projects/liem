import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const { siteName, company, nav } = siteConfig;

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>{siteName}</h2>
            <p>{siteConfig.description}</p>
          </div>
          <div className="footer-links">
            <h3>Menu</h3>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li><Link href="/law">特定商取引法に基づく表記</Link></li>
            </ul>
          </div>
          <div className="footer-info">
            <h3>Contact</h3>
            <p>
              {company.name}<br />
              〒{company.postalCode}<br />
              {company.address}<br />
              TEL: {company.tel}<br />
              {company.email}<br />
              {company.businessHours}
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {company.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
