import Button from "../button/CustomButton";
import Article1Image from "../../assets/article/article1.png";
import Article2Image from "../../assets/article/article2.png";
import Article3Image from "../../assets/article/article3.png";
import CustomArticleBox from "../common/article/CustomArticleBox";

const Articles = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 md:py-20">
      <div className="font-bold text-[32px] md:text-[48px] text-center text-[#14358A] mb-6 md:mb-16">
        Our article on grow & tech
      </div>

      <div className="flex flex-col justify-center items-center  bg-gradient-to-bt bg-gradient-to-br from-[#FDFEFF] to-[#FCFCFF]  p-5">
        <div className="flex flex-col md:flex-row justify-between gap-5 mb-12 ">
          <CustomArticleBox
            title="Digital Marketing Strategy in 2021"
            image={Article1Image}
            description="Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas.."
          />

          <CustomArticleBox
            title="Best platform for business and productivity"
            image={Article2Image}
            description="Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas.."
          />

          <CustomArticleBox
            title="Social media can growth your business traffic"
            image={Article3Image}
            description="Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas.."
          />
        </div>

        <Button
          title="Learn More"
          styles="w-full md:w-[130px] py-3 text-white font-bold text-[16px] bg-gradient-to-br from-[#6A36FF] to-[#AC5FE6]"
        />
      </div>
    </div>
  );
};

export default Articles;
