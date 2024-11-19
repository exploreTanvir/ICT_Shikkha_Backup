import React from "react";
import galleryImg1 from "../../assets/ictImg1.jpg";
import galleryImg2 from "../../assets/ictImg2.jpg";
import galleryImg3 from "../../assets/ictImg3.jpg";
import galleryImg4 from "../../assets/ictimg4.jpg";
import galleryImg5 from "../../assets/ictimg5.jpg";
import galleryImg6 from "../../assets/ictimg6.jpg";
import galleryImg7 from "../../assets/ictimg7.jpg";
import "./Gallery.css";

const Gallery = () => {
 

  return (
    <section>
      <div className="faqTitle text-center mt-5 mb-4 wow fadeInUp">
        <span>আমাদের দেওয়াল</span>
      </div>
      <div className="container">
        <div className="row pb-2 justify-content-center">
          <div className="col-lg-3 gallery d-flex align-items-end gallery1 p-0 wow fadeInLeft">
            <img src={galleryImg4} alt="" />
          </div>
          <div className="col-lg-3 gallery d-flex align-items-end gallery1 p-0 wow fadeInLeft">
            <img src={galleryImg5} alt="" />
          </div>
          <div className="col-lg-3 gallery d-flex align-items-end gallery1 p-0 wow fadeInLeft">
            <img src={galleryImg6} alt="" />
          </div>
          
          <div className="col-lg-3 gallery d-flex align-items-end gallery1 p-0 wow fadeInLeft">
            <img src={galleryImg1} alt="" />
          </div>
          <div className="col-lg-3 d-flex gallery align-items-end gallery1 p-0 wow fadeInDown">
            <img src={galleryImg2} alt="" />
          </div>
          <div className="col-lg-3 d-flex gallery align-items-end gallery1 p-0 wow fadeInDown">
            <img src={galleryImg7} alt="" />
          </div>
          <div className="col-lg-3 d-flex gallery align-items-end gallery1 p-0 wow fadeInRight">
            <img src={galleryImg3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
