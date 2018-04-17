import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.css'

const Card = ({ children, headerText, width, height }) =>
  <div className={styles.cardContainer} style={{ width, height }}>
    {
      headerText &&
      <div className={styles.cardHeader}>
        {headerText}
      </div>
    }
    {children}
  </div>

Card.defaultProps = {
  width: 400
}

Card.propTypes = {
  children: PropTypes.node,
  headerText: PropTypes.string,
  width: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  height: PropTypes.number
}

export default Card
