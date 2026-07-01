import Link from "next/link"

export function HeroSection() {
    return (
        <section className="w-full bg-white text-center py-24 px-4 border-b border-gray-200 shadow-sm">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Ձեր Ամենօրյա <span className="text-blue-600">Օնլայն Խանութը</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
          Գտեք ամեն ինչ մեկ վայրում՝ բարձր որակ, մատչելի գներ և արագ առաքում:
        </p>
        <Link
          href="/products"
          className="bg-blue-600 text-white font-semibold py-4 px-10 rounded-full hover:bg-blue-700 transition transform hover:scale-105 shadow-md hover:shadow-blue-500/30 inline-block"
        >
          Սկսել Գնումները &rarr;
        </Link>
      </section>
    )
}