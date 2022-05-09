import Product from '../Product/Product'

export default function ProductList({ products }) {
  return (
    <div>
      <div>
        <h2 className='sr-only'>Products</h2>
        <div className='grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8'>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
