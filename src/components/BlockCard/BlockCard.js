import React from 'react'
import PropTypes from 'prop-types'
import TransactionItem from 'components/TransactionItem'
import { map } from 'lodash'
import styles from './style.module.css'

const BlockCard = props =>
  <div className={styles.blockCard}>
    {
      map(props.transactionData, tx =>
        <TransactionItem
          key={tx.hash}
          {...tx}
        />
      )
    }
  </div>

BlockCard.propTypes = {
  transactionData: PropTypes.array
}

export default BlockCard
