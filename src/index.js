import React from 'react'
import Scrollbars from 'react-custom-scrollbars'
import BlockList from 'components/BlockList'
import Card from 'components/Card'
import BlockCard from 'components/BlockCard'
import styles from './style.module.css'

class Component extends React.Component {
  state = {}

  setSelectedBlock = (selectedBlock) => {
    this.setState({ selectedBlock })
  }

  render() {
    const { selectedBlock } = this.state
    const { blocks, height } = this.props

    return (
      <div>
        <div className={styles.blockExplorerFlexContainer}>
          <div style={{ flex: 3 }}>
            <Scrollbars style={{ height, paddingBottom: 20 }}>
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