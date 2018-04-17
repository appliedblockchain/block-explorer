import React from 'react'
import PropTypes from 'prop-types'
import { formatNumber } from 'utils/formatNumber'
import { convertTimestamp } from 'utils/convertTimestamp'
import classNames from 'classnames'
import styles from './style.module.css'

const BlockList = props =>
  <table className={styles.blockList}>
    <thead>
      <tr>
        <td className={styles.headTd}>Block Number</td>
        <td className={styles.headTd}>Timestamp</td>
        <td className={styles.headTd}>TX Count</td>
        <td className={styles.headTd}>Gas Used</td>
      </tr>
    </thead>

    <tbody>
      {
      props.blocks.map(block => {
          const _onClick = () => {
            props.selectedBlockChanged(block)
          }

          return (
            <tr key={block.number} style={{ cursor: 'pointer' }} onClick={_onClick}>
              <td className={styles.td}>{block.number}</td>
              <td className={styles.td}>{convertTimestamp(block.timestamp)}</td>
              <td className={classNames(styles.td, styles.rightAlign)}>
                {block.transactions.length}
              </td>
              <td className={classNames(styles.td, styles.rightAlign)}>
                {formatNumber(block.gasUsed)} ({formatNumber(block.gasLimit)})
              </td>
            </tr>
          )
        }
      )
    }
    </tbody>
  </table>

BlockList.defaultProps = {
  blocks: []
}

BlockList.propTypes = {
  blocks: PropTypes.array
}

export default BlockList
