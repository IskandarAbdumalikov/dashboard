import React from "react";
import "./table.scss";
import useFetch from "../../hooks/useFetch";
import Loading from "../loading/Loading";

const Table = () => {
  let { data, error, loading } = useFetch("/users");
  console.log(data?.users);
  let trItems = data?.users.map((el) => (
    <tr key={el.id}>
      <td className="user__name">
        <img width={30} src={el.image} alt="" />
        <div className="name">
          <p>{el.firstName}</p>
          <p>{el.lastName}</p>
        </div>
      </td>
      <td>{el.birthDate} Date</td>
      <td>{el.email}</td>
      <td>{el.gender}</td>
      <td>{el.phone}</td>
    </tr>
  ));
  return (
    <div className="admin__body">
      <div className="admin__body__intro">
        <h1>Tickets</h1>
        <div className="admin__body__intro__btns">
          <button className="dotBtn">...</button>
          <button className="button">Add</button>
        </div>
      </div>
      <div className="admin__body__table">
        <h2>All tickets</h2>
        <table>
          <thead>
            <tr>
              <th>Owner</th>
              <th>Birth Date</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Phone number</th>
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

export default Table;
