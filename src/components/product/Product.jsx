import PropTypes from "prop-types";
export default function Product(props) {
  const { product, addToCart } = props;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="pt-2">
        <img
          src={product?.image}
          alt="Movie"
          className="h-[200px] w-[200px] object-cover"
        />
      </figure>
      <div className="card-body">
        <h2
          className="card-title"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "100%",
            display: "inline-block",
          }}
        >
          {product.title}
        </h2>
        <p className="text-red-700 font-medium capitalize">
          {product?.category}
        </p>
        <p className="text-green-700 font-medium">${product?.price}</p>
        <p
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            maxWidth: "100%",
          }}
        >
          {product?.description}
        </p>
        <div className="flex items-center text-green-800">
          <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <span className="ml-1 font-bold">{product?.rating?.rate}</span>
        </div>
        <div className="flex items-center text-red-800 gap-2">
          <i className="fa-regular fa-comments"></i>
          <span className="font-bold">{product?.rating?.count}</span>
        </div>
        <div className="card-actions justify-end">
          <button
            className="btn bg-[#00d8ff]"
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
Product.propTypes = {
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
};
