interface ButtonProps {
  title: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  styles?: string;
  style?: any;
  component?: React.ReactNode;
  type?: "submit" | "button" | undefined;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  disabled,
  styles,
  type,
  component,
  style,
}) => {
  return (
    <button
      type={type}
      className={` cursor-pointer rounded p-4 outline-none transition whitespace-nowrap  ${styles}`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {component} {title}
    </button>
  );
};

export default Button;
