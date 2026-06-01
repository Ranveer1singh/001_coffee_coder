import WorldMap from "../../assets/world-map.png";

const WhereToBuy = () => {
  return (
    <div className="container my-36">
      <div className="grid gird-cols-1 sm:grid-cols-3 gap-8 place-items-center">
        {/* form section */}
        <div className="space-y-8">
            <h1 className="text-4xl font-bold text-darkGray font-serif ">Buy Our Products from anywhere</h1>
          <div className="flex items-center gap-4">
            <input
            type='text'
            placeholder="Name"
            className="input-style w-full lg:w-[150px]"
            />
            <input
            type='email'
            placeholder="Email"
            className="input-style w-full lg:w-[150px]"
            />
          </div>
          <div className="flex items-center gap-4">
            <input
            type='text'
            placeholder="Country"
            className="input-style w-full "
            />
            <input
            type='text'
            placeholder="ZipCode"
            className="input-style w-full lg:w-[150px]"
            />
          </div>
          <button className="primary-btn">
            Order Now
          </button>
        </div>
        {/* world section */}
        <div className="">
          <img src={WorldMap} alt="World Map" className="w-full sm:w-[500px] mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default WhereToBuy;
