import React from 'react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet"
import { Heart, Menu, ShoppingCartIcon, User } from 'lucide-react'
import Link from 'next/link'


const page = () => {
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
              <Link href='/cart'>
                        
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

                <Link href="/cart" className="text-[#2F5C57] hover:text-[#1D4A44] transition-colors text-lg">
                  Cart
                </Link>
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
        <section id="products" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#2F5C57] mb-12">Our Products</h2>
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
                },
                {
                  name: 'Groundnut Oil',
                  description: 'Traditional cold pressed sunflower oil for natural flavor and...',
                  url: '/Sunflower Oil V2.jpg',
                  price: 299,
                  originalPrice: 399,
                  options: 3
                },
                {
                  name: 'Sesame Oil',
                  description: 'Traditional cold pressed sunflower oil for natural flavor and...',
                  url: '/Sesame Oil V2.jpg',
                  price: 299,
                  originalPrice: 399,
                  options: 3
                },
                {
                  name: 'Almond Oil',
                  description: 'Traditional cold pressed sunflower oil for natural flavor and...',
                  url: '/Almond Oil V2.jpg',
                  price: 299,
                  originalPrice: 399,
                  options: 3
                },
                {
                  name: 'Castor Oil',
                  description: 'Traditional cold pressed sunflower oil for natural flavor and...',
                  url: '/Castor Oil V2.jpg',
                  price: 299,
                  originalPrice: 399,
                  options: 3
                },
                {
                  name: 'Flaxseed Oil',
                  description: 'Traditional cold pressed sunflower oil for natural flavor and...',
                  url: '/Flaxseed Oil V2.jpg',
                  price: 299,
                  originalPrice: 399,
                  options: 3
                },
                {
                  name: 'Neem Oil',
                  description: 'Traditional cold pressed sunflower oil for natural flavor and...',
                  url: '/Neem Oil V2.jpg',
                  price: 299,
                  originalPrice: 399,
                  options: 3
                },
                {
                  name: 'Cashew Oil',
                  description: 'Traditional cold pressed sunflower oil for natural flavor and...',
                  url: '/Cashew Oil V2.jpg',
                  price: 299,
                  originalPrice: 399,
                  options: 3
                },
                {
                  name: 'Cashew Oil Pillar',
                  description: 'Traditional cold pressed sunflower oil for natural flavor and...',
                  url: '/Cashew Oil Pillar V2.jpg',
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
                    <img
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
    </div>
  )
}

export default page