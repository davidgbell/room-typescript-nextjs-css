import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Room</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div>
          <div>
            <img src='/images/desktop-image-hero-1.jpg' alt='furniture' />
          </div>
          <h3> Discover innovative ways to decorate</h3>
          <p>
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
          <Link href='#'>Shop now </Link>
          <div>
            <button className='slide-btn'>
              <svg width='14' height='24' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M13 0L1 12l12 12'
                  stroke='#FFF'
                  fill='none'
                  fill-rule='evenodd'
                />
              </svg>
            </button>
            <button className='slide-btn'>
              <svg width='14' height='24' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M1 0l12 12L1 24'
                  stroke='#FFF'
                  fill='none'
                  fill-rule='evenodd'
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <div>
            <img src='/images/image-about-dark.jpg' alt='furniture' />
          </div>
          <div>
            <h3>About our furniture</h3>
            <p>
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
          <div>
            <img src='/images/image-about-light.jpg' alt='furniture' />
          </div>
        </div>
      </main>
    </div>
  );
}
