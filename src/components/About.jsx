import "../App.css";


function About() {
  return (
    <div className="container" id="about">
      <img src="../banner-hero.png" alt="banner" className="banner" />
      <div className="text-about">
        <h2>we're here to help</h2>
        <p>
          When it comes to caring for our most intimate areas, <br /> we've lost our
          connection.
        </p>
        <p>
          Embarrassed, unwilling, or unable to communicate with <br /> others, we're
          needlessly neglecting the parts of our <br /> bodies that need it most.
        </p>
        <p>
          We're here to help. Providing you with the expertise, <br /> knowledge and
          products you need to feel confident in <br /> you personal care.
        </p>
      </div>
      <div className="container-img">
        <img src="../icons.png" alt="" className="icons" />
      </div>
      <div className="text-about-2">
        <h2>
          whatever you age. whatever your <br />lifestyle. whatever your interests.
        </h2>
        <p>
          Co-created with gynaecologists, our revolutionary products have been
          expertly <br /> developed to support your intimate microbime and <br /> pH balance,
          and strengthen overall natural health.
        </p>
        <p>
          AS the experts in intimate hygiene, we want to bring discussion about
          intimate <br /> wellness care out of the dark and demystify the taboos that
          surround it.
        </p>
      </div>
    </div>
  );
}

export default About;
