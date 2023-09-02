import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.footer`
  padding-top: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  button {
    background:  ${({theme}) => theme.colors.red};
    width: 100%;
    max-width: 16.5rem;
    min-height: 4rem;

    border: none;
    border-radius: 8px;

    font-weight: 700;
    font-size: 1.25rem;
    text-transform: uppercase;
    color:  ${({theme}) => theme.colors.white};

    transition: background 0.3s;

    &:hover {
      background:  ${darken(0.1, '#AA2424')};
    }
  }


  span {
    font-weight: 700;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    justify-content: center;

    strong{
      margin-left: 0.75rem;
      font-weight: 700;
      font-size: 2.25rem;
    }
  }

  @media (max-width: 900px){

    flex-direction: column-reverse;
    text-align: center;
    justify-content: flex-start;

    button{
      max-width: 100%;
    }

    span{
      margin-bottom: 2rem;

      strong{
        font-size: 2.75rem;
      }
    }

  }


`
