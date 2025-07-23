"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onAddToWishlist?: (product: Product) => void;
}

export function ProductCard({ 
  product, 
  onAddToCart, 
  onAddToWishlist 
}: ProductCardProps) {
  return (
    <Card className="group relative overflow-hidden rounded-lg border-0 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Wishlist button */}
        <button
          onClick={() => onAddToWishlist?.(product)}
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 bg-white/90 rounded-full hover:bg-white shadow-sm"
        >
          <Heart className="h-4 w-4 text-gray-600 hover:text-red-500 transition-colors" />
        </button>

        {/* Hover overlay with buttons */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <Button 
            variant="secondary" 
            size="sm"
            className="bg-white/95 hover:bg-white text-gray-900 shadow-sm"
            onClick={() => onAddToCart?.(product)}
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            加入購物車
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="bg-white/95 hover:bg-white border-white/50 text-gray-900 shadow-sm"
          >
            查看詳情
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-medium text-gray-900 line-clamp-2 leading-tight">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-[#8B4513]">
              {formatPrice(product.price_in_cents)}
            </span>
            <Badge variant="secondary" className="bg-[#FFB6C1]/20 text-[#8B4513] hover:bg-[#FFB6C1]/30">
              設計師精選
            </Badge>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full bg-[#8B4513] hover:bg-[#8B4513]/90 text-white"
          onClick={() => onAddToCart?.(product)}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          加入購物車
        </Button>
      </CardFooter>
    </Card>
  );
}