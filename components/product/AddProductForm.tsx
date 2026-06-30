'use client'

import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/types/product";
import { BASE_URL } from "@/lib/constants";

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
};

const CATEGORIES = [
  "men's clothing",
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
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrors(null);
    setIsLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/products`, {
        method: 'POST',
        body: JSON.stringify(fields),
      });

      if (!response.ok) {
        throw new Error("Failed to create product");
      }

      const data = await response.json();
      setCreatedProduct(data);
      setFields(EMPTY_PRODUCT);
    } catch (error: unknown) {
      setErrors(error instanceof Error ? error.message : "An unknown error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      
    
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Ավելացնել նոր ապրանք</h1>
        <Link 
          href="/products" 
          className="text-sm text-blue-600 hover:text-blue-800 underline"
        >
          &larr; Հետ դեպի ապրանքներ
        </Link>
      </div>

 
      {errors && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 border border-red-400 rounded">
          {errors}
        </div>
      )}
      
      {createdProduct && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 border border-green-400 rounded">
          Ապրանքը հաջողությամբ ստեղծվեց (ID: {createdProduct.id})!
        </div>
      )}
    
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        
      
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Անվանում <span className="text-red-500">*</span>
          </label>
          <input 
            type="text" 
            id="title"
            name="title"
            value={fields.title}
            onChange={handleChange}
            required
            placeholder="Օրինակ՝ Fjallraven Backpack"
            className="w-full border border-gray-300 rounded-md p-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />
        </div>

     
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
            Գին ($) <span className="text-red-500">*</span>
          </label>
          <input 
            type="number" 
            id="price"
            name="price"
            value={fields.price}
            onChange={handleChange}
            required
            placeholder="0.00"
            className="w-full border border-gray-300 rounded-md p-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />
        </div>

       
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Նկարագրություն <span className="text-red-500">*</span>
          </label>
          <textarea 
            id="description"
            name="description"
            value={fields.description}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Գրեք ապրանքի մանրամասները..."
            className="w-full border border-gray-300 rounded-md p-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none"
          ></textarea>
        </div>

   
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Կատեգորիա <span className="text-red-500">*</span>
          </label>
          <select 
            id="category"
            name="category"
            value={fields.category}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
          >
            <option value="">Ընտրեք կատեգորիան...</option>
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

  
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
            Նկարի հղում (URL) <span className="text-red-500">*</span>
          </label>
          <input 
            type="text" 
            id="image"
            name="image"
            value={fields.image}
            onChange={handleChange}
            required
            placeholder="https://fakestoreapi.com/img/..."
            className="w-full border border-gray-300 rounded-md p-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />
        </div>

  
        <button 
          type="submit" 
          disabled={isLoading}
          className={`mt-4 text-white font-semibold py-3 px-4 rounded-md transition active:scale-[0.98] ${
            isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isLoading ? "Ստեղծվում է..." : "Ստեղծել Ապրանք"}
        </button>

      </form>
    </div>
  );
}