//Contexts
import { useProduct } from '../../hooks/useProduct/useProduct'
import { useCart } from '../../hooks/useCart/useCart'

export default function FeaturedSection() {
  const { featuredProduct } = useProduct()
  const { addProduct, setCartVisible } = useCart()

  function handleAddProduct() {
    addProduct({
      id: featuredProduct.id,
      name: featuredProduct.name,
      price: featuredProduct.price,
      image: {
        src: featuredProduct.image.src,
        alt: featuredProduct.image.alt,
      },
    })
    //After adding product to cart, set cart visible to true
    setCartVisible(true)
  }

  return (
    <>
      {featuredProduct && (
        <main className='mx-auto max-w-7xl px-4 '>
          <div className='flex justify-between'>
            <div className='py-2'>
              <h1 className='text-md sm:text-3xl py-2 font-bold text-black-900'>
                {featuredProduct.name}
              </h1>
            </div>
            <div className='py-6'>
              <button onClick={handleAddProduct} className=''>
                <span className='bg-black right-0 sm:tracking-widest text-white py-2 px-4 sm:px-12 '>
                  ADD TO CART
                </span>
              </button>
            </div>
          </div>
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
                    <h2 className='font-bold py-2'>{featuredProduct.name}</h2>
                    <h3 className='font-bold py-2 text-gray-500'>
                      {featuredProduct.category}
                    </h3>
                    <p className='text-gray-600 '>
                      {featuredProduct.description}
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right column */}
            <div className='grid grid-cols-1 gap-4'>
              <section>
                <div className='rounded-lg bg-white overflow-hidden '>
                  <div className='py-6 text-right'>
                    <h2 className='font-bold'>People also buy</h2>
                  </div>
                  <div className='flex justify-between'>
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
                  <div className='flex flex-col text-right py-8'>
                    <h3 className='font-bold text-lg'>Details</h3>
                    <p className='text-gray-600 py-2'>
                      Size: 1020 x 1020 pixels
                    </p>
                    <p className='text-gray-600'>Size: 15mb</p>
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
