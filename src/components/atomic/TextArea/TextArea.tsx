import { textAreaBase, textAreaError } from "./TextArea.css";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const TextArea = (props: TextAreaProps) => {
  const { error = false, ...rest } = props;
  return <textarea className={error ? textAreaError : textAreaBase} {...rest} />;
};

export default TextArea;