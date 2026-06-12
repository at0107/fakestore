import { Product } from "@/types/product"
import Image from "next/image"

export default function ProductCard({ product }: { product: Product }) {
    return (
        <li className="p-4">
            <div className="relative w-full aspect-square overflow-hidden rounded-md shadow-md bg-neutral-100">
                <Image
                    src={product.image}
                    alt={product.title}
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                />
            </div>
            <h2 className="mt-2 text-lg font-semibold">{product.title}</h2>
            <p className="italic">
                {product.description.length > 100 ? product.description.slice(0, 100) + "..." : product.description}
                {product.description.length > 100 && (
                    <button className="text-sm text-blue-500">Read more</button>
                )}
            </p>
            <p className="font-bold">${product.price}</p>
        </li>
    )
}