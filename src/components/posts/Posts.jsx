import React from "react";
import "./posts.scss";
import useFetch from "../../hooks/useFetch";
import Loading from "../loading/Loading";

const Posts = () => {
  let { data, error, loading } = useFetch("/carts");
  console.log(data?.carts[1].products);
  let trItems = data?.carts[1].products.map((el) => (
    <tr key={el.id}>
      <td className="user__name">
        <img src={el.thumbnail} alt="" />
      </td>
      <td>
        <p title={el.title}>{el.title}</p>
      </td>
      <td>{el.price} $</td>
      <td>{el.quantity}</td>
    </tr>
  ));
  return (
    <div className="admin__body">
      <div className="admin__body__intro">
        <h1>Posts</h1>
        <div className="admin__body__intro__btns">
          <button className="dotBtn">...</button>
          <button className="button">Add</button>
        </div>
      </div>
      <div className="admin__body__table">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
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

export default Posts;
