import styled from 'styled-components'

export const Container = styled.div`
  margin: 1em;
  font-size: 1.5rem;
  max-width: 20vw;
  background: ${props => props.background ? props.background : "yellow"};
  color: ${props => props.color ? props.color : props.theme.fallback};
  font-weight: 600;
  border-radius: 5px;
  text-align: center;
  padding: 1em 0.6em;
`