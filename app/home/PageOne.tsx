import { Line, OButton } from "../common/Common";

export default function PageOne() {
  return (
    <div className="w-screen h-screen bg-[url('/images/food1.jpg')] bg-cover bg-bottom">
      {/* header */}
      <header className="w-screen h-screen backdrop-brightness-50 flex items-end justify-center">
        <div className="mb-[150px] text-white text-center">
          {/* header-content */}
          <h2 className="text-[4vmin]">
            Food is the most beautiful thing in the world ! 😛
          </h2>
          <Line />
          <h1 className="text-[7vmin] mt-[50px] mb-[30px]">
            YUM !!! YUM !!! YUM !!!
          </h1>
          <OButton>Yum</OButton>
        </div>
      </header>
    </div>
  );
}
