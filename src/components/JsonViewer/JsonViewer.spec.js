import React from 'react'
import renderer from 'react-test-renderer'
import JsonViewer from './JsonViewer'

it('JsonViewer renders correctly', () => {
  const tree = renderer
    .create(
      <JsonViewer jsonObject={{ hello: 'world' }}/>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
