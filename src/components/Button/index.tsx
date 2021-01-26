import React, {ButtonHTMLAttributes} from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({children, ...rest}) => (
    <button {...rest}>{children}</button>
);

export default Button;