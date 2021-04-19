import Nav from './Nav';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
