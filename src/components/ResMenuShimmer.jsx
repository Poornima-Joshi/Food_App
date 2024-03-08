

const bannerCard = () => {
    return (
        <div className="bg-gray-300 py-7 px-4 mb-3 rounded-md"></div>
    );
};

const ResMenuShimmer = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className=" bg-gray-400 p-12 rounded-lg shadow-sm"></div>
      <p className="p-2 my-5 bg-gray-300 w-[70px] rounded"></p>
      {(()=>{
            const element = [];
            for(let i=0; i<8; i++){
                element.push(bannerCard());
            }
            return element;
        })()}
      
    </div>
    

  )
}

export default ResMenuShimmer
