import styled from "styled-components"

const Button = styled.button`
display: inline-block;
    margin: ${props => props.primary ? '0 33%' : '0'};
    padding: ${props => props.primary ? '1.5rem' : '0.8rem 1.3rem'};
    font-size: ${props => props.primary ? '2rem' : '1rem'};
    background: var(--main-red);
  text-transform: uppercase;
  border: none;
  outline: none;
  margin: 0 38%;
  padding: 1rem;
  border-radius: 0.1875rem;
  font-size: 2rem;
  text-align: center;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
  cursor: pointer;
  color: #fff

   

`

export default Button;

  