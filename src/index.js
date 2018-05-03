import React from 'react'
import Scrollbars from 'react-custom-scrollbars'
import BlockList from 'components/BlockList'
import Card from 'components/Card'
import BlockCard from 'components/BlockCard'
import _ from 'lodash'
import styles from './style.module.css'

const getMaxBlock = (blocks) => {
  console.log(blocks)
  if (blocks) {
    return _.maxBy(blocks, 'number')
  }
}

class Component extends React.Component {

  state = {}

  setSelectedBlock = (selectedBlock) => {
    this.setState({ selectedBlock })
  }

  maxBlockInputChange = (ev) => {
    this.setState({
      maxBlock: ev.target.value
    })
  }

  maxBlockChanged = () => {
    this.props.maxBlockChanged(this.state.maxBlock)
  }

  render() {
    const { selectedBlock } = this.state
    const { blocks, height } = this.props

    return (
      <div>
        <div className={styles.blockExplorerFlexContainer}>
          <div style={{ flex: 1 }}>

            <div style={{ display: 'flex' }}>
              <div style={{ fontSize: 13 }}>
                <span style={{ marginRight: 5 }}>Maximum Block Number:</span>
                <input type="text" defaultValue={this.state.maxBlock} onChange={this.maxBlockInputChange}/>
                <button onClick={this.maxBlockChanged}>Refresh data</button>
              </div>
            </div>

            <Scrollbars style={{ height: height, paddingBottom: 20 }}>
              <BlockList
                blocks={blocks}
                selectedBlockChanged={this.setSelectedBlock}
              />
            </Scrollbars>
          </div>

          <div className={styles.blockCardContainer}>
            {
              selectedBlock &&
              <Card headerText="Transaction Details" width="100%">
                <Scrollbars style={{ height, paddingBottom: 20 }}>
                  <BlockCard {...selectedBlock}/>
                </Scrollbars>
              </Card>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Component