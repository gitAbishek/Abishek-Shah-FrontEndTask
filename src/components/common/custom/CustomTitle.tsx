interface TitleProps {
  title: string;
  styles?: string;
}
const CustomTitle: React.FC<TitleProps> = ({ title, styles }) => {
  return (
    <div
      className={`text-center w-full md:max-w-2xl  font-bold text-[32px] md:text-[48px] mb-12 leading-10 md:leading-[56px] ${
        styles ? styles : "text-white"
      } `}
    >
      {title}
    </div>
  );
};

export default CustomTitle;
