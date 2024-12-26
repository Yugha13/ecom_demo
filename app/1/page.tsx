"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, ShoppingCart, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from 'sonner';
import { Heart, Menu, ShoppingCartIcon, User } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import Link from 'next/link';

const ProductCard = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedSize, setSelectedSize] = useState('1L');

  const images = [
    '/Groundnut Oil V2.jpg',
    '/Groundnut Oil V1.jpg',
    '/Groundnut Oil V3.jpg'
  ];

  const sizes = {
    '500ml': 300,
    '1L': 550
  };

  const handleAddToCart = () => {
    toast.success('Added to cart', {
      description: `${quantity} * ${selectedSize} added`
    });
  };

  return (
    <div>
        <header className="backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={"/"}>
          <div className="flex items-center space-x-3">
            <img src={"/logo.png"} className='h-14 '/>
          </div>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                    <Button variant='ghost'>
                        <div className='flex flex-col place-content-center text-[#2F5C57] hover:text-[#1D4A44] transition-colors'>
                        <Heart className='color-red'/>
                        </div>
                        Wish List
                    </Button>
                </li>
              <li>
                <Link href={"/cart"}>
                    <Button variant='ghost'>
                        <div className='flex flex-col place-content-center text-[#2F5C57] hover:text-[#1D4A44] transition-colors'>
                        <ShoppingCartIcon/>
                        </div>
                        View Cart
                    </Button>
                </Link>
                </li>
              <li>
                    <Button variant='outline'>
                        <div className='flex flex-col place-content-center text-[#2F5C57] hover:text-[#1D4A44] transition-colors'>
                        <User/>
                        </div>
                        Profile
                    </Button>
                </li>
            </ul>
          </nav>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent  className="w-[300px]">
              <SheetTitle className="text-[#2F5C57] text-2xl font-bold mb-4">Menu</SheetTitle>
              <nav className="flex flex-col gap-4">
                <SheetClose>
                <a href="#" className="text-[#2F5C57] hover:text-[#1D4A44] transition-colors text-lg">
                  Profile
                </a>
                </SheetClose>
                <SheetClose>
                <a href="#" className="text-[#2F5C57] hover:text-[#1D4A44] transition-colors text-lg">
                  Wishlist
                </a>
                </SheetClose>
                <SheetClose>
                <a href="#" className="text-[#2F5C57] hover:text-[#1D4A44] transition-colors text-lg">
                  Cart
                </a>
                </SheetClose>
                <SheetClose>
                <a href="#" className="text-[#2F5C57] hover:text-[#1D4A44] transition-colors text-lg">
                  Logout
                </a>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

    <div className="max-w-7xl mx-auto p-6 animate-fade-in mt-5">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-effect rounded-2xl overflow-hidden shadow-lg"
      >
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <motion.div 
              className="aspect-square rounded-xl overflow-hidden bg-secondary/10"
              layoutId="product-image"
            >
              <img 
                src={images[activeImage]} 
                alt="Premium Oil Product" 
                className="w-full h-full object-cover product-image"
                loading="lazy"
              />
            </motion.div>
            <div className="flex gap-4 justify-center">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 h-20 rounded-lg overflow-hidden transition-all ${
                    activeImage === idx ? 'ring-2 ring-primary' : 'opacity-70'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`Product view ${idx + 1}`} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <span className="px-3 py-1 bg-secondary/50 rounded-full text-sm">Premium Collection</span>
              <h1 className="mt-4 text-3xl font-semibold">Groundnut Oil</h1>
              <p className="mt-2 text-2xl font-medium">₹{sizes[selectedSize as keyof typeof sizes]}</p>
            </div>

            <p className="text-muted-foreground">
              Pure, natural essential oil extracted through sustainable practices. Perfect for aromatherapy and skincare routines.
            </p>

            <div className="space-y-4">
            <RadioGroup
                defaultValue="1L"
                value={selectedSize}
                onValueChange={setSelectedSize}
                className="flex gap-4"
              >
                {Object.entries(sizes).map(([size]) => (
                  <div key={size} className="flex items-center space-x-2">
                    <RadioGroupItem value={size} id={size} />
                    <Label htmlFor={size}>{size}</Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="quantity-input"
                  min="1"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <Button 
                className="w-full bg-[#E88D67] hover:bg-[#D47D57] transition-all"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </div>

            <div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-left w-full flex items-center justify-between"
              >
                <h3 className="font-medium">Product Details</h3>
                {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              <div className={`expandable-content ${isExpanded ? 'max-h-48' : 'max-h-0'}`}>
                <p className="mt-2 text-sm text-muted-foreground">
                  Our premium essential oil is carefully extracted using traditional methods to preserve its natural properties. Each bottle contains 30ml of pure, concentrated oil suitable for various applications. The oil is packaged in a UV-protected glass bottle to maintain its potency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
    </div>
  );
};

export default ProductCard;
