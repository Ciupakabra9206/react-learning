import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';

class List extends React.Component {
    static propTypes = {
      title: PropTypes.node,
      children: PropTypes.node.isRequired,
      image: PropTypes.node.isRequired,
    }
    static defaultProps = {
        children: <p>I can do all the things!!!</p>,
      }
  render() {
    return (
      <section className={styles.component}>
        <h2 className={styles.subtitle}><Hero titleText={this.props.title}  HeroImage={this.props.image}/></h2>
      <div className={styles.columns}>
        <Column columnTitle={'Column 1'}/>
        <Column columnTitle={'Column 2'}/>
        <Column columnTitle={'Column 3'}/>
      </div>
      
      </section>
    )
  }
}

export default List;