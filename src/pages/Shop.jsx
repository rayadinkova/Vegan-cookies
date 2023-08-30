import Products from "../components/Products";
import ProductsFilter from "../components/ProductsFilter";
import { useState } from "react";
import ProductsCard from "../components/ProductsCard";

//Database
import products from "../db/data";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //Input filter
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  );

  //Buttons filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    //Filtering Input items
    if (query) {
      filteredProducts = filteredItems;
    }

    //Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, title, price, img }) =>
          category === selected ||
          title === selected ||
          img === selected ||
          price === selected
      );
    }

    return filteredProducts.map(({ img, title, price }) => (
      <ProductsCard key={Math.random()} img={img} title={title} price={price} />
    ));
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <div>
      <ProductsFilter handleClick={handleClick} />
      <Products result={result} />
    </div>
  );
}
