import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  size: string;
}

export const Container = styled.button<ButtonProps>`
  background: #247fff;
  color: #fff;
  font-weight: 400;
  border: 0;
  padding-left: 16px;
  padding-right: 16px;
  height: 42px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background: ${shade(0.2, '#247fff')};
  }

  ${props =>
    props.size === 'large' &&
    css`
      width: 200px;
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
`;