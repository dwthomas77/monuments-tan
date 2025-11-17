import { inputBase, inputError } from './Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: React.Ref<HTMLInputElement>;
  error?: boolean;
}

const Input = (props: InputProps) => {
  const { error = false, ...rest } = props;
  return <input className={error ? inputError : inputBase} {...rest} />;
};

export default Input;