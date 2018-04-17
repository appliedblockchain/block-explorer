import React from 'react'
import renderer from 'react-test-renderer'
import Card from './Card'

it('Card renders correctly', () => {
  const tree = renderer
    .create(
      <Card headerText="Card Header" width={500}>
        <div>Card content</div>
      </Card>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
