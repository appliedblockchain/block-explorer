import React from 'react'
import renderer from 'react-test-renderer'
import TransactionItem from './TransactionItem'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <TransactionItem
        hash={'hashstring'}
        from={'from'}
        gas={123456}
        input={'input'}
        decodedTx={{ foo: 'bar' }}
        decryptedTx={{ foo: 'bar' }}
      />
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

