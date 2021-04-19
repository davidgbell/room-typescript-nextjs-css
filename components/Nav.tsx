import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <h1 className='title'>room</h1>
      <Link href='#'>
        <a className='nav-link'>home</a>
      </Link>
      <Link href='#'>
        <a className='nav-link'>shop</a>
      </Link>
      <Link href='#'>
        <a className='nav-link'>about</a>
      </Link>
      <Link href='#'>
        <a className='nav-link'>contact</a>
      </Link>
    </nav>
  );
};

export default Nav;
