import food from "../images/food.png";

const About = () => {
  return (
    <div className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-10 py-7">
        <div className="card bg-white p-4 rounded shadow-sm">
          <h1 className="text-2xl text-cyan-500 font-extrabold text-center drop-shadow-sm mt-6">
            About <span className="text-indigo-600">Us</span>
          </h1>
          <div className="flex  justify-around text-center items-center mt-20 mb-20 m-auto w-3/4 lg:w-auto lg:px-5  md:w-auto md:px-4 sm:w-auto sm:px-3 min-[320px]:w-auto min-[320px]:px-2 sm:flex-row min-[320px]:flex-col ">
            <div className=" mt-10 w-[60%]   md:w-[60%]  sm:-[70%] min-[320px]:w-[100%]  mb-10 ">
              <p className="text-6xl text-cyan-500  lg:text-5xl sm:text-3xl min-[320px]:text-2xl mb-5 font-bold font">
                Welcome to Bharti <span className="text-indigo-600">Food</span>
              </p>
              <p className="text-center text-slate-500">
                At Bharti Foot, we believe that great food and exceptional
                service go hand in hand. Our restaurant is a cozy and inviting
                space where you can relax and enjoy a memorable dining
                experience. Whether you're joining us for a quick bite or a
                leisurely meal, our dedicated team is committed to providing you
                with outstanding service and delicious food.
              </p>
              
            </div>
            <div className="w-[25%]  lg:w-[25%] md:w-[35%] sm:-[40%]   min-[420px]:w-[60%] min-[320px]:w-[70%]  ">
                <img src={food} className="" />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
