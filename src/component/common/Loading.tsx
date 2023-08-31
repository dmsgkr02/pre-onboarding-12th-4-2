import React from 'react'
import styled, { keyframes } from "styled-components";

export default function Loading() {
  return (
    <Spinner />
  )
}

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
	height: 100px;
	width: 100px;
	border: 3px solid gray;
	border-radius: 50%;
	border-top: none;
	border-right: none;
	margin: 16px auto;
	animation: ${rotation} 1s linear infinite;
`;

export { Spinner };