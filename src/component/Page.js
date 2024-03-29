import React from "react";

export default function page() {
  return (

    <div className="home" style={{backgroundImage:'url(/images/bg.jpg)'}}>
    <div className="main">

    <div className="container">
    <div id="one">
          <section className="first">
            <div className="img1">
              <img src="/images/pic.png" alt="" />
            </div>
            <h5>5678</h5>
            <p>Solved Cases</p>
          </section>

          <div className="linee"></div>
          <section className="second">
            <div className="img1">
              <img src="/images/pic.png" alt="" />
            </div>
            <h5>35</h5>
            <h7>Staff Members</h7>
          </section>
        </div>

        <div className="line"></div>

        <div id="two">
          <section className="third">
            <div className="img1">
              <img src="/images/pic.png" alt="" />
            </div>
            <h5>34</h5>
            <h7>staff Members</h7>
          </section>
          <div className="linee"></div>
          <section className="four">
            <div className="img1">
              <img src="/images/pic.png" alt="" />
            </div>
            <h5>10</h5>
            <h7>Top 10 law firms</h7>
          </section>
        </div>
      </div>
      <div className="container2">
      <div className="box"><img src="/images/this.svg" alt="" /></div>
      <section className="pilo"> 
      <h6>TESTIMONIALS</h6>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fugit
      iure perspiciatis magni. Corporis ducimus sit numquam vero, ad.
      </p>
      </section>

        <div className="profile">
          <section>
            <img src="/images/pic.png" alt="" />
          </section>
          <section>
            <h6>Mudassir Saleem</h6>
            <h6>CEO</h6>
          </section>
        </div>
      </div>


     
    </div>
    <div className="last">
    <section className="one">

    <img src="/images/pic.png" alt="" />
    <h5>Contact Wakiel Family Law</h5>
    </section>
    <section className="two">
    <h5>Robx.Ai</h5>
    </section>
    
    </div>
    </div>
  );
}
