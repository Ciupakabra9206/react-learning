import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';


class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string.inRequired,
  }
  render() {
    return (  
      <section className={styles.component}>
        <h2>{this.props.title}</h2>
      </section>
    );
  }
}

export default Card;