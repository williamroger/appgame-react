import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: string;
  ghost?: boolean;
}

const Button: React.FC<ButtonProps> = ({ size, ghost, children, ...rest }) => {
  return (
    <Container size={size} ghost={ghost} type="button" {...rest}>
      {children}
    </Container>
  );
}

export default Button;