import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"


export default function Header(){
    return (
        <nav className="sticky py-4 mx-32 mt-2">
            <div className="flex justify-between gap-12">
                <div>
                    <Image src="/images/logo/logo.svg" alt="logo" width={100} height={100} />
                </div>
                <div className="flex gap-11">
                    <Link href="/" className="text-xl">Desitnations</Link>
                    <Link href="/" className="text-xl">Hotels</Link>
                    <Link href="/" className="text-xl">Flights</Link>
                    <Link href="/" className="text-xl">Bookings</Link>
                    <Link href='/login' className="text-xl">Login</Link>
                    <Button variant="outline" className="text-xl border border-black">Sign up </Button>
                    <p  className="text-xl">EN</p>
                </div>
            </div>

        </nav>
    )
}