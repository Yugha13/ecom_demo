"use client"
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet"
import { Heart, Menu, ShoppingCartIcon, User } from 'lucide-react'
import { motion } from 'framer-motion';
import { Minus, Plus, ArrowLeft, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Link from 'next/link';

interface CartItem {
  id: string;
  name: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Groundnut Oil',
      size: '1L',
      price: 550,
      quantity: 1,
      image: '/Groundnut Oil V2.jpg'
    },
    {
      id: '2',
      name: 'Mustard Oil',
      size: '1L',
      price: 595,
      quantity: 1,
      image: 'Mustard Oil V2.jpg'
    }
  ]);

  const updateQuantity = (id: string, change: number) => {
    setCartItems(items =>
      items.map(item => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast.success('Item removed from cart');
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

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
                    <Button variant='ghost'>
                        <div className='flex flex-col place-content-center text-[#2F5C57] hover:text-[#1D4A44] transition-colors'>
                        <ShoppingCartIcon/>
                        </div>
                        View Cart
                    </Button>
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
    <div className="min-h-screen py-12 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/products" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-2xl overflow-hidden shadow-lg"
        >
          <div className="p-6">
            <h1 className="text-2xl font-semibold mb-8">Shopping Cart</h1>

            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">Your cart is empty</p>
                <Link href="/">
                  <Button>Start Shopping</Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-8">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center gap-6 py-4 border-b">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.size}</p>
                      <p className="mt-1">₹{item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-right min-w-[100px]">
                      <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}

                <div className="pt-4 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>₹{shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-medium pt-4 border-t">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="pt-6">
                  <Button className="w-full" size="lg" onClick={() => toast.success('Order placed successfully!')}>
                    Checkout
                  </Button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default Cart;