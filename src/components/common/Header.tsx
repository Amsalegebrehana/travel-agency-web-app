"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react" ;
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const hideNavigation = pathname === '/auth/login' || pathname === '/auth/register';
    const router = useRouter();

    return (
        <nav className="sticky py-4 px-4 md:px-32 mt-2">
            <div className="flex justify-between items-center">
                <Link href='/'>
                    <Image src="/images/logo/logo.svg" alt="logo" width={100} height={100} />
                </Link>
                
                <button 
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <Menu size={24} />
                </button>
           
                {!hideNavigation && (<div className={`${
                    isMenuOpen ? 'flex' : 'hidden'
                } md:flex flex-col md:flex-row absolute md:relative  left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 gap-4 md:gap-11 shadow-lg md:shadow-none`}>
                    <Link href="/" className="text-xl">Destinations</Link>
                    <Link href="/" className="text-xl">Hotels</Link>
                    <Link href="/" className="text-xl">Flights</Link>
                    <Link href="/" className="text-xl">Bookings</Link>
                    <Link href='/auth/login' className="text-xl">Login</Link>
                    <Button 
                        variant="outline" 
                        className="text-xl border border-black" 
                        onClick={() => router.push('/auth/register')}
                    >
                        Sign up
                    </Button>
                    <p className="text-xl">EN</p>
                </div>)}
            </div>
        </nav>
    )
}