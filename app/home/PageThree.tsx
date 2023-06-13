import { Line, OButton } from "../common/Common";

export default function PageThree() {
  return (
    <div className="h-screen w-screen relative bg-cover bg-bottom bg-[url('/images/food4.jpg')]">
      {/* 滤镜层 */}
      <div className="absolute h-screen w-screen backdrop-brightness-50 backdrop-blur-sm text-white flex items-center">
        <div className="px-5 text-center w-full sm:w-3/5 flex flex-col gap-5 justify-center items-center">
          <h1 className="text-[7vmin] font-black">
            Food is the source of spirituality
          </h1>
          <Line />
          <p className="text-[4vmin] text-gray-100">
            The food is absolutely delicious! Every bite is bursting with flavor
            and leaves you wanting more
          </p>
          <OButton className="">Go Eat</OButton>
        </div>
      </div>
    </div>
  );
}
