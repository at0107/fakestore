import { BASE_URL, REVALIDATE_SECONDS } from "../constants";
import { Product } from "@/types/product";

// const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getProducts():Promise<Product[]>{
    // await wait(5000); 
    const response = await fetch(`${BASE_URL}/products`,{
        next: {
            revalidate: REVALIDATE_SECONDS,
        },
    });
    if(!response.ok) {
        throw new Error("Failed to fetch products")
    }
    const data = await response.json();
    return data as Product[];
}

export async function getProduct(id: string): Promise<Product>{
    const response = await fetch(`${BASE_URL}/products/${id}`,{
        next: {
            revalidate: REVALIDATE_SECONDS,
        },
    });
    if(!response.ok){
        throw new Error("Failed to fetch product")
    }
    const data = await response.json();
    return data;
}