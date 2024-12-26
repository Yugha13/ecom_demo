'use client'

import { SheetClose, SheetContent, SheetTitle } from "@/components/ui/sheet"

export default function MenuSheetContent() {

  return (
    <SheetContent className="w-[300px] bg-[#F7F3E3]">
      <SheetTitle className="text-[#2F5C57] text-2xl font-bold mb-4">Menu</SheetTitle>
      <nav className="flex flex-col gap-4">
      <SheetClose asChild>
        <a href="#about" className="text-[#2F5C57] hover:text-[#1D4A44] transition-colors text-lg">
          About 123
        </a>
      </SheetClose>
        <a href="#products" className="text-[#2F5C57] hover:text-[#1D4A44] transition-colors text-lg" >
          Products
        </a>
        <a href="#benefits" className="text-[#2F5C57] hover:text-[#1D4A44] transition-colors text-lg"  >
          Benefits
        </a>
        <a href="#testimonials" className="text-[#2F5C57] hover:text-[#1D4A44] transition-colors text-lg"  >
          Testimonials
        </a>
        <a href="#location" className="text-[#2F5C57] hover:text-[#1D4A44] transition-colors text-lg"  >
          Location
        </a>
        <a href="#contact" className="text-[#2F5C57] hover:text-[#1D4A44] transition-colors text-lg"  >
          Contact
        </a>
      </nav>
    </SheetContent>
  )
}

