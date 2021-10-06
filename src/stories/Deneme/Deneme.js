import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

export const Container = styled.div`
    margin: 1em;
    background: ${props => props.type ? props.theme.palette[props.type].main : props.theme.fallback};
    color: black;
    font-size: 600;
    border-radius: 5%;
    max-width: 20%;
    text-align: center;
    border: 1px solid red;
`;


export function Deneme({children,...props}) {

  return (
      <Container {...props}>
          {children}
          Hello World
      </Container>
  );
};

Deneme.propTypes = {
    color: PropTypes.string,
    background: PropTypes.string
};