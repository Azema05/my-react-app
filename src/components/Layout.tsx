// import React from 'react';
// import Header from './Header/Header';
// import Footer from './Footer/Footer';

// const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   return (
//     <>
//       <Header />
//       <main>{children}</main>
//       <Footer />
//     </>
//   );
// };

// export default Layout;

import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;