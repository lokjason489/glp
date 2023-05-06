import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow bg-white">
      <div className="max-w-7xl mx-auto px-2 md:px-4 lg:px-6 min-h-50xl py-6">{children}</div>
    </main>
    <Footer/>
  </div>
);

export default Layout;