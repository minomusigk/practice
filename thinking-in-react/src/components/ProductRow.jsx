import PropTypes from "prop-types";

const ProductRow = ({ product }) => {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    </>
  );
};

ProductRow.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    stocked: PropTypes.bool,
  }),
};

export default ProductRow;
