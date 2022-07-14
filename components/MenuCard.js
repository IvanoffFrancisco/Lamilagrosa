import Image from "next/image";
import Link from "next/link";

const MenuCard = ({ item }) => {
  return (
    <li className="h-full text-center bg-black shadow-md shadow-gray-700 hover:ring-2 hover:ring-red-600 rounded-md">
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
          <h2 className="font-bold text-lg text-white px-1">{item.nombre}</h2>
          <div className="flex justify-evenly items-center py-1 mb-1">
            <p className="text-red-600 text-2xl">$ {item.precio}</p>
            <Link href="/producto">
              <a className="py-[6px] px-3 bg-red-600 text-white text-sm rounded-md">
                Añadir
              </a>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MenuCard;
