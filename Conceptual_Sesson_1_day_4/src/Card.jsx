import React from "react";

const Card = (props) => {
console.log(props)
   
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
        <figure>
          <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
        </figure>
        <p></p>
        <p>{props.views}</p>
      </div>
    </>
  );
};

export default Card;
