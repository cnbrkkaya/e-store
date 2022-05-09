import { useCart } from '../../hooks/useCart/useCart'

export default function Product({ product }) {
  const { addProduct } = useCart()
  function handleAddProduct() {
    addProduct({
      id: product.id,
      name: product.name,
      price: product.price,
      image: {
        src: product.image.src,
        alt: product.image.alt,
      },
    })
  }
  return (
    <div className='group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden'>
      <div className='aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96'>
        {product.bestseller ? (
          <span className='absolute top-0 bg-white px-2'>Best Seller</span>
        ) : null}
        <img
          src={product.image.src}
          alt={product.image.alt}
          className='w-full h-full object-center object-cover sm:w-full sm:h-full'
        />
      </div>
      <button
        onClick={handleAddProduct}
        className='bg-black py-2 font-medium text-white'>
        ADD TO CART
      </button>
      <div className=' flex-1 p-4 space-y-1 flex flex-col'>
        <p className='text-lg font-bold text-gray-500'>{product.category}</p>
        <h2 className='text-xl font-bold text-gray-900'>
          <span aria-hidden='true' />
          {product.name}
        </h2>
        <div className='flex-1 flex flex-col justify-end'>
          <p className='text-2xl font-medium text-gray-500'>
            $ {product.price}
          </p>
        </div>
      </div>
    </div>
  )
}
