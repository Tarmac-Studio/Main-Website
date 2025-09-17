import { assets } from "../assets/homeAssets";

interface FixedServiceProps {
  text: string;
  position: string;
  delay: number;
  bgColor: string;
  borderColor: string;
  //   pointerImage: string;
  pointerPosition: string;
  showPointerOnly?: boolean;
  showBubbleOnly?: boolean;
  stackIndex?: number;
}

export const FixedService: React.FC<FixedServiceProps> = ({
  text,
  position,
  //   delay,
  bgColor,
  borderColor,
}) => {
  return (
    <div
      className={`absolute ${position} transform transition-all duration-1000 ease-out flex-col items-center hidden xl:flex`}
    >
      <div
        className="relative px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10 py-1.5 md:py-2 lg:py-2.5 xl:py-2 rounded-full flex items-center justify-center text-white font-medium text-xs md:text-sm lg:text-base gap-2 transition-transform duration-300 cursor-pointer backdrop-blur-3xl border-2 hover:scale-105 whitespace-nowrap mt-15"
        style={{
          backgroundColor: bgColor,
          borderColor,
          borderTopLeftRadius: "5px",
        }}
      >
        <img
          src={assets.Cursor}
          alt="corner decoration"
          className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-3 md:-left-3 lg:-top-4 lg:-left-4 xl:-top-5 xl:-left-5 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8"
        />
        {text}
      </div>
    </div>
  );
};

export default FixedService;
