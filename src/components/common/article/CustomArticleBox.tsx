interface ArticleProps {
  image: string;
  title: string;
  description: string;
}

const CustomArticleBox: React.FC<ArticleProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="shadow-sm bg-white">
      <img src={image} alt="articles" className="h-auto w-full" />
      <div className="p-5 ">
        <h2 className="mb-3 text-[#006FBA] text-12 font-bold">{title}</h2>
        <p className="text-4 text-[#68718B] max-w-xs">{description}</p>
      </div>
    </div>
  );
};

export default CustomArticleBox;
