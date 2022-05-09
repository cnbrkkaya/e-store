import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import ShoppingCart from '../../assets/images/ShoppingCart.png'
//Contexts
import { useCart } from '../../contexts/CartContext/CartContext'
//Components
import CartItem from '../CartItem/CartItem'

export default function Cart() {
  const { cartProducts, clearCart } = useCart()
  return (
    <Popover className='ml-4 flow-root text-sm lg:relative lg:ml-8'>
      <Popover.Button className='group -m-2 p-2 flex items-center'>
        <img
          className='h-8 w-auto sm:h-10'
          src={ShoppingCart}
          alt='Shopping Cart'
        />
        <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
          {cartProducts?.length}
        </span>
        <span className='sr-only'>items in cart, view bag</span>
      </Popover.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-200'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition ease-in duration-150'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'>
        <Popover.Panel
          static
          className='absolute top-16 inset-x-0 mt-px pb-6 bg-white shadow-lg sm:px-2 lg:top-full lg:left-auto lg:right-0 lg:mt-3 lg:-mr-1.5 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5'>
          <h2 className='sr-only'>Shopping Cart</h2>

          <div className='max-w-2xl mx-auto px-4'>
            {cartProducts.length === 0 && (
              <div className='mt-5 mb-5 items-center'>
                Your Shopping Cart is Empty
              </div>
            )}
            <ul role='list' className='divide-y divide-gray-200'>
              {cartProducts.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </ul>

            <button
              onClick={() => {
                clearCart()
              }}
              className='w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500'>
              CLear
            </button>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
