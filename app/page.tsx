'use client'

import BlurFade from "@/components/ui/blur-fade";
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { UserIcon, MapPinIcon, Menu } from 'lucide-react'
import { useEffect } from 'react'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet"
import { InfiniteMovingCard } from '@/components/Scroll'
import Link from "next/link";

export default function OilLandingPage() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-[#F5E6D3]">
      <header className="bg-[#F7F3E3] shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href={"/"}>
          <div className="flex items-center space-x-3">
            <img src={"/logo.png"} className='h-14 '/>
          </div>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="text-[#2F5C57] hover:text-[#1D4A44] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#products" className="text-[#2F5C57] hover:text-[#1D4A44] transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-[#2F5C57] hover:text-[#1D4A44] transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-[#2F5C57] hover:text-[#1D4A44] transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#location" className="text-[#2F5C57] hover:text-[#1D4A44] transition-colors">
                  Location
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#2F5C57] hover:text-[#1D4A44] transition-colors">
                  Contact
                </a>
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
            <SheetContent  className="w-[300px] bg-[#F7F3E3]">
              <SheetTitle className="text-[#2F5C57] text-2xl font-bold mb-4">Menu</SheetTitle>
              <nav className="flex flex-col gap-4">
                <SheetClose>
                <a href="#about" className="text-[#2F5C57] hover:text-[#1D4A44] transition-colors text-lg">
                  About
                </a>
                </SheetClose>
                <SheetClose>

                <a href="#products" className="text-[#2F5C57] hover:text-[#1D4A44] transition-colors text-lg">
                  Products
                </a>
                </SheetClose>
                <SheetClose>

                <a href="#benefits" className="text-[#2F5C57] hover:text-[#1D4A44] transition-colors text-lg">
                  Benefits
                </a>
                </SheetClose>
                <SheetClose>

                <a href="#testimonials" className="text-[#2F5C57] hover:text-[#1D4A44] transition-colors text-lg">
                  Testimonials
                </a>
                </SheetClose>
                <SheetClose>

                <a href="#location" className="text-[#2F5C57] hover:text-[#1D4A44] transition-colors text-lg">
                  Location
                </a>
                </SheetClose>
                <SheetClose>

                <a href="#contact" className="text-[#2F5C57] hover:text-[#1D4A44] transition-colors text-lg">
                  Contact
                </a>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <BlurFade className="bg-[#F4EAC9] py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-[#2F5C57] mb-4">
                Traditional Cold Pressed Oils for Your Wellbeing
              </h1>
              <p className="text-xl text-gray-900 mb-8">
                Discover our range of authentic, bull-driven cold pressed oils, crafted using age-old traditional methods.
              </p>
              <div className="flex gap-4">
                <Link href="/products">
                  <Button 
                    size="lg" 
                    className="bg-[#E88D67] hover:bg-[#D47D57] transition-all hover:scale-105"
                  >
                    Shop Now
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white transition-all"
                >
                  <Link href={"/login"}>
                  <UserIcon className="mr-2 h-5 w-5" />
                  Login
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/image.png" 
                alt="Traditional oil extraction process"  
                className="rounded-lg"
              />
            </div>
          </div>
        </BlurFade>

        {/* Product Showcase */}
        <BlurFade inView>
        <section id="products" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#2F5C57] mb-12">Our Premium Oils</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Coconut Oil',
                  description: 'Cold pressed coconut oil for cooking and hair care...',
                  price: 349,
                  url: '/Coconut Oil V2.jpg',
                  originalPrice: 449,
                  options: 2
                },
                {
                  name: 'Mustard Oil',
                  description: 'Pure cold pressed mustard oil for healthy cooking and...',
                  url: '/Mustard Oil V2.jpg',
                  price: 249,
                  originalPrice: 349,
                  options: 2
                },
                {
                  name: 'Sunflower Oil',
                  description: 'Traditional cold pressed sunflower oil for natural flavor and...',
                  url: '/Sunflower Oil V2.jpg',
                  price: 299,
                  originalPrice: 399,
                  options: 3
                }
              ].map((product) => (
                <div 
                  key={product.name} 
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <Image 
                      src={product.url}
                      alt={product.name} 
                      width={400} 
                      height={300} 
                      className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#2F5C57] mb-2">{product.name}</h3>
                    <p className="text-gray-900 mb-4">{product.description}</p>
                    <div className="flex items-baseline mb-4">
                      <span className="text-3xl font-bold text-[#2F5C57]">₹{product.price}</span>
                      <span className="ml-2 text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Link href='/1'>
                        <Button 
                          className="w-full bg-[#E88D67] hover:bg-[#D47D57] transition-all"
                        >
                          View Details
                        </Button>
                      </Link>
                      <Button 
                        variant="outline" 
                        className="w-full border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white transition-all"
                      >
                        Add to Cart
                      </Button>
                    </div>
                    <p className="text-sm text-gray-500 mt-3 text-center">
                      {product.options} options available
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        </BlurFade>
        {/* About Us Section */}
        <BlurFade inView>
        <section id="about" className="py-20 bg-[#F5E6D3]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#2F5C57] mb-12">About Us</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <p className="text-gray-900 mb-4">
                  At Aayulkaalam, we are committed to preserving the traditional method of oil extraction using bull-driven wooden churners. Our journey began with a simple belief: that the ancient wisdom of oil extraction provides the purest and most nutritious oils.
                </p>
                <p className="text-gray-900 mb-4">
                  Founded with a vision to revive traditional oil extraction methods, we ensure that every drop of oil you receive is extracted using time-tested techniques that have been passed down through generations.
                </p>
                <p className="text-gray-900">
                  We are more than just an oil company - we are preservers of tradition and quality. Join us in our mission to bring the authentic taste and health benefits of traditionally extracted oils to your kitchen.
                </p> 
              </div>
              <div className="md:w-1/2 flex flex-col justify-center">
              <div className=''>
                <img
                  src="/cowcrop.png" 
                  alt="Traditional oil extraction process" 
                  className="rounded-lg object-contain "
                  />
                  </div>
              </div>
            </div>
          </div>
        </section>
        </BlurFade>
        {/* Benefits Section */}
        
        <section id="benefits" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#2F5C57] mb-12">Why Choose Our Oils?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Traditional', description: 'Extracted using bull-driven wooden churners' },
                { title: 'Pure', description: 'No heat or chemicals used in the process' },
                { title: 'Nutritious', description: 'Retains natural nutrients and antioxidants' },
                { title: 'Authentic', description: 'True to ancient extraction methods' },
              ].map((benefit) => (
                <div 
                  key={benefit.title} 
                  className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-[#8B4513]/10 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-[#2F5C57] mb-2">{benefit.title}</h3>
                  <p className="text-gray-900">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-[#F5E6D3]">
          <InfiniteMovingCard/>
        </section>

        {/* Global Map Section */}
        <section id="location" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#2F5C57] mb-12">Find Us</h2>
            <div className="bg-[#F5E6D3] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/placeholder.svg?height=400&width=800" 
                alt="Map showing our location" 
                width={800} 
                height={400} 
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-xl font-semibold text-[#2F5C57] mb-2">Aayulkaalam Main Store</h3>
              <p className="text-gray-900">
                <MapPinIcon className="inline-block h-5 w-5 mr-2" />
                123 Traditional Market, Heritage City, 12345
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-[#F5E6D3]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#2F5C57] mb-12">Stay Updated</h2>
            <div className="max-w-md mx-auto">
              <p className="text-center text-gray-900 mb-6">Subscribe to our newsletter for the latest updates and traditional oil benefits.</p>
              <form className="flex space-x-2">
                <Input type="email" placeholder="Enter your email" className="flex-grow" />
                <Button type="submit" className="bg-[#E88D67] hover:bg-[#D47D57]">Subscribe</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#2F5C57] text-white py-8">
      <div className="container mx-auto px-4">
        {/* Website Name and Slogan */}
        <div className='md:hidden'>
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold"> Aayul Kaalam</h1>
          <p className="text-orange-500 font-medium">Bull Driven Cold Pressed Oil</p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 text-sm">
          {/* Account Section */}
          <div>
            <h3 className="font-semibold">Account</h3>
            <ul className="mt-2 space-y-1 text-gray-300">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Profile
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  My Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shipping
                </a>
              </li>
            </ul>
          </div>

          {/* Socials Section */}
          <div>
            <h3 className="font-semibold">Socials</h3>
            <ul className="mt-2 space-y-1 text-gray-300">
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  X
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold">Contact</h3>
            <ul className="mt-2 space-y-1 text-gray-300">
              <li>
                <a href="#" className="hover:underline">
                  Whatsapp
                </a>
              </li>
              <li>
                <span>91008 98038</span>
              </li>
              <li>
                <a
                  href="mailto:info@gmail.com"
                  className="hover:underline"
                >
                  info@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-semibold">Legal</h3>
            <ul className="mt-2 space-y-1 text-gray-300">
                <li>
                  <a href="#" className="hover:underline">
                    Tearms and Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Return and Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Shipping and Payment Policy
                  </a>
                </li>
              </ul>
          </div>
        </div>
        </div>

        {/* PC/Tablet Footer Layout */}
        <div className="hidden md:flex justify-between items-center mt-10">
          {/* Website Info */}
          <div>
            <h1 className="text-2xl font-bold"> Aayul Kaalam</h1>
            <p className="text-orange-500 font-medium">Bull Driven Cold Pressed Oil</p>
          </div>

          {/* Footer Links */}
          <div className="flex space-x-8">
            <div>
              <h3 className="font-semibold">Account</h3>
              <ul className="mt-2 space-y-1 text-gray-300">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    My Cart
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Shipping
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Socials</h3>
              <ul className="mt-2 space-y-1 text-gray-300">
                <li>
                  <a href="#" className="hover:underline">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    X
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Contact</h3>
              <ul className="mt-2 space-y-1 text-gray-300">
                <li>
                  <a href="#" className="hover:underline">
                    Whatsapp
                  </a>
                </li>
                <li>
                  <span>91008 98038</span>
                </li>
                <li>
                  <a
                    href="mailto:info@gmail.com"
                    className="hover:underline"
                  >
                    info@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Legal</h3>
              <ul className="mt-2 space-y-1 text-gray-300">
                <li>
                  <a href="#" className="hover:underline">
                    Tearms and Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Return and Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Shipping and Payment Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center md:text-left mt-6">
          <h1 className="text-xl font-bold md:text-5xl">
          Fuel Your Life <span className="text-orange-500">Naturally.</span>
          </h1>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-xs">
          <p>&copy; {new Date().getFullYear()}  Aayul Kaalam. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

