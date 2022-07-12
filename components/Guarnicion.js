import Image from "next/image";

const Guarnicion = ({ guarnicion }) => {
  return (
    <li className="min-w-[117px] max-w-[100px] flex-shrink-0 snap-start">
      <Image
        src={guarnicion.imagen}
        alt="producto"
        layout="responsive"
        width="500"
        height="330"
        objectFit="cover"
        className="cursor-pointer rounded-md hover:ring-red-600 ring-1"
      />
    </li>
  );
};

export default Guarnicion;
