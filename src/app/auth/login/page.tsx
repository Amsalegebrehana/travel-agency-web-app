import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Login(){
    return (
        <div className="flex justify-center items-center mt-5">
            <div className="flex flex-col w-1/2 bg-white shadow-lg p-14 gap-6">
                <h1 className="text-2xl text-center ">Welcome back!</h1>
                <div>
                   <Label htmlFor="email" className="text-lg">Email</Label>
                   <Input type="email" placeholder="Email" />
                </div>
                <div>
                   <Label htmlFor="password" className="text-lg">Password</Label>
                   <Input type="password" placeholder="Password" />
                </div>
                <div className="flex justify-between">
                    <Link href="/" className="text-orange">Forgot password?</Link>
                    <Link href="/" className="text-orange">Sign up</Link>
                </div>
                <div>
                    <Button className="bg-[#F1A501] text-white px-6 py-4 rounded-lg w-full">Login</Button>
                </div>
            </div>
        </div>
    )
}