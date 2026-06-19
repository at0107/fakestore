"use client"
import Link from "next/link";
import { useState } from "react";


export function AppHeader(){
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    return (
        <header className=" border-zinc-200 bg-white flex justify-between items-center p-4">
            <div className="container mx-auto  border-b-2 border-zinc-200 px-4 py-2 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold">Logo</Link>

                <nav className="flex items-center gap-4">
                    <Link href="/">Home</Link>
                    <Link href="/products">Products</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                    {isLoggedIn &&<Link href="/products/new">+ Add Product</Link>}
                    <button 
                    onClick={() => setIsLoggedIn(!isLoggedIn)}
                    className={
                        isLoggedIn ? 'rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-600 hover:bg-zinc-200'
                        : 'rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700'
                    }
                    >
                        {isLoggedIn ? "Logout" : "Login"}
                    </button>
                </nav>
            </div>
        </header>
    )
} 