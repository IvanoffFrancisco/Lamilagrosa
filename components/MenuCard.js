import Image from "next/image";

const MenuCard = ({ item }) => {
  return (
    <li className="h-full text-center bg-black shadow-md shadow-gray-700 hover:ring-4 hover:ring-red-600 rounded-md">
      <div>
        <Image
          src={item.imagen}
          layout="responsive"
          width="600"
          height="400"
          alt="producto"
          objectFit="cover"
          className="rounded-md"
        />
        <div>
          <h2 className="font-bold text-lg text-white pt-2 px-1">
            {item.nombre}
          </h2>
          <div className="flex justify-evenly items-center py-3">
            <p className="text-red-600 text-2xl pb-2">$ {item.precio}</p>
            <button className="py-1 px-3 bg-red-600 text-white text-lg rounded-md">Añadir</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MenuCard;
