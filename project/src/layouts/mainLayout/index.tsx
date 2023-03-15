import Footer from 'components/Footer';
import Header from 'components/Header';
import React, { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

class MainLayout extends React.Component<MainLayoutProps> {
  render() {
    return (
      <>
        <Header />
        {this.props.children}
        <Footer />
      </>
    );
  }
}

export default MainLayout;
