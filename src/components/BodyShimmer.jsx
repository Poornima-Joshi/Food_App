import { MdBrightness1 } from "react-icons/md";

const header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-72 p-3 rounded bg-gray-300"></div>
      <div>
        <button className="text-gray-300 text-3xl mr-1">
          <MdBrightness1 />
        </button>
        <button className="text-gray-300 text-3xl">
          <MdBrightness1 />
        </button>
      </div>
    </div>
  );
};
const resheader = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-80 p-3 rounded bg-gray-300"></div>
      <div className="flex gap-5">
        <div className="bg-gray-300 text-3xl mr-4 p-5 w-[400px] rounded">
          
        </div>
        <div className="bg-gray-300 text-3xl mr-4 p-5 w-[150px] rounded">
          
        </div>
      </div>
    </div>
  );
};
const bannerCard = () => {
  return (
    <div className="w-[8rem] h-[10rem] bg-gray-400 shadow-sm rounded flex-none"></div>
  );
};
const resCard = () => {
  return (
    <div className="w-[260px] bg-gray-400 rounded-lg mb-3 p-3">
      <div className="rounded-2xl w-[236] h-[11rem] bg-gray-300" />

      <div className="mt-2">
        <p className="bg-gray-300 w-[150px] p-2 rounded"></p>
        <p className="bg-gray-300 w-[200px] p-2 rounded mt-2"></p>
        <p className="bg-gray-300 w-[210px] p-2 rounded mt-2"></p>
        <p className="bg-gray-300 w-[150px] p-2 rounded mt-2"></p>
      </div>
    </div>
  );
};

const BodyShimmer = () => {
  return (
    <div className="max-w-7xl mx-auto px-10 py-5">
      <div className="mb-6">{header()}</div>

      <div
        className="flex overflow-x-scroll scroll-smooth whitespace-nowrap gap-6"
        style={{ scrollbarWidth: "none" }}
      >
        {(()=>{
            const element = [];
            for(let i=0; i<8; i++){
                element.push(bannerCard());
            }
            return element;
        })()}
        
      </div>
      <hr className="mt-12 border-2" />
      <div className="mt-8 mb-6">{header()}</div>

      <div
        className="flex gap-12 justify-between overflow-x-scroll scroll-smooth whitespace-nowrap"
        style={{ scrollbarWidth: "none" }}
      >
        {(() => {
          const elements = [];
          for (let i = 0; i < 4; i++) {
            elements.push(resCard());
          }
          return elements;
        })()}
      </div>
      <hr className="mt-12 border-2" />
      <div className="mt-8 mb-6">{resheader()}</div>

      <div
        className="flex gap-12 justify-between flex-wrap"
        style={{ scrollbarWidth: "none" }}
      >
        {(() => {
          const elements = [];
          for (let i = 0; i < 20; i++) {
            elements.push(resCard());
          }
          return elements;
        })()}
      </div>
    </div>
  );
};

export default BodyShimmer;
