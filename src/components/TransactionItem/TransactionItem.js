import React from 'react'
import PropTypes from 'prop-types'
import { formatNumber } from 'utils/formatNumber'
import LabelValuePair from 'components/LabelValuePair'
import JsonViewer from 'components/JsonViewer'
import styles from './style.module.css'

const TransactionItem = props =>
  <div className={styles.transactionItem}>
    <LabelValuePair label="Hash">
      {props.hash}
    </LabelValuePair>

    <LabelValuePair label="From">
      {props.from}
    </LabelValuePair>

    <LabelValuePair label="Gas">
      {formatNumber(props.gas)}
    </LabelValuePair>

    <LabelValuePair label="Input Data" isCode>
      {props.input}
    </LabelValuePair>

    <LabelValuePair label="Decoded Transaction">
      <JsonViewer jsonObject={props.decodedTx}/>
    </LabelValuePair>

    <LabelValuePair label="Decrypted Data">
      <JsonViewer jsonObject={props.decryptedTx}/>
    </LabelValuePair>
  </div>

TransactionItem.propTypes = {
  hash: PropTypes.string,
  from: PropTypes.string,
  gas: PropTypes.number,
  input: PropTypes.string,
  decodedTx: PropTypes.object,
  decryptedTx: PropTypes.object
}

export default TransactionItem
