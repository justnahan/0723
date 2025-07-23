import { Header } from "@/components/Header";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, Sparkles, Heart, Palette } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5E6D3] to-[#F5E6D3]/70">
      <Header />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-12 px-4 text-center bg-gradient-to-r from-[#F5E6D3] via-[#F5E6D3]/90 to-[#F5E6D3]">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Sparkles className="h-6 w-6 text-[#8B4513]" />
                <Badge variant="secondary" className="bg-[#FFB6C1]/20 text-[#8B4513] hover:bg-[#FFB6C1]/30">
                  創意生活，從小物開始
                </Badge>
                <Sparkles className="h-6 w-6 text-[#8B4513]" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-[#8B4513] leading-tight">
                發現生活中的
                <span className="text-transparent bg-gradient-to-r from-[#8B4513] to-[#FFB6C1] bg-clip-text">
                  創意美學
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-[#8B4513]/80 leading-relaxed max-w-2xl mx-auto">
                精選設計文具、創意小物、手作商品，每一件都承載著設計師的巧思與匠心，
                為你的生活注入更多美感與靈感。
              </p>
              
              <div className="flex items-center justify-center space-x-8 pt-4">
                <div className="flex items-center space-x-2 text-[#8B4513]/70">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="text-sm font-medium">設計師精選</span>
                </div>
                <div className="flex items-center space-x-2 text-[#8B4513]/70">
                  <Heart className="h-5 w-5 fill-current" />
                  <span className="text-sm font-medium">匠心工藝</span>
                </div>
                <div className="flex items-center space-x-2 text-[#8B4513]/70">
                  <Palette className="h-5 w-5 fill-current" />
                  <span className="text-sm font-medium">生活美學</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-12 left-12 opacity-20">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFB6C1] to-[#98FB98]"></div>
          </div>
          <div className="absolute bottom-12 right-12 opacity-20">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#98FB98] to-[#FFB6C1]"></div>
          </div>
        </section>

        <Separator className="bg-[#8B4513]/10" />

        {/* Featured Products Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Badge variant="outline" className="border-[#8B4513] text-[#8B4513]">
                  本週精選
                </Badge>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-4">
                設計師推薦商品
              </h2>
              <p className="text-[#8B4513]/70 text-lg max-w-2xl mx-auto">
                每一件商品都經過精心挑選，融合實用性與美學設計，為你的創意生活增添色彩。
              </p>
            </div>
            
            <ProductGrid className="animate-in fade-in-0 slide-in-from-bottom-8 duration-700" />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-[#8B4513] via-[#8B4513]/95 to-[#8B4513] text-white">
          <div className="container mx-auto text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h3 className="text-3xl font-bold">加入創意社群</h3>
              <p className="text-white/90 text-lg">
                與千位創意工作者一起分享靈感，發現更多美好的設計商品。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Badge variant="secondary" className="bg-[#FFB6C1] text-[#8B4513] hover:bg-[#FFB6C1]/90">
                  限時優惠 - 新會員首購 9 折
                </Badge>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
