import React from 'react'
import PropTypes from 'prop-types'
import ReactJson from 'react-json-view'

const JsonViewer = ({ jsonObject }) =>
  <ReactJson
    src={jsonObject}
    displayDataTypes={false}
    name={null}
  />

JsonViewer.propTypes = {
  jsonObject: PropTypes.object
}

export default JsonViewer
