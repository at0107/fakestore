'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Product } from "@/types/product";
import { BASE_URL } from "@/lib/constants";

export default function ProductsPage() {
    const [allProducts, setAllProducts] = useState<Product[]>([]);

    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const [searchTerm, setSearchTerm] = useState("");

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${BASE_URL}/products`);
                if (!response.ok) throw new Error("Չհաջողվեց բեռնել ապրանքները");

                const data = await response.json();
                setAllProducts(data);
                setFilteredProducts(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);


    useEffect(() => {

        if (searchTerm.trim() === "") {
            setFilteredProducts(allProducts);
            return;
        }

        const results = allProducts.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredProducts(results);
    }, [searchTerm, allProducts]);

    if (isLoading) return <div className="text-center mt-10 text-xl">Ապրանքները բեռնվում են...</div>;
    if (error) return <div className="text-center mt-10 text-red-500">Սխալ: {error}</div>;

    return (
        <div className="max-w-6xl mx-auto mt-10 p-4">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Մեր Ապրանքները</h1>
                <Link
                    href="/products/new"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                    + Ավելացնել ապրանք
                </Link>
            </div>


            <div className="mb-8">
                <input
                    type="text"
                    placeholder="Փնտրել ապրանք ըստ անվանման..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full max-w-md border border-gray-300 rounded-md p-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
            </div>

            {filteredProducts.length === 0 ? (
                <div className="text-gray-500">Ոչինչ չի գտնվել "{searchTerm}" որոնմամբ:</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <Link href={`/products/${product.id}`} key={product.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="h-40 object-contain mb-4 mx-auto"
                            />
                            <h2 className="font-semibold text-gray-800 line-clamp-2 mb-2">{product.title}</h2>
                            <p className="text-blue-600 font-bold mt-auto">${product.price}</p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}