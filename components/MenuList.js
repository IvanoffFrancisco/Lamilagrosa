import MenuCard from "./MenuCard";

const MenuList = ({ menuList }) => {
  return (
    <ul className="max-w-[85%] mx-auto text-decoration-none grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 ">
      {menuList?.map((item, i) => (
        <MenuCard item={item} key={i} />
      ))}
    </ul>
  );
};

export default MenuList;

{
  /* <ul className="max-w-[85%] lg:px-8 mx-auto w-full h-full xl:px-12 2xl:px-16 flex flex-wrap text-decoration-none md:gap-x-2 lg:gap-x-6 2xl:gap-x-10">
  {menuList?.map((item, i) => (
    <MenuCard item={item} key={i} />
  ))}
</ul>; */
}
