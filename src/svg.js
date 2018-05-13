import React, { Component, Fragment } from 'react';

class SVG extends Component {
  render() {
    const { id, randomLarge, randomSmall } = this.props;
    console.log('randomLarge', randomLarge);
    console.log('this.props', this.props);

    const viewBoxValue = `0 0 ${randomLarge.value} ${randomLarge.value}`;
    return (
      <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="MyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="5%" stopColor="#F7D696" />
              <stop offset="50%" stopColor="#EEBE7B" />
              <stop offset="95%" stopColor="#CEA058" />
            </linearGradient>
            <filter id="blurMe">
              <feGaussianBlur in="SourceGraphic" stdDeviation={0} />
            </filter>

            <path id="Mark" filter="url(#blurMe)" d="M93 89H7l-2-1v-1l43-75 2-1 1 1 44 75v1l-2 1zM9 86h82L50 16 9 86z">
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 60 70" to="360 60 70" dur="10s" repeatCount="indefinite" />
            </path>
          </defs>
        </svg>

        <svg id="Logo" className="Animate-Path" width="100%" height="100%" viewBox={viewBoxValue}>
          <use id="Draw-Mark" className="Animate-Draw" href="#Mark" />
          <use className="Animate-Draw" href="#Mark" />
          <use className="Animate-Draw" href="#Mark" />
        </svg>
      </Fragment>
    );
  }
}

export default SVG;
