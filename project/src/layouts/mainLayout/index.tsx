import { Header } from 'components';
import React, { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export class MainLayout extends React.Component<MainLayoutProps> {
  render() {
    return (
      <>
        <Header />
        {this.props.children}
      </>
    );
  }
}
