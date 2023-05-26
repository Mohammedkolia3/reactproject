import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, addToCart } from "../REDUX/productSlice";

function Product() {
  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (loading) {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card" aria-hidden="true">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6" />
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7" />
                  <span className="placeholder col-4" />
                  <span className="placeholder col-4" />
                  <span className="placeholder col-6" />
                  <span className="placeholder col-8" />
                </p>
                <a className="btn btn-primary disabled placeholder col-6" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" aria-hidden="true">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6" />
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7" />
                  <span className="placeholder col-4" />
                  <span className="placeholder col-4" />
                  <span className="placeholder col-6" />
                  <span className="placeholder col-8" />
                </p>
                <a className="btn btn-primary disabled placeholder col-6" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" aria-hidden="true">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6" />
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7" />
                  <span className="placeholder col-4" />
                  <span className="placeholder col-4" />
                  <span className="placeholder col-6" />
                  <span className="placeholder col-8" />
                </p>
                <a className="btn btn-primary disabled placeholder col-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container moveUpAnimation">
      <h1>Product</h1>
      <div className="row">
        {products.map((item) => {
          const { description, price, title, image, id, isAdded } = item;
          return (
            <div className="col-md-4 mb-4" key={id}>
              <div className="card">
                <img
                  src={image}
                  style={{
                    width: 200,
                    height: 200,
                    objectFit: "cover",
                    display: "block",
                    margin: "0 auto",
                  }}
                  alt={title}
                />
                <div className="card-body">
                  <h6 className="text-truncate">{title}</h6>
                  <p>{price}</p>
                  <p className="text-truncate">{description}</p>
                  {isAdded ? (
                    <button className="btn btn-danger">Go to Cart</button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => dispatch(addToCart(item))}
                    >
                      Add To Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;