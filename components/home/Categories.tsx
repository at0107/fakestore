import Link from "next/link";

export function Categories() {
  return (
    <section className="max-w-6xl w-full mx-auto py-16 px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Ընտրեք Կատեգորիան
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        
        <Link 
          href="/products?category=electronics" 
          className="bg-white p-6 rounded-xl shadow border text-center hover:border-blue-500"
        >
          <div className="text-4xl mb-2">💻</div>
          <h3 className="font-semibold">Էլեկտրոնիկա</h3>
        </Link>

        <Link 
          href="/products?category=jewelery" 
          className="bg-white p-6 rounded-xl shadow border text-center hover:border-blue-500"
        >
          <div className="text-4xl mb-2">💍</div>
          <h3 className="font-semibold">Ոսկերչություն</h3>
        </Link>

        <Link 
          href="/products?category=men's clothing" 
          className="bg-white p-6 rounded-xl shadow border text-center hover:border-blue-500"
        >
          <div className="text-4xl mb-2">👔</div>
          <h3 className="font-semibold">Տղամարդու Հագուստ</h3>
        </Link>

        <Link 
          href="/products?category=women's clothing" 
          className="bg-white p-6 rounded-xl shadow border text-center hover:border-blue-500"
        >
          <div className="text-4xl mb-2">👗</div>
          <h3 className="font-semibold">Կանացի Հագուստ</h3>
        </Link>

      </div>
    </section>
  );
}