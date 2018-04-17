import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './style.module.css'

const LabelValuePair = ({ label, isCode, children }) =>
  <div className={styles.labelValuePair}>
    <div className={styles.labelValuePairItem}>
      <div className={styles.labelValuePairLabel}>{label}</div>
      <div className={classNames(styles.labelValuePairValue, isCode && styles.codeValue)}>
        {children}
      </div>
    </div>
  </div>

LabelValuePair.propTypes = {
  label: PropTypes.string,
  isCode: PropTypes.bool,
  children: PropTypes.node
}

export default LabelValuePair
