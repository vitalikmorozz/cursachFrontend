import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg)
    }
`;

const Spinner = styled.div`
	height: 75px;
	width: 75px;
	border-top: 2px solid black;
	border-bottom: 2px solid black;
	border-radius: 50%;
	animation: ${rotate} 1s linear infinite;
`;

const Loader = () => {
	return <Spinner />;
};

export default Loader;
