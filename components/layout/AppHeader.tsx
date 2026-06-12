import Link from "next/link";

export function AppHeader(){
    return (
        <header className=" border-zinc-200 bg-white flex justify-between items-center p-4">
            <div className="container mx-auto  border-b-2 border-zinc-200 px-4 py-2 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold">Logo</Link>

                <nav className="flex items-center gap-4">
                    <Link href="/">Home</Link>
                    <Link href="/products">Products</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
            </div>
        </header>
    )
} 