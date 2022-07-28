import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import { MenuContextData } from "../contexts/MenuContext";
import { useContext } from "react";

const menu = () => {
  const { menuGlobal } = useContext(MenuContextData);
  return (
    <Layout pagina={"Menu"} >
      <div className="mt-20">
        <ProductList carta={menuGlobal} />;
      </div>
    </Layout>
  );
};
export default menu;
