export default function MainContainer({ children }) {
  return (
    <div className='relative overflow-hidden'>
      <div className='relative pt-6 pb-16 sm:pb-24'> {children}</div>
    </div>
  )
}
