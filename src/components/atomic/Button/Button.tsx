import { button } from './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  label: string;
  className?: string;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const { onClick, label, className = '', disabled = false, ...rest } = props;
  return <button className={`${button} ${className}`} onClick={onClick} disabled={disabled} {...rest}>{label}</button>;
};

export default Button;