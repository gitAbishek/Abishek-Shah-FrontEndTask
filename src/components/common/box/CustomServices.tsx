import Button from "../../button/CustomButton";

interface ServicesProps {
  icon: any;
  title: string;
  description: string;
  button?: boolean;
  titleStyles?: string;
}

const CustomServices: React.FC<ServicesProps> = ({
  icon,
  title,
  description,
  button,
  titleStyles,
}) => {
  return (
    <div className="w-full flex flex-col  justify-center items-center md:items-start">
      <div className="flex justify-center items-center rounded-md  bg-gradient-to-bl from-[#14358A] to-[#0097FE] h-10 w-10 text-white mb-3">
        {icon}
      </div>
      <div
        className={`text-[#006FBA] font-bold text-[20px] md:text-[32px] mb-2  leading-10 ${
          titleStyles ? titleStyles : "max-w-full md:max-w-[197px]"
        } `}
      >
        {title}
      </div>

      <p className="w-full md:max-w-xs text-[#68718B] text-[16px] mb-4 leading-5 text-center md:text-start">
        {description}
      </p>

      {button && (
        <Button
          title="Learn More"
          styles="w-[151px] py-3 text-white font-bold text-sm bg-gradient-to-br from-[#6A36FF] to-[#AC5FE6]"
        />
      )}
    </div>
  );
};

export default CustomServices;
