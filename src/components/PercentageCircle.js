import styled from "styled-components";
import Box from "./Box";

const Wrapper = styled(Box)`
  min-width: 16px;
  justify-content: space-around;

  .circular-chart {
    display: block;
    margin: 10px auto;
    max-width: 80%;
    max-height: 250px;
    background-color: var(--color-dark-1);
    border-radius: 50%;
  }

  .circle-bg {
    fill: none;
    stroke: var(--color-dark-0);
    stroke-width: 3.8;
  }

  .circle {
    fill: none;
    stroke-width: 2.8;
    stroke-linecap: round;
    animation: progress 1s ease-out forwards;
  }

  @keyframes progress {
    0% {
      stroke-dasharray: 0 100;
    }
  }

  .circular-chart .circle {
    stroke: var(--color-success-1);
  }

  .percentage {
    fill: var(--color-light-2);
    font-family: sans-serif;
    font-size: 0.5em;
    text-anchor: middle;
  }
`;

const PercentageCircle = ({ progress = 0, ...props }) => {
  return (
    <Wrapper className="single-chart" {...props}>
      <svg viewBox="0 0 36 36" className="circular-chart">
        <path
          className="circle-bg"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle"
          strokeDasharray={`${progress}, 100`}
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35" className="percentage">
          {`${progress}%`}
        </text>
      </svg>
    </Wrapper>
  );
};

export default PercentageCircle;
