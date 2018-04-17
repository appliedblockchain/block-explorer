import React from 'react'
import renderer from 'react-test-renderer'
import LabelValuePair from './LabelValuePair'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <LabelValuePair label="Label">
        <div>Value children</div>
      </LabelValuePair>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
