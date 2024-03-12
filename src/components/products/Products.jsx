import { useEffect, useState } from "react";
import Product from "../product/Product";
import Spinner from "../spinner/Spinner";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);
  const getLocalCartData = () => {
    let localCartData = localStorage.getItem("cart");
    if (!localCartData || localCartData === "[]") {
      return [];
    } else {
      return JSON.parse(localCartData);
    }
  };
  const removeItem = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const [cart, setCart] = useState(getLocalCartData());
  const addToCart = (product) => {
    const isProductInCart = cart.some((item) => item.id === product.id);
    if (!isProductInCart) {
      const newCart = [...cart, product];
      setCart(newCart);
    }
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="drawer drawer-end w-auto">
            <input id="sideBar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="sideBar"
                className="indicator cursor-pointer rounded p-1 bg-[#00d8ff] text-black text-base font-medium"
              >
                <span className="indicator-item badge badge-primary left-0">
                  {cart.length}
                </span>
                Cart
              </label>
            </div>
            <div className="drawer-side z-[2]">
              <label
                htmlFor="sideBar"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-[80%] md:w-80 min-h-full bg-base-200 text-base-content">
                <li className="text-xl font-bold mb-3">Cart</li>
                {cart.map((product) => (
                  <div
                    key={product.id}
                    className="mb-2 border-2 border-green-700 rounded p-2"
                  >
                    <img
                      src={product.image}
                      className="mx-auto h-[200px] w-[200px]"
                    />
                    <h4 className="text-base font-bold my-2">
                      {product.title}
                    </h4>
                    <div className="flex items-center gap-2">
                      <p className="text-lg font-bold text-red-800">
                        ${product.price}
                      </p>
                      <button
                        className="bg-red-700 text-white p-2 rounded"
                        onClick={() => removeItem(product.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Product
                product={product}
                key={product.id}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
