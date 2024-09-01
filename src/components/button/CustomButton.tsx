interface ButtonProps {
  title: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  styles?: string;
  style?: any;
  component?: React.ReactNode;
  type?: "submit" | "button" | undefined;
  icon?: any;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  disabled,
  styles,
  type,
  component,
  style,
  icon
}) => {
  return (
    <button
      type={type}
      className={`flex items-center justify-center gap-2 cursor-pointer rounded p-4 outline-none transition whitespace-nowrap  duration-300 ease-in-out   ${styles}`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {component} {title}
      {icon}
    </button>
  );
};

export default Button;
