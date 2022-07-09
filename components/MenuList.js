import MenuCard from "./MenuCard";

const MenuList = ({ carta, tipoMenu }) => {
  return (
    <ul className="max-w-[85%] mx-auto text-decoration-none grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:pag-4">
      {tipoMenu === "Todos"
        ? carta?.map((item, i) => <MenuCard item={item} key={i} />)
        : carta
            .filter((item) => item.nombre.includes(tipoMenu))
            .map((item, i) => <MenuCard item={item} key={i} />)}
    </ul>
  );
};

export default MenuList;
