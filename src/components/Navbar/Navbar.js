import Logo from '../../assets/images/Logo.png'
import ShoppingCart from '../../assets/images/ShoppingCart.png'

function Navbar() {
  return (
    <>
      <div className='relative  overflow-hidden'>
        <div className='relative pt-6 pb-16 sm:pb-24'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <nav
              className='relative flex items-center justify-between sm:h-10 md:justify-center'
              aria-label='Global'>
              {/* LOGO */}
              <div className='flex items-center flex-1 md:absolute md:inset-y-0 md:left-0'>
                <div className='flex items-center justify-between w-full md:w-auto'>
                  <a href='/'>
                    <span className='sr-only'>Workflow</span>
                    <img className='h-8 w-auto sm:h-10' src={Logo} alt='' />
                  </a>
                </div>
              </div>
              {/* SHOPPING CART */}
              <div className='md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0'>
                <span className='inline-flex rounded-md shadow'>
                  <img
                    className='h-8 w-auto sm:h-10'
                    src={ShoppingCart}
                    alt=''
                  />
                </span>
              </div>
            </nav>
          </div>
          {/* DIVIDER */}
          <div className='relative'>
            <div
              className='absolute inset-0 flex items-center mt-5'
              aria-hidden='true'>
              <div className='w-full border-t border-gray-300' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
