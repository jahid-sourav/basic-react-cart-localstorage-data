import Cart from "../cart/Cart";

export default function Header() {
  return (
    <div className="container mx-auto text-white px-2 py-4">
      <div className="flex items-center justify-between">
        <a href="index.html">
          <img src="src/assets/react.svg" alt="Logo" />
        </a>
        <div className="drawer drawer-end w-auto">
          <input id="sideBar" type="checkbox" className="drawer-toggle" />
          <Cart />
        </div>
      </div>
    </div>
  );
}
