import React from 'react';
import styled, { keyframes } from 'styled-components';

const Animation = keyframes`
    0% { margin-bottom: 0; }
    25% { margin-bottom: 15px }
    50% { margin-bottom: 30px }
    75% { margin-bottom: 15px }
    100% { margin-bottom: 0px }
`;

const Wrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 50px;
`;

const Circle = styled.div`
    background-color: #4F3F3B;
    border-radius: 50%;
    border-color: black;
    width: 10px;
    height: 10px;
    margin: 0 10px;
    animation: ${Animation} 1s ease-in-out infinite;
    animation-delay: ${props => props.delay};
`;

class Loader extends React.Component {
    render() {
        return (
            <Wrapper>
                <Circle delay="0s" />
                <Circle delay="0.25s" />
                <Circle delay="0.5s" />
            </Wrapper>
        )
    }
}

export default Loader;
