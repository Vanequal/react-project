import styles from "../../styles/Input.module.scss";

interface InputProps {
  placeholder: string;
  type?: "text" | "password" | "email";
  className?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, type = "text", className }) => {
  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      className={`${styles.input} ${className}`} 
    />
  );
};

export default Input;