import React from "react";
import { FaArrowRight } from "react-icons/fa";
import s1 from "../../images/s1.png";
import s2 from "../../images/s2.png";
import s3 from "../../images/s3.png";

const Service = () => {
  return (
    <div className="p-12 text-center ">
      <h1 className="text-5xl mb-5">
        Our <span className="text-primary">Services</span>
      </h1>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 text-white mt-10">
        <div class="card w-96 bg-secondary shadow-xl">
          <figure class="px-10 pt-10">
          <div class="avatar p-5 bg-white">
              <div class="w-24 rounded">
                <img src={s1} alt="" />
              </div>
            </div>
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">RESIDENTIAL MOVES</h2>
            <p>
              fact that a reader will be distracted by the readable content of a
              page when looking at its layout. The point of using
            </p>
            <div class="card-actions">
              <button class="btn btn-ghost text-primary capitalize">
                Read More <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-secondary shadow-xl">
          <figure class="px-10 pt-10 ">
            <div class="avatar p-5 bg-white">
              <div class="w-24 rounded">
                <img src={s2} alt="" />
              </div>
            </div>
          </figure>

          <div class="card-body items-center text-center">
            <h2 class="card-title">OFFICE RELOCATION</h2>
            <p>
              fact that a reader will be distracted by the readable content of a
              page when looking at its layout. The point of using
            </p>
            <div class="card-actions">
              <button class="btn btn-ghost text-primary capitalize">
                Read More <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-secondary shadow-xl">
          <figure class="px-10 pt-10">
          <div class="avatar p-5 bg-white">
              <div class="w-24 rounded">
                <img src={s3} alt="" />
              </div>
            </div>
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">LONG DISTANCE MOVES</h2>
            <p>
              fact that a reader will be distracted by the readable content of a
              page when looking at its layout. The point of using
            </p>
            <div class="card-actions">
              <button class="btn btn-ghost text-primary capitalize">
                Read More <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-primary mt-10 text-white capitalize">
        View More
      </button>
    </div>
  );
};

export default Service;
