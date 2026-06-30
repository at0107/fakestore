
import { getProducts } from "@/lib/api/products";
import ProductGrid from "@/components/product/ProductGrid";

export default  async  function ProductsPage(){
    const products = await getProducts();
    return(
        <div className="container mx-auto min-h-screen">
            <ProductGrid />
        </div>
    )
}

