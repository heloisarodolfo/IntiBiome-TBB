import "../App.css";

function Discoveries() {
  return (
    <div className="container" id="discoveries">
      <div className="container-discoveries">
        <h2>keep up to date with our discoveries</h2>
      </div>
      <div className="card-container">
        <div className="card-1">
          <img src="../card 1 discoveries.png" alt="" />
          <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
        </div>
        <div className="card-2">
          <img src="../card 2 discoveries.png" alt="" />
          <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
        </div>
        <div className="card-3">
          <img src="../card 3 discoveries.png" alt="" />
          <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="button-part">
        <button>See more</button>
      </div>
    </div>
  );
}

export default Discoveries;
