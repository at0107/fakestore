import { Product } from "@/types/product";
import Image from "next/image";

export default function ProductDetailView({ product }: { product: Product }) {
    return (
        <div className="container flex mx-auto gap-8 px-4 min-h-screen py-8">
            <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
            <p className="text-lg text-gray-600">{product.description}</p>
            <p className="text-lg text-gray-600">Price: ${product.price}</p>
            <p className="text-lg text-gray-600">Category: {product.category}</p>
            <p className="text-lg text-gray-600">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">Add to Cart</button>
            </div>
            <div className="relative w-full aspect-square overflow-hidden rounded-md shadow-md bg-neutral-100 w-[500px] h-[500px]">
                <Image 
                src={product.image}
                 alt={product.title} 
                 fill
                 className="mt-4 object-contain"
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                 />
            </div>
        </div>
    );
}