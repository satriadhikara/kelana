"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    product: [
      { name: "Fitur", href: "#sdk-Description" },
      { name: "Keuntungan", href: "#why-kelana" },
      { name: "Tentang Kami", href: "#about" },
    ],
    support: [
      { name: "Farrel Natha Saskoro"},
      { name: "Mohammad Andhika Fadillah"},
      { name: "Satriadhikara Panji Yudhistira"},
      { name: "Gracya Tio Damena Sidabutar"},
      { name: "Yusril Fazri Mahendra"},
    ],
  };

  const contactInfo = [
    { icon: Instagram, text: "farrel_ns", href: "https://instagram.com/farrel_ns" },
    { icon: Instagram, text: "andhikafdh", href: "https://instagram.com/andhikafdh" },
    { icon: Instagram, text: "satriadhikara", href: "https://instagram.com/satriadhikara" },
    { icon: Instagram, text: "gracyasidabutar", href: "https://instagram.com/gracyasidabutar" },
    { icon: Instagram, text: "yusrilfazri", href: "https://instagram.com/yusrilfazri" },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#FF5721] via-[#FF7043] to-[#FF906D] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl font-bold">Kelana</h3>
            </div>
            <p className="text-white/90 text-sm leading-relaxed mb-6">
              Jelajahi kekayaan budaya Indonesia dengan cara yang menyenangkan dan interaktif. Temukan sejarah, raih hadiah!
            </p>
          </motion.div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-4">Produk</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-white/80 hover:text-white text-sm transition-colors inline-block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4">Pencipta</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <span className="text-white/80 text-sm">
                    {link.name}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-4">Kontak</h4>
            <ul className="space-y-3">
              {contactInfo.map((info) => (
                <li key={info.text}>
                  <motion.a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-white/80 hover:text-white transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <info.icon className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">@{info.text}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/20"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70"
        >
          <p>© 2025 Kelana. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}