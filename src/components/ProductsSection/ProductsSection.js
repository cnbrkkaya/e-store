import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Transition, Menu } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, FilterIcon, PlusSmIcon } from '@heroicons/react/solid'

import ProductList from '../ProductList/ProductList'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'People', label: 'People' },
      { value: 'Premium', label: 'Premium' },
      { value: 'Pets', label: 'Pets' },
      { value: 'Food', label: 'Food' },
      { value: 'Landmarks', label: 'Landmarks' },
      { value: 'Cities', label: 'Cities' },
      { value: 'Nature', label: 'Nature' },
    ],
  },
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
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className='mx-auto max-w-7xl px-4'>
      <div className='bg-white'>
        <div>
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as='div'
              className='relative z-40 lg:hidden'
              onClose={setMobileFiltersOpen}>
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
                        onClick={() => setMobileFiltersOpen(false)}>
                        <span className='sr-only'>Close menu</span>
                        <XIcon className='h-6 w-6' aria-hidden='true' />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className='mt-4'>
                      {filters.map((section) => (
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

          <main className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
            <div className='relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200'>
              <h1 className='text-4xl font-extrabold tracking-tight text-gray-900'>
                Photography / Premium Photos
              </h1>

              <div className='flex items-center'>
                <Menu as='div' className='relative inline-block text-left'>
                  <div>
                    <Menu.Button className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'>
                      Sort By -
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
                              <a
                                href={option.href}
                                className={classNames(
                                  option.current
                                    ? 'font-medium text-gray-900'
                                    : 'text-gray-500',
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm'
                                )}>
                                {option.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <button
                  type='button'
                  className='p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden'
                  onClick={() => setMobileFiltersOpen(true)}>
                  <span className='sr-only'>Filters</span>
                  <FilterIcon className='w-5 h-5' aria-hidden='true' />
                </button>
              </div>
            </div>

            <div className='pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4'>
              <aside>
                <h2 className='sr-only'>Filters</h2>
                <button
                  type='button'
                  className='inline-flex items-center lg:hidden'
                  onClick={() => setMobileFiltersOpen(true)}>
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
                    {filters.map((section, sectionIdx) => (
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

              {/* Product grid */}
              <div className='mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3'>
                <ProductList />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
