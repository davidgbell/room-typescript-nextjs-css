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
        <div className='hero-wrapper'>
          <img src='/images/desktop-image-hero-1.jpg' alt='furniture' />
          <div className='hero-text'>
            <div></div>
            <div className='hero-text-wrapper'>
              <h3 className='hero-title'>
                Discover innovative ways to decorate
              </h3>
              <p>
                We provide unmatched quality, comfort, and style for property
                owners across the country. Our experts combine form and function
                in bringing your vision to life. Create a room in your own style
                with our collection and make your property a reflection of you
                and what you love.
              </p>
              <Link href='#'>
                <a className='shop-now'>SHOP NOW</a>
              </Link>
            </div>
            <div>
              <button className='slide-btn'>
                <svg width='14' height='24' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M13 0L1 12l12 12'
                    stroke='#FFF'
                    fill='none'
                    fillRule='evenodd'
                  />
                </svg>
              </button>
              <button className='slide-btn'>
                <svg width='14' height='24' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M1 0l12 12L1 24'
                    stroke='#FFF'
                    fill='none'
                    fillRule='evenodd'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* about =============================================== */}
        <div className='about-wrapper'>
          <img src='/images/image-about-dark.jpg' alt='furniture' />
          <div className='about-section'>
            <h3>ABOUT OUR FURNITURE</h3>
            <p>
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
          <img src='/images/image-about-light.jpg' alt='furniture' />
        </div>
      </main>
    </div>
  );
}
