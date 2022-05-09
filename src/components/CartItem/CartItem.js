export default function CartItem({ product }) {
  return (
    <li key={product.id} className='py-6 flex items-center'>
      <div className='ml-4 flex-auto'>
        <h3 className='font-medium text-gray-900'>
          <span>{product.name}</span>
        </h3>
        <p className='text-gray-500'>$ {product.price}</p>
      </div>
      <img
        src={product.image.src}
        alt={product.image.alt}
        className='flex-none w-16 h-16 rounded-md border border-gray-200'
      />
    </li>
  )
}
