
import { Product } from "@/types/product"
import Image from "next/image"
import Link from "next/link"

export default function ProductCard({ product }: { product: Product }) {
    return (
        <li className="p-4">
            <Link href={`/products/${product.id}`}>
                <div className="relative w-full aspect-square overflow-hidden rounded-md shadow-md bg-neutral-100 hover:scale-105 transition-transform">
                    <Image
                        src={product.image}
                        alt={product.title}
                        className="object-contain p-4"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fill
                    />
                </div>
            </Link>
            <h2 className="mt-2 text-lg font-semibold">{product.title}</h2>
            <p className="italic">
                {product.description.length > 100 ? product.description.slice(0, 100) + "..." : product.description}
                {product.description.length > 100 && (
                    <button className="text-red-500">
                    Read more</button>
                )}
            </p>
            <p className="font-bold">${product.price}</p>
        </li>
    )
}