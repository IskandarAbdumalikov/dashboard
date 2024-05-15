import React from 'react'

const Articles = () => {
  return (
    <div className="admin__body">
      <div className="admin__body__intro">
        <h1>Articles</h1>
        <div className="admin__body__intro__btns">
          <button className="dotBtn">...</button>
          <button className="button">Add</button>
        </div>
      </div>
      <img
        src="https://cdn.dribbble.com/userupload/2905353/file/original-2022966da1fc3718d3feddfdc471ae47.png?resize=400x0"
        alt=""
      />
    </div>
  );
}

export default Articles