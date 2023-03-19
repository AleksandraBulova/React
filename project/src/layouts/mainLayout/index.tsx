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
      </>
    );
  }
}

export default MainLayout;
