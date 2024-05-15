import React from "react";
import "./products.scss";
import useFetch from "../../hooks/useFetch";
import Loading from "../loading/Loading";


const Products = () => {
  let { data, error, loading } = useFetch("/products");
  let trItems = data?.products.map((el) => (
    <tr key={el.id}>
      <td className="user__name">
        <img  src={el.thumbnail} alt="" />
        <p title={el.description}>{el.brand}</p>
      </td>
      <td>{el.price} $</td>
      <td>{el.category}</td>
      <td>{el.discountPercentage} %</td>
    </tr>
  ));
  return (
    <div className="admin__body">
      <div className="admin__body__intro">
        <h1>Overview</h1>
        <div className="admin__body__intro__btns">
          <button className="dotBtn">...</button>
          <button className="button">Add</button>
        </div>
      </div>
      <div className="admin__body__table">
        <table>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Price</th>
              <th>Category</th>
              <th>Discount Percentage</th>
            </tr>
          </thead>
          <tbody>{trItems}</tbody>
        </table>
        {loading ? (
          <div className="loading__items">
            <Loading />
            <Loading />
            <Loading />
            <Loading />
            <Loading />
            <Loading />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Products;
