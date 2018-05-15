import React, { Component } from 'react';
import styled from 'styled-components';

class SVG extends Component {
  render() {
    function* randomNum(value) {
      while (true) {
        yield Math.floor(Math.random() * value) + 1;
      }
    }
    let randLarge = randomNum('300');
    let randSmall = randomNum('10');

    console.log(randLarge.next());
    console.log(randSmall.next());

    return (
      <BackgroundWrapper>
        <SVGComponent xmlns="http://www.w3.org/2000/svg">
          <defs>
            <g>
              <linearGradient id="gold" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="5%" stopColor="#F7D696" />
                <stop offset="50%" stopColor="#EEBE7B" />
                <stop offset="95%" stopColor="#CEA058" />
              </linearGradient>
              <filter id="blur">
                <feGaussianBlur in="SourceGraphic" stdDeviation={10} />
              </filter>
            </g>
            <g>
              <polygon filter="url(#blur)" points="250, 100, 100,400 400,400" id="triangle" x="0" y="0" width="100" height="100" />
              {/* <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 60 70" to="360 60 70" dur="10s" repeatCount="indefinite" /> */}
            </g>
          </defs>

          {Array.from(Array(3).keys()).map(i => <use xlinkHref="#triangle" x={randLarge.next().value} y={randLarge.next().value} />)}

          {/* <use href="#triangle" x="120" y="60" /> */}
          {/* <use href="#triangle" x="140" y="60" /> */}
        </SVGComponent>
      </BackgroundWrapper>
    );
  }
}

export default SVG;

const BackgroundWrapper = styled.div`
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-align: center;
`;

const SVGComponent = styled.svg`
  width: 100vh;
  height: 100vh;
  ${'' /* position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%; */} polygon {
    fill: transparent;
    stroke: url(#gold);
    stroke-width: 8;
    transition: all 0.8s ease-in-out;
  }
`;
