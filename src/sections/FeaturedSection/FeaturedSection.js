import { useProduct } from '../../contexts/ProductContext'

export default function FeaturedSection() {
  const { featuredProduct } = useProduct()

  return (
    <>
      {featuredProduct && (
        <main className='mx-auto max-w-7xl px-4 '>
          <h1>{featuredProduct.name}</h1>
          <button>Add to Cart</button>
          <img
            src={featuredProduct.image.src}
            alt={featuredProduct.image.alt}
          />
          <div className='grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8'>
            {/* Left column */}
            <div className='grid grid-cols-1 gap-4 lg:col-span-2'>
              <section>
                <div className='rounded-lg bg-white overflow-hidden '>
                  <div className='p-6'>
                    <h2>{featuredProduct.name}</h2>
                    <h3>{featuredProduct.category}</h3>
                    <p>{featuredProduct.description}</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right column */}
            <div className='grid grid-cols-1 gap-4'>
              <section>
                <div className='rounded-lg bg-white overflow-hidden '>
                  <div className='p-6'>
                    <h2>People also buy</h2>
                  </div>
                  <div className='flex'>
                    {featuredProduct.recommendations.map((recommendation) => {
                      return (
                        <img
                          key={recommendation.alt}
                          src={recommendation.src}
                          alt={recommendation.alt}
                        />
                      )
                    })}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      )}
    </>
  )
}
