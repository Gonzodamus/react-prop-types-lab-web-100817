import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <ul>
      <li>Name: {this.props.name}</li>
      <li>Producer: {this.props.producer}</li>
      <li>Watermark: {this.props.hasWatermark.toString()}</li>
      <li>Color: {this.props.color}</li>
      <li>Weight: {this.props.weight}</li>
      </ul>
    )
  }
}

let weight = []

function makeWeightArray (){
  for (let i = 80; i <= 300; i++){
  weight.push(i)
  }
}

makeWeightArray()

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.oneOf(weight).isRequired
}


Product.defaultProps = {
  hasWatermark: false
}

export default Product
