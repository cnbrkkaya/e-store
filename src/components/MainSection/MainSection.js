import P1 from '../../assets/images/P1.png'
import P2 from '../../assets/images/P2.png'
import P3 from '../../assets/images/P3.png'

export default function MainSection() {
  return (
    <main className='mx-auto max-w-7xl px-4 '>
      <div className='grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8'>
        {/* Left column */}
        <div className='grid grid-cols-1 gap-4 lg:col-span-2'>
          <section>
            <div className='rounded-lg bg-white overflow-hidden '>
              <div className='p-6'>
                <h2>About the Samurai King Resting</h2>
                <h3>Pets</h3>
                <p>
                  So how did the classical Latin become so incoherent? According
                  to McClintock, a 15th century typesetter likely scrambled part
                  of Cicero's De Finibus in order to provide placeholder text to
                  mockup various fonts for a type specimen book.So how did the
                  classical Latin become so incoherent? According to McClintock,
                  a 15th century typesetter likely scrambled part of Cicero's De
                  Finibus in order to provide placeholder text to mockup various
                  fonts for a type specimen book.So how did the classical Latin
                  become so incoherent? According to McClintock.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Right column */}
        <div className='grid grid-cols-1 gap-4'>
          <section>
            <div className='rounded-lg bg-white overflow-hidden '>
              <div className='p-6'>
                <h2>People also buy</h2>
              </div>
              <div className='flex'>
                <img src={P1} alt='' />
                <img src={P2} alt='' />
                <img src={P3} alt='' />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
