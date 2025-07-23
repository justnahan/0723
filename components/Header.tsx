"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Search, 
  ShoppingCart, 
  User, 
  Heart, 
  Menu,
  Palette
} from "lucide-react";

export function Header() {
  const [cartItemsCount] = useState(0);
  const [wishlistCount] = useState(0);

  const categories = [
    { name: "文具用品", href: "/category/stationery" },
    { name: "創意小物", href: "/category/creative" },
    { name: "手作商品", href: "/category/handmade" },
    { name: "設計師聯名", href: "/category/designer" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#8B4513] to-[#FFB6C1] flex items-center justify-center">
                <Palette className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-xl text-[#8B4513]">創意小鋪</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-[#8B4513] hover:bg-[#F5E6D3] hover:text-[#8B4513]">
                  商品分類
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    {categories.map((category) => (
                      <NavigationMenuLink
                        key={category.name}
                        href={category.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F5E6D3] hover:text-[#8B4513] focus:bg-[#F5E6D3] focus:text-[#8B4513]"
                      >
                        <div className="text-sm font-medium leading-none">{category.name}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          精選{category.name}商品
                        </p>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-[#8B4513] transition-colors hover:bg-[#F5E6D3] hover:text-[#8B4513] focus:bg-[#F5E6D3] focus:text-[#8B4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  關於我們
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/designers"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-[#8B4513] transition-colors hover:bg-[#F5E6D3] hover:text-[#8B4513] focus:bg-[#F5E6D3] focus:text-[#8B4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  設計師專區
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-sm mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="搜尋商品、設計師..."
                className="pl-10 bg-[#F5E6D3]/30 border-[#F5E6D3] focus:border-[#8B4513] focus:ring-[#8B4513]"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Mobile Search */}
            <Button variant="ghost" size="icon" className="md:hidden text-[#8B4513] hover:bg-[#F5E6D3]">
              <Search className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="relative text-[#8B4513] hover:bg-[#F5E6D3]">
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-[#FFB6C1] text-[#8B4513] hover:bg-[#FFB6C1]"
                >
                  {wishlistCount}
                </Badge>
              )}
            </Button>

            {/* Shopping Cart */}
            <Button variant="ghost" size="icon" className="relative text-[#8B4513] hover:bg-[#F5E6D3]">
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-[#FFB6C1] text-[#8B4513] hover:bg-[#FFB6C1]"
                >
                  {cartItemsCount}
                </Badge>
              )}
            </Button>

            {/* User Account */}
            <Button variant="ghost" size="icon" className="text-[#8B4513] hover:bg-[#F5E6D3]">
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-[#8B4513] hover:bg-[#F5E6D3]">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      type="search"
                      placeholder="搜尋商品、設計師..."
                      className="pl-10"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold text-[#8B4513] mb-3">商品分類</h3>
                    {categories.map((category) => (
                      <Button
                        key={category.name}
                        variant="ghost"
                        className="w-full justify-start text-[#8B4513] hover:bg-[#F5E6D3]"
                      >
                        {category.name}
                      </Button>
                    ))}
                  </div>
                  
                  <div className="space-y-2 pt-4 border-t">
                    <Button variant="ghost" className="w-full justify-start text-[#8B4513] hover:bg-[#F5E6D3]">
                      關於我們
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-[#8B4513] hover:bg-[#F5E6D3]">
                      設計師專區
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}