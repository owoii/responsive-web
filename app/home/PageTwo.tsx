import { Line, OButton } from "../common/Common";

type FoodImgProp = {
  src: string;
};

function FoodImgCard(prop: FoodImgProp) {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <img
        src={prop.src}
        className="w-full h-full object-cover rounded-lg  hover:scale-105 transition-all duration-300 ease"
      />
      <h3 className=" text-[5vmin] sm:text-[3vmin] font-black text-purple-800">
        Delicious food
      </h3>
      <p className=" text-left text-lg">Who wouldn't love a good meal?</p>
      <OButton className="text-white">Look more</OButton>
    </div>
  );
}

export default function PageTwo() {
  return (
    <div className="m-h-screen m-auto sm:w-4/5 p-10">
      <div className="mb-20 text-center sm:mb-30">
        <h1 className="text-[7vmin] text-purple-800">Food Show</h1>
        <Line />
      </div>

      <div className="flex w-full gap-14 flex-wrap sm:flex-nowrap">
        <FoodImgCard src="/images/food2.jpg" />
        <FoodImgCard src="/images/food3.jpg" />
      </div>
    </div>
  );
}
