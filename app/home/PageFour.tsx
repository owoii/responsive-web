import { Line, OButton } from "../common/Common";

const images = [
  "/images/food1.jpg",
  "/images/food2.jpg",
  "/images/food3.jpg",
  "/images/food4.jpg",
];

function ImageGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {images.map((item) => (
        <img
          src={item}
          key={item}
          className="h-full w-full object-cover rounded-md transition-all duration-300  ease hover:scale-105"
        />
      ))}
    </div>
  );
}

export default function PageFour() {
  return (
    <div className="p-5 md:p-0 min-h-screen w-4/5 m-auto flex flex-col gap-5 md:grid md:grid-cols-2 items-center">
      <div className="flex md:items-start flex-col justify-center items-center gap-5">
        <h1 className="text-[6vmin]">More Food</h1>
        <p className="text-gray-400">
          The food is absolutely delicious! Every bite is bursting with flavor
          and leaves you wanting more
        </p>
        <Line className="mx-0" />
        <OButton className="text-white">Learn More</OButton>
      </div>
      <ImageGrid />
    </div>
  );
}
