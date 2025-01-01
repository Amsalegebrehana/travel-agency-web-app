import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Register(){
    return (
        <div className="flex justify-center items-center mt-5">
            <div className="flex flex-col w-1/2 bg-white shadow-lg p-14 gap-6">
                <h1 className="text-2xl text-center ">Sign up</h1>
                <div className="flex gap-3 w-full">
                    <div className=" w-1/2">
                        <Label htmlFor="email" className="text-lg">First Name</Label>
                        <Input type="email" placeholder="First Name" />
                    </div>
                    <div className=" w-1/2">
                        <Label htmlFor="email" className="text-lg">Last Name</Label>
                        <Input type="email" placeholder="Last Name" />
                    </div>
                </div>
                <div>
                   <Label htmlFor="email" className="text-lg">Email</Label>
                   <Input type="email" placeholder="Email" />
                </div>
                <div>
                   <Label htmlFor="password" className="text-lg">Password</Label>
                   <Input type="password" placeholder="Password" />
                </div>
                <div className="flex justify-end">
    
                    <Link href="/auth/login" className="text-orange">Sign in</Link>
                </div>
                <div>
                    <Button className="bg-[#F1A501] text-white px-6 py-4 rounded-lg w-full">Login</Button>
                </div>
            </div>
        </div>
    )
}