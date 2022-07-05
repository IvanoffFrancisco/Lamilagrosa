import TipoMilaBar from "./TipoMilaBar";
import MenuList from "./MenuList";

const ProductList = ({ carta }) => {
  return (
    <div className="w-full">
      <p className="text-center py-8 text-2xl md:text-3xl xl:text-4xl font-semibold tracking-wide ">
        Nuestros Productos
      </p>
      <TipoMilaBar />
      <MenuList menuList={carta} />
    </div>
  );
};

export default ProductList;
