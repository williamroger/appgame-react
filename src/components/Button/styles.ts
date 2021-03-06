import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  size: string;
  ghost?: boolean;
}

export const Container = styled.button<ButtonProps>`
  background: transparent;
  color: #247fff;
  font-weight: 400;
  border: 0;
  height: 32px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background: #e0e7ef;
  }

  ${props =>
    props.size === 'large' &&
    css`
      background: #247fff;
      color: #fff;
      padding-left: 16px;
      padding-right: 16px;
      height: 42px;
      &:hover {
        background: ${shade(0.2, '#247fff')};
      }
    `
  }
  
  ${props =>
    props.ghost &&
    css`
      background: transparent;
      color: #247fff;

      &:hover {
        background: #e0e7ef;
      }
    `
  }

  svg {
    ${props =>
    props.size === 'large' &&
    css`
        margin-right: 7px;  
      `
  }
  }

  span {
    pointer-events: none;
  }
  
  @media only screen and (max-width: 500px) {
    svg {
      margin-right: 0;
    }
    
    span {
      display: none;
    }
  }
`;