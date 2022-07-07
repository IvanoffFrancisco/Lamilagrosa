import Image from "next/image";

const MenuCard = ({ item }) => {
  return (
    <li className="text-center bg-black shadow-md shadow-gray-700 cursor-pointer hover:ring-4 hover:ring-blue-600">
      <div>
        <Image
          src={item.imagen}
          layout="responsive"
          width="600"
          height="400"
          alt="producto"
          objectFit="cover"
        />
        <h2 className="font-bold text-lg text-white py-2 lg:text-lg xl:text-xl">
          {item.nombre}
        </h2>
        <p className="text-blue-600 text-lg pb-2">$ {item.precio}</p>
      </div>
    </li>
  );
};

export default MenuCard;
