"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Palette
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "關於我們", href: "/about" },
      { name: "品牌故事", href: "/story" },
      { name: "加入我們", href: "/careers" },
      { name: "媒體報導", href: "/press" },
    ],
    service: [
      { name: "配送資訊", href: "/shipping" },
      { name: "退換貨政策", href: "/returns" },
      { name: "會員專區", href: "/membership" },
      { name: "客服中心", href: "/support" },
    ],
    categories: [
      { name: "文具用品", href: "/category/stationery" },
      { name: "創意小物", href: "/category/creative" },
      { name: "手作商品", href: "/category/handmade" },
      { name: "設計師聯名", href: "/category/designer" },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-[#8B4513] to-[#6B3410] text-white">
      <div className="container mx-auto px-4 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-white to-[#FFB6C1] flex items-center justify-center">
                <Palette className="h-4 w-4 text-[#8B4513]" />
              </div>
              <span className="font-bold text-xl">創意小鋪</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              創意生活，從小物開始。我們致力於為每一位熱愛設計的朋友，提供最具質感的文創商品，讓創意成為生活的一部分。
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">關於我們</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">客戶服務</h3>
            <ul className="space-y-2">
              {footerLinks.service.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">訂閱電子報</h3>
            <p className="text-white/80 text-sm">
              訂閱我們的電子報，搶先獲得最新商品資訊和獨享優惠。
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="請輸入您的 Email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white focus:bg-white/20"
              />
              <Button className="w-full bg-[#FFB6C1] hover:bg-[#FFB6C1]/90 text-[#8B4513] font-medium">
                立即訂閱
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 mb-6" />

        {/* Contact & Product Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white">聯絡資訊</h4>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+886-2-1234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@creativeshop.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>台北市大安區創意街123號</span>
              </div>
            </div>
          </div>

          {/* Product Categories */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white">商品分類</h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.categories.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 mb-4" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>© {currentYear} 創意小鋪 Creative Shop. 版權所有</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="/privacy" className="hover:text-white transition-colors">
              隱私政策
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              使用條款
            </a>
            <a href="/sitemap" className="hover:text-white transition-colors">
              網站地圖
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}