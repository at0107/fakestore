"use client"
import { useState } from "react"
import Link from "next/link"
import type { Product } from "@/types/product"
import { BASE_URL } from "@/lib/constants"

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
    const [fields, setFields] = useState<Product>(EMPTY_PRODUCT);
    const [errors, setErrors] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [createdProduct, setCreatedProduct] = useState<Product | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name,value} = event.target;
        setFields({...fields,[name]: value})
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setErrors(null);
        setIsLoading(true);
        try{
            const response = await fetch(`${BASE_URL}/products`, {
                method: 'POST',
                body: JSON.stringify(fields),
            })
            if(!response.ok){
                throw new Error("Failed to create product")
            }
            const data = await response.json();
            setCreatedProduct(data)
        } catch (error:unknown) {
            setErrors(error instanceof Error ? error.message: "An unknown error occured")
        } finally {
            setIsLoading(false)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input 
                type="text" 
                id="title" 
                name="title" 
                value={fields.title}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input 
                type="number" 
                id="price" 
                name="price" 
                value={fields.price}
                onChange={handleChange}
                required
                />
            </div>
             <div>
                <label htmlFor="description">Description</label>
                <textarea 
                name="description" 
                id="description"
                value={fields.description}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select 
                name="category" 
                id="category"
                value={fields.category}
                onChange={handleChange}
                required
                >
                    <option value="">Select a category</option>
                    {CATEGORIES.map((category) => (
                        <option key={category} value="{category}">{category}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="image">Image *</label>
                <input 
                type="text"
                id="image"
                name="image"
                value={fields.image}
                onChange={handleChange}
                required
                 />
            </div>

            <button type="submit" disabled={isLoading}>
                {isLoading ? "Creating": "Create Product"}
            </button>
        </form>
    )
}