interface IconProps {
  icon: any;
  styles?: string;
}

const CustomIcon: React.FC<IconProps> = ({ icon, styles }) => {
  return (
    <div
      className={`flex justify-center items-center rounded-md  bg-gradient-to-bl from-[#14358A] to-[#0097FE] h-10 w-10 text-white mb-3 ${styles}`}
    >
      {icon}
    </div>
  );
};

export default CustomIcon;
