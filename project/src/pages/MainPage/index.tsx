import React, { ChangeEvent } from 'react';

interface MyState {
  search: string;
}

class MainPage extends React.Component {
  state: MyState = {
    search: '',
  };

  componentDidMount(): void {
    const mySearch = localStorage.getItem('search');
    if (mySearch) {
      this.setState((prev) => ({ ...prev, search: mySearch }));
    }
  }

  componentDidUpdate(prevState: Readonly<MyState>): void {
    if (prevState.search !== this.state.search) {
      console.log('componentDidUpdate, search');
    }
  }

  componentWillUnmount(): void {
    localStorage.setItem('search', this.state.search);
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.search}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          this.setState((prev) => ({ ...prev, search: event.target.value }))
        }
      />
    );
  }
}

export default MainPage;
