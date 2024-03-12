export default function Cart() {
  return (
    <>
      <div className="drawer-content">
        <label
          htmlFor="sideBar"
          className="indicator cursor-pointer rounded p-1 bg-[#00d8ff] text-black text-base font-medium"
        >
          <span className="indicator-item badge badge-primary left-0">0</span>
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
          <li>Cart</li>
        </ul>
      </div>
    </>
  );
}
