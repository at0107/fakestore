import {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {getProduct} from '@/lib/api/products';
import ProductDetailView from '@/components/product/ProductDetailView';

type PageParams = {
    params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: PageParams) {
    const {id}  = await params;
    const productID = parseInt(id, 10);

    const isLooksWrong = Number.isNaN(productID) || productID < 1;

    if(isLooksWrong){
        notFound();
    }

    const product = await getProduct(id);
    if(!product){
        notFound();
    }

    return (
        <div className="container mx-auto min-h-screen py-8">
      <ProductDetailView product={product} />
    </div>
    )
    
}