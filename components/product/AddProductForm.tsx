"use client"
import { useState } from "react"
import Link from "next/link"
import type { Product } from "@/types/product"

const EMPTY_PRODUCT: Product = {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
        rate: 0,
        count: 0
    }
}

const CATEGORIES = ["men's clothing",
    "jewelery",
    "electronics",
    "women's clothing"
];


export default function AddProductForm() {
    const [product, setProduct] = useState<Product>(EMPTY_PRODUCT);
    const [errors, setErrors] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [createdProduct, setCreatedProduct] = useState<Product | null>(null);

    const handleChange = () => {};
    const handleSubmit = () => {};

    return (
        <form>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" />
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input type="number" id="price" name="price" />
            </div>
             <div>
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description"></textarea>
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select name="category" id="category">
                    <option value="">Select a category</option>
                </select>
            </div>
        </form>
    )
}