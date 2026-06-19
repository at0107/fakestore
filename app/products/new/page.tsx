import AddProductForm from "@/components/product/AddProductForm";
import {Metadata} from "next";
import Link from "next/link";


export const metadata: Metadata = {
    title: "New Product",
    description: "Create a new product",
}

export default function NewProductPage() {
    return (
        <div className="container mx-auto min-h-screen">
            <h1>New Product</h1>
            <Link href="/products">Back to Products</Link>
            <AddProductForm />
        </div>
    )
}