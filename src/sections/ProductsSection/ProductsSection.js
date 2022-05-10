import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Transition, Menu } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import {
  ChevronDownIcon,
  PlusSmIcon,
  SwitchVerticalIcon,
  BanIcon,
} from '@heroicons/react/solid'
//Components
import ProductList from '../../components/ProductList/ProductList'
//Contexts
import { useProduct } from '../../hooks/useProduct/useProduct'

const sortOptions = [
  { name: 'Alphabetically', href: '#', current: false },
  { name: 'Price', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const categoryFilters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'people', label: 'People' },
      { value: 'premium', label: 'Premium' },
      { value: 'pets', label: 'Pets' },
      { value: 'food', label: 'Food' },
      { value: 'landmarks', label: 'Landmarks' },
      { value: 'cities', label: 'Cities' },
      { value: 'nature', label: 'Nature' },
    ],
  },
]

const priceFilters = [
  {
    id: 'priceRange',
    name: 'Price Range',
    options: [
      { value: 'lower20', label: 'Lower than $20' },
      { value: '20-100', label: '$20 - $100' },
      { value: '100-200', label: '$100 - $200' },
      { value: '200', label: 'More than $200' },
    ],
  },
]

export default function ProductsSection() {
  const {
    products,
    sortByPrice,
    sortByAlphabetically,
    ascendingOrder,
    descendingOrder,
    filterByCategory,
    filteredProducts,
    clearFilter,
  } = useProduct()

  //Sort by Dialog component control
  const [open, setOpen] = useState(false)
  //Sorting Order
  const [isAscending, setIsAscending] = useState(true)
  //sort options state, default alphabetically
  const [selectedSortOptions, setSelectedSortOptions] =
    useState('Alphabetically')
  //filter options state, default all
  const [selectedFilterOptions, setSelectedFilterOptions] = useState([])

  useEffect(() => {
    if (selectedSortOptions === 'Price') {
      sortByPrice()
    } else {
      sortByAlphabetically()
    }
  }, [selectedSortOptions])

  function handleSortDirection() {
    if (isAscending) {
      setIsAscending(false)
      descendingOrder()
    } else {
      setIsAscending(true)
      ascendingOrder()
    }
  }

  function handleFilterChange(e) {
    if (e.target.checked) {
      setSelectedFilterOptions([...selectedFilterOptions, e.target.value])
    } else {
      setSelectedFilterOptions(
        selectedFilterOptions.filter((option) => option !== e.target.value)
      )
    }
  }

  useEffect(() => {
    if (selectedFilterOptions.length > 0) {
      filterByCategory(selectedFilterOptions)
    } else {
      clearFilter()
    }
  }, [selectedFilterOptions])

  return (
    <div className='mx-auto max-w-7xl px-4'>
      <div className='bg-white'>
        <div>
          <Transition.Root show={open} as={Fragment}>
            <Dialog
              as='div'
              className='relative z-40 lg:hidden'
              onClose={setOpen}>
              <Transition.Child
                as={Fragment}
                enter='transition-opacity ease-linear duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='transition-opacity ease-linear duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'>
                <div className='fixed inset-0 bg-black bg-opacity-25' />
              </Transition.Child>

              <div className='fixed inset-0 flex z-40'>
                <Transition.Child
                  as={Fragment}
                  enter='transition ease-in-out duration-300 transform'
                  enterFrom='translate-x-full'
                  enterTo='translate-x-0'
                  leave='transition ease-in-out duration-300 transform'
                  leaveFrom='translate-x-0'
                  leaveTo='translate-x-full'>
                  <Dialog.Panel className='ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-6 flex flex-col overflow-y-auto'>
                    <div className='px-4 flex items-center justify-between'>
                      <h2 className='text-lg font-medium text-gray-900'>
                        Filters
                      </h2>
                      <button
                        type='button'
                        className='-mr-2 w-10 h-10 p-2 flex items-center justify-center text-gray-400 hover:text-gray-500'
                        onClick={() => setOpen(false)}>
                        <span className='sr-only'>Close menu</span>
                        <XIcon className='h-6 w-6' aria-hidden='true' />
                      </button>
                    </div>

                    {/* Filters Mobile */}
                    <form className='mt-4'>
                      {categoryFilters.map((section) => (
                        <Disclosure
                          as='div'
                          key={section.name}
                          className='border-t border-gray-200 pt-4 pb-4'>
                          {({ open }) => (
                            <fieldset>
                              <legend className='w-full px-2'>
                                <Disclosure.Button className='w-full p-2 flex items-center justify-between text-gray-400 hover:text-gray-500'>
                                  <span className='text-sm font-medium text-gray-900'>
                                    {section.name}
                                  </span>
                                  <span className='ml-6 h-7 flex items-center'>
                                    <ChevronDownIcon
                                      className={classNames(
                                        open ? '-rotate-180' : 'rotate-0',
                                        'h-5 w-5 transform'
                                      )}
                                      aria-hidden='true'
                                    />
                                  </span>
                                </Disclosure.Button>
                              </legend>
                              <Disclosure.Panel className='pt-4 pb-2 px-4'>
                                <div className='space-y-6'>
                                  {section.options.map((option, optionIdx) => (
                                    <div
                                      key={option.value}
                                      className='flex items-center'>
                                      <input
                                        id={`${section.id}-${optionIdx}-mobile`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type='checkbox'
                                        className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                                        onChange={handleFilterChange}
                                      />
                                      <label
                                        htmlFor={`${section.id}-${optionIdx}-mobile`}
                                        className='ml-3 text-sm text-gray-500'>
                                        {option.label}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </fieldset>
                          )}
                        </Disclosure>
                      ))}
                    </form>
                    <form className='mt-4'>
                      {priceFilters.map((section) => (
                        <Disclosure
                          as='div'
                          key={section.name}
                          className='border-t border-gray-200 pt-4 pb-4'>
                          {({ open }) => (
                            <fieldset>
                              <legend className='w-full px-2'>
                                <Disclosure.Button className='w-full p-2 flex items-center justify-between text-gray-400 hover:text-gray-500'>
                                  <span className='text-sm font-medium text-gray-900'>
                                    {section.name}
                                  </span>
                                  <span className='ml-6 h-7 flex items-center'>
                                    <ChevronDownIcon
                                      className={classNames(
                                        open ? '-rotate-180' : 'rotate-0',
                                        'h-5 w-5 transform'
                                      )}
                                      aria-hidden='true'
                                    />
                                  </span>
                                </Disclosure.Button>
                              </legend>
                              <Disclosure.Panel className='pt-4 pb-2 px-4'>
                                <div className='space-y-6'>
                                  {section.options.map((option, optionIdx) => (
                                    <div
                                      key={option.value}
                                      className='flex items-center'>
                                      <input
                                        id={`${section.id}-${optionIdx}-mobile`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type='checkbox'
                                        className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                                        onChange={handleFilterChange}
                                      />
                                      <label
                                        htmlFor={`${section.id}-${optionIdx}-mobile`}
                                        className='ml-3 text-sm text-gray-500'>
                                        {option.label}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </fieldset>
                          )}
                        </Disclosure>
                      ))}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className='max-w-2xl mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8'>
            <div className='border-t border-gray-300 mb-12' />
            <div className='relative z-10 flex items-baseline justify-between  pb-6 '>
              <h1 className='text-sm sm:text-lg sm:text-2xl font-bold tracking-tight text-gray-900'>
                Photography
                <span className='hidden sm:block  text-gray-500 font-medium'>
                  Premium Photos
                </span>
              </h1>

              <div className='flex items-center'>
                {selectedSortOptions === 'Price' && (
                  <button onClick={handleSortDirection}>
                    <SwitchVerticalIcon
                      className='mr-6 flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500'
                      aria-hidden='true'
                    />
                  </button>
                )}
                <Menu as='div' className='relative inline-block text-left'>
                  <div>
                    <Menu.Button className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'>
                      Sort By - {selectedSortOptions}
                      <ChevronDownIcon
                        className='flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500'
                        aria-hidden='true'
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'>
                    <Menu.Items className='origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <div className='py-1'>
                        {sortOptions.map((option) => (
                          <Menu.Item key={option.name}>
                            {({ active }) => (
                              <button
                                onClick={() =>
                                  setSelectedSortOptions(option.name)
                                }
                                className={classNames(
                                  option.current
                                    ? 'font-medium text-gray-900'
                                    : 'text-gray-500',
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm'
                                )}>
                                {option.name}
                              </button>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                {/* <button
                  type='button'
                  className='p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden'
                  onClick={() => setOpen(true)}>
                  <span className='sr-only'>Filters</span>
                  <FilterIcon className='w-5 h-5' aria-hidden='true' />
                </button> */}
              </div>
            </div>

            <div className='pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4'>
              <aside>
                <h2 className='sr-only'>Filters</h2>
                <button
                  type='button'
                  className='inline-flex items-center lg:hidden'
                  onClick={() => setOpen(true)}>
                  <span className='text-sm font-medium text-gray-700'>
                    Filters
                  </span>
                  <PlusSmIcon
                    className='flex-shrink-0 ml-1 h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                </button>

                <div className='hidden lg:block'>
                  <form className='divide-y divide-gray-200 space-y-10'>
                    {categoryFilters.map((section, sectionIdx) => (
                      <div
                        key={section.name}
                        className={sectionIdx === 0 ? null : 'pt-10'}>
                        <fieldset>
                          <legend className='block text-sm font-medium text-gray-900'>
                            {section.name}
                          </legend>
                          <div className='pt-6 space-y-3'>
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className='flex items-center'>
                                <input
                                  id={`${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type='checkbox'
                                  className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                                  onChange={handleFilterChange}
                                />
                                <label
                                  htmlFor={`${section.id}-${optionIdx}`}
                                  className='ml-3 text-sm text-gray-600'>
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </fieldset>
                      </div>
                    ))}
                  </form>
                  <form className='divide-y divide-gray-200 space-y-10'>
                    {priceFilters.map((section, sectionIdx) => (
                      <div key={section.name} className='pt-10'>
                        <fieldset>
                          <legend className='block text-sm font-medium text-gray-900'>
                            {section.name}
                          </legend>
                          <div className='pt-6 space-y-3'>
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className='flex items-center'>
                                <input
                                  id={`${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type='checkbox'
                                  className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                                  onChange={handleFilterChange}
                                  //Filter by price range functionality is not yet implemented so the checkbox is disabled
                                  disabled
                                />
                                <label
                                  htmlFor={`${section.id}-${optionIdx}`}
                                  className='ml-3 text-sm text-gray-600'>
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </fieldset>
                      </div>
                    ))}
                  </form>
                </div>
              </aside>
              <div className='mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3'>
                {/* Product grid */}
                {filteredProducts ? (
                  <ProductList
                    products={
                      filteredProducts.length > 0 ? filteredProducts : products
                    }
                  />
                ) : (
                  <>
                    <BanIcon
                      className='h-6 w-6 text-gray-400 group-hover:text-gray-500'
                      aria-hidden='true'
                    />
                    <span className='hidden sm:block  text-gray-500 font-medium'>
                      We can not find a product in selected category
                    </span>
                  </>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
