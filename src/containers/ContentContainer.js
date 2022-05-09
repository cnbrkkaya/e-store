export default function MainContainer({ children }) {
  return (
    <div className='flex-l overflow-y-auto p-5'>
      <div className='relative pt-6 pb-16 sm:pb-24'> {children}</div>
    </div>
  )
}
