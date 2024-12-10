import {ReactElement} from "react";

type ButtonProps = {
  title: string | ReactElement;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({ title, className, onClick, disabled }: ButtonProps) => {
  return <button className={className} onClick={onClick} disabled={disabled}>{title}</button>;
};

export default Button;
