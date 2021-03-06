import React from 'react';

import './ProductRow.css';

const ProductRow = ({ product }) => {

  const { name, price, stocked } = product;

  return (
    <tr>
      <td className={stocked ? 'with-stock' : 'out-of-stock'}>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
