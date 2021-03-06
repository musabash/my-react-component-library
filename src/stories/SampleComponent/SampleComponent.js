import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './SampleComponent.styles';

export function SampleComponent({background, color, children, ...restProps}) {

  return (
      <Container background={background} color={color} {...restProps}>
          {children}
          Hello World
      </Container>
  );
};

SampleComponent.propTypes = {
    color: PropTypes.string,
    background: PropTypes.string
};