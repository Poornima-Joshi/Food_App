import BannerCard from "./BannerCard";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";

const BananerSection = ({data}) => {
  console.log(data);
  const header = data?.header;
  const bannerInfo = data?.imageGridCards?.info;
  console.log(header);
  console.log(bannerInfo);
  
  const slideLeft = () => {
    let slider = document.getElementById("slider1");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider1");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold ">{header?.title}</h1>
      <div>
        <button className="text-slate-500 hover:text-slate-600 text-2xl mr-2" onClick={slideLeft}><FaCircleChevronLeft /></button>
        <button className="text-slate-500 text-2xl hover:text-slate-600" onClick={slideRight}><FaCircleChevronRight /></button>
      </div>
      </div>
      <div className="flex overflow-x-scroll scroll-smooth whitespace-nowrap gap-6" style={{scrollbarWidth:"none"}} id={"slider1"}>
        {bannerInfo?.map((data) => (
          <BannerCard key={data?.id} bannerData={data} />
        ))}
      </div>
      <hr className="mt-12 border-2"/>
    </>
  );
};
export default BananerSection;
