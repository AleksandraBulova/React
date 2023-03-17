import React, { ChangeEvent } from 'react';
import styles from './style.module.css';

interface IProps {
  search: string;
  setSearch: (value: string) => void;
}

class SectionHeader extends React.Component<IProps> {
  render() {
    return (
      <header className={styles.header_section}>
        <h3>Search: </h3>
        <input
          className={styles.search}
          type="text"
          value={this.props.search}
          placeholder="  search product"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            this.props.setSearch(event.target.value)
          }
        />
      </header>
    );
  }
}

export default SectionHeader;
