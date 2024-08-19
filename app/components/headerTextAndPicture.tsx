import Image from "next/image";

interface HeaderTextAndPictureProps {
  title: string;
  description?: string;
  image: string;
}

const HeaderTextAndPicture: React.FC<HeaderTextAndPictureProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="w-full mx-auto h-auto flex justify-center bg-gray-50">
      <div className="container flex flex-col md:flex-row items-center justify-around py-8 px-4 md:px-0">
        <div className="flex flex-col gap-2 md:gap-8 text-center md:text-left">
          <h1 className="text-2xl md:text-5xl font-semibold">{title}</h1>
          <p className="text-l md:text-2xl">{description}</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Image src={image} alt={title} width={350} height={250}/>
        </div>
      </div>
    </div>
  );
};

export default HeaderTextAndPicture;
