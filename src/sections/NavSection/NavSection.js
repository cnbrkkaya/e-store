import Logo from '../../assets/images/Logo.png'
import ShoppingCart from '../../assets/images/ShoppingCart.png'
import Cart from '../../components/Cart/Cart'

export default function NavSection() {
  return (
    <div className='relative pt-6  fixed sticky top-0 z-50 bg-white-100'>
      {/* LOGO AND SHOPPING CART */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <nav
          className='relative flex items-center justify-between sm:h-10 md:justify-center'
          aria-label='Global'>
          {/* LOGO */}
          <div className='flex items-center flex-1 md:absolute md:inset-y-0 md:left-0'>
            <div className='flex items-center justify-between w-full md:w-auto'>
              <a href='/'>
                <span className='sr-only'>Bejamas Store</span>
                <img
                  className='h-8 w-auto sm:h-10'
                  src={Logo}
                  alt='Bejamas Logo'
                />
              </a>
            </div>
          </div>
          {/* SHOPPING CART */}
          <div className='md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0'>
            <span className='inline-flex rounded-md shadow'>
              <Cart />
            </span>
          </div>
        </nav>
      </div>
      {/* DIVIDER */}
      <div className='relative'>
        <div className='absolute inset-0 flex items-center' aria-hidden='true'>
          <div className='w-full border-t border-gray-300' />
        </div>
      </div>
    </div>
  )
}
