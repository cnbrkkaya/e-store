export default function Product({ product }) {
  return (
    <div className='group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden'>
      <div className='aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96'>
        {product.bestseller ? <span>Best Seller</span> : null}
        <img
          src={product.image.src}
          alt={product.image.alt}
          className='w-full h-full object-center object-cover sm:w-full sm:h-full'
        />
      </div>
      <div className='mt-3 flex-1 p-4 space-y-2 flex flex-col'>
        <p className='text-sm text-gray-500'>{product.category}</p>
        <h2 className='text-md font-medium text-gray-900'>
          <span aria-hidden='true' className='absolute inset-0' />
          {product.name}
        </h2>
        <div className='flex-1 flex flex-col justify-end'>
          <p className='text-base font-medium text-gray-900'>
            $ {product.price}
          </p>
        </div>
      </div>
      <button className='bg-black text-white'>ADD TO CART</button>
    </div>
  )
}
