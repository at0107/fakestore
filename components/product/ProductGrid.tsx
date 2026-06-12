import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

export default function ProductGrid({products}: {products: Product[]}){
    return(
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                    products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    )
                        )
                    }
                </ul>
    )  
}