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
      <NameWrapper>
        <SVGComponent xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1296 102">
          <defs>
            <g>
              <linearGradient id="goldAnimated" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F7D696">
                  <animate attributeName="stop-color" values="#F7D696; #EEBE7B; #F7D696" dur="2s" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stopColor="#EEBE7B">
                  <animate attributeName="stop-color" values="#EEBE7B; #F7D696; #EEBE7B" dur="2s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#CEA058">
                  <animate attributeName="stop-color" values="#CEA058; #EEBE7B; #CEA058" dur="2s" repeatCount="indefinite" />
                </stop>
                {/* <stop offset="50%" stopColor="#EEBE7B" />
                <stop offset="100%" stopColor="#CEA058" /> */}
              </linearGradient>
            </g>
            <g>
              <path
                id="name"
                fillRule="evenodd"
                d="M33 1.6v17.2c0 .1-.6.2-2 .3-1.8.4-3.3 1.1-4.6 2.2-1.2 1.2-1.8 2.4-1.8 3.6v.3c0 2.3 1.5 4.6 4.6 7 4.7 4 10 8.3 16.2 12.8 4.3 3.2 7.6 5.8 10 8 3.1 3 5 5 5.4 5.8 3.5 4.5 5.3 9.6 5.3 15.4C66 84 61.5 91.5 52 97a37.5 37.5 0 0 1-17.6 4.1H33c-8.9 0-16.6-2.6-23.2-8A43.6 43.6 0 0 1 0 80.5l16.9-9c1 1.7 2.4 3.6 4.2 5.7 4.1 4.5 8.4 6.7 12.9 6.7h.9c4.2 0 7.6-1.5 10.3-4.7a7.3 7.3 0 0 0 1.3-4.2c0-2.5-1.2-5-3.7-7.5a76 76 0 0 0-9-7.5c-5.7-4-11.5-8.6-17.2-13.6a58 58 0 0 1-6-6.2A23.6 23.6 0 0 1 5 25.8v-.5c0-7.6 4-14 11.8-19.2 5.1-3 10.5-4.5 16.2-4.5zm51.5 8.7h44.8V101h-19.4V27.3H84.4l-.1-.2V10.3zm63-.3H183v17h-35.6V10zm0 33.3H183V60h-35.6V43.3zm0 40.7H183v17h-35.6V84zm53.2-73.7H220V101l-.2.1h-19.1V10.2zm32.5.4c.9 0 3.4.4 7.5 1 2.7.7 4.8 1.5 6.4 2.3 5.8 2.9 9.7 7.2 11.8 13a27 27 0 0 1 1.7 9.7c0 10.1-4.9 17.6-14.5 22.3a34.1 34.1 0 0 1-12.9 3.1V45.4c0-.1.4-.2 1.4-.3a12 12 0 0 0 2.7-1 8 8 0 0 0 4.6-7.7 8 8 0 0 0-2.5-6.2c-1.4-1.2-3-2-4.6-2.4l-1.7-.3V10.9l.1-.2zm46.4-.4h19.3v34.2h12l.1.1v16.6h-12V101h-19.5V10.2zm53 0H352V101h-19.4V10.3l.2-.1zm38-.3h35.6v17h-35.6V10zm0 33.3h35.6V60h-35.6V43.3zm0 40.7h35.6v17h-35.6V84zM466 10h19.3v91h-18.6A6145 6145 0 0 1 444 69.6l-20.2-27.9V11.6a108548 108548 0 0 0 42 58.2h.1V10h.1zM546.7.7h21v36.8h26.1v18.3h-26.1V101l-.1.1h-21V.6zm35.7 0H602v18.6h-19.5V.6zm119 0h20.8v60.6c0 10.5-.4 17.5-1.2 21l-1.4 5.1a23.4 23.4 0 0 1-6.8 8.7c-3.1 2.4-7 4-11.5 4.9V.6zm-22 73.9c3.3 3.2 5.5 5.1 6.7 5.7l.8.7v19.6a39 39 0 0 1-22.4-13.4l15-12.6zM789 10.2h.1v16.1h-.1c-10.6 0-19.1 4-25.6 11.8a27.5 27.5 0 0 0-5.8 17v1.5A26.2 26.2 0 0 0 768.3 78c6.3 4.7 13.1 7 20.5 7h1.3a31 31 0 0 0 25-12.3 27.4 27.4 0 0 0 5.7-17.5l-.1-.3H839v1a43 43 0 0 1-20.5 36.7 51.4 51.4 0 0 1-28.9 8.4h-.5a50.1 50.1 0 0 1-41.6-20 42.8 42.8 0 0 1 12.7-62.5c9-5.6 18.6-8.3 28.8-8.3zm72.2.1h19.4v34.2h12v16.7h-12V101h-19.4V10.2zm53 0h19.5V101l-.1.1h-19.3V10.2zm80.2-.3h19.3v91H995a6145.1 6145.1 0 0 1-22.7-31.4l-20.2-27.9V11.6a108569.5 108569.5 0 0 0 42 58.2h.1V10h.1zm67.8.3h.1V26l-1.8.2c-1.7.4-3 1-4.2 2-1.1 1.1-1.7 2.2-1.7 3.3v.3c0 2 1.4 4.2 4.2 6.4 4.3 3.6 9.2 7.5 14.8 11.6 3.9 3 7 5.4 9.1 7.3 3 2.9 4.6 4.7 5 5.4a22 22 0 0 1 4.8 14c0 8.9-4.2 15.8-12.7 20.7a34.1 34.1 0 0 1-16.1 3.8h-1.3a32.5 32.5 0 0 1-30.2-18.8c9.8-5.3 15-8 15.3-8.3a38 38 0 0 0 3.9 5.3c3.7 4 7.6 6.1 11.7 6.1h.9c3.8 0 6.9-1.4 9.3-4.3a6.4 6.4 0 0 0 1.3-3.8c0-2.3-1.2-4.6-3.4-7a86.7 86.7 0 0 0-8.2-6.7c-5.3-3.8-10.5-8-15.7-12.4a49 49 0 0 1-5.5-5.7 21.4 21.4 0 0 1-5.1-13.1V32c0-7 3.6-12.9 10.7-17.6 4.7-2.7 9.6-4.1 14.8-4.1zm99.9-.1v16.1h-.1c-10.6 0-19 4-25.6 11.8a27.5 27.5 0 0 0-5.8 17v1.5a26.2 26.2 0 0 0 10.7 21.4c6.3 4.7 13.1 7 20.5 7h1.3a31 31 0 0 0 25-12.3 27.4 27.4 0 0 0 5.7-17.5l-.1-.3h18.3v1a43 43 0 0 1-20.5 36.7 51.4 51.4 0 0 1-28.9 8.4h-.5a50.1 50.1 0 0 1-41.6-20 42.8 42.8 0 0 1 12.7-62.5c9-5.6 18.6-8.3 28.9-8.3zm114.2-.2h19.3v91H1277a6145.7 6145.7 0 0 1-22.7-31.4l-20.1-27.9V11.6a108333.9 108333.9 0 0 0 42 58.2V10h.1z"
              />
            </g>
          </defs>
          <use xlinkHref="#name" />
          {/* <use href="#triangle" x="140" y="60" /> */}
        </SVGComponent>
      </NameWrapper>
    );
  }
}

export default SVG;

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
`;

const SVGComponent = styled.svg`
  width: 100%;
  margin: 0 2rem;
  path {
    fill: transparent;
    stroke: url(#goldAnimated);
    stroke-width: 2;
    transition: all 0.8s ease-in-out;
    @media (max-width: 2000px) {
      stroke: none;
      fill: url(#goldAnimated);
    }
  }
`;
