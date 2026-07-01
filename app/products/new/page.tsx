import AddProductForm from "@/components/product/AddProductForm"; 
// Եթե այն անվանական (named) ես էքսպորտ արել, ապա՝ import { AddProductForm } ...

export default function NewProductPage() {
  return (
    // bg-gray-50-ը տալիս է հաճելի բաց մոխրագույն ֆոն
    // py-12-ը վերևից տարածություն է բացում, որ ֆորման չկպչի նավիգացիային
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <AddProductForm />
      </div>
    </div>
  );
}