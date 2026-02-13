import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo3.png";

const Footer = () => (
  <footer
    className="relative isolate py-12 overflow-hidden"
    style={{
      background: "linear-gradient(180deg, hsl(205 39% 28%) 0%, hsl(224 35% 14%) 100%)",
    }}
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-24 right-[-10%] h-80 w-80 rounded-full blur-3xl"
      style={{ backgroundColor: "hsl(205 55% 62% / 0.12)" }}
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-24 left-[-10%] h-72 w-72 rounded-full blur-3xl"
      style={{ backgroundColor: "hsl(43 85% 58% / 0.08)" }}
    />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-10">
        {/* Logo & Social */}
        <div>
          <img src={logo} alt="W&S Logo" className="h-16 w-16 object-contain mb-4" />
          <p className="text-white text-sm mb-4">Willburn & Stephenson Ltd.</p>
          <div className="flex gap-4">
            <a href="https://x.com/" target="_blank" aria-label="Twitter" className="text-white/70 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook" className="text-white/70 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram" className="text-white/70 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Foundation */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Foundation</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
            <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a></li>
            <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="tel:0742908934" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <Phone className="w-4 h-4" style={{ color: "hsl(43 85% 58%)" }} />
                0742908934
              </a>
            </li>
            <li>
              <a href="mailto:vincentmurimi74@gmail.com" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <Mail className="w-4 h-4" style={{ color: "hsl(43 85% 58%)" }} />
                vincentmurimi74@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/Kigali+Brooklyn+London+Hamburg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-white/70 hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5" style={{ color: "hsl(43 85% 58%)" }} />
                Kigali – Brooklyn – London - Hamburg
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Willburn & Stephenson Ltd. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
