import "../App.css";

function Products() {
  return (
    <div className="container" id="products">
      <div className="container-discoveries">
        <h2>our products</h2>
      </div>
      <div className="card-container">
        <div className="card-wellness">
          <img src="../image mask.png" alt="" />
          <p>intibiome wellness daily <br />intimate wash</p>
          <h2>wellness</h2>
        </div>
        <div className="card-active">
          <img src="../image mask verde.png" alt="" />
          <p>intibiome active extra protection intimate wash</p>
          <h2>active</h2>
        </div>
        <div className="card-agecare">
          <img src="../image mask rosa.png" alt="" />
          <p>intibiome agecare dryness <br />relief intimate wash</p>
          <h2>agecare</h2>
        </div>
      </div>        
      <img src="../Asset 22.png" alt="" className="img-products" />
      <img src="../responsive-image-products" alt="" className="img-products-responsive" />
    </div>
  );
}

export default Products;
