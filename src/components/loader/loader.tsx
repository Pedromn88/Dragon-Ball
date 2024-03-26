import React from "react";

export default function Loader() {
  return (
    <div className="cartoon" role="img" aria-labelledby="desc">
      <div className="button">
        <div className="neck"></div>
        <div className="base"></div>
        <label className="clickable"></label>
      </div>
      <div className="radar r hb ha">
        <div className="screen r">
          <div className="ball r"></div>
          <div className="ball r"></div>
          <div className="triangle"></div>
          <div className="triangle nesw north"></div>
          <div className="triangle nesw east"></div>
          <div className="triangle nesw south"></div>
          <div className="triangle nesw west"></div>
        </div>
      </div>
    </div>
  );
}
