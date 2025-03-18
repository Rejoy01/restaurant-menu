import React from "react";

const Menuitem = ({index , item}) => {
  return (
    <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3">
      <div className="card shadow-sm">
        <img
          src={item.image}
          className="card-img-top"
          alt={item.name}
          style={{ height: "180px", objectFit: "cover", borderRadius: "10px" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{item.name}</h5>
          <p className="text-muted">₹{item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Menuitem;
