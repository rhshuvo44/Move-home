import React from "react";
import b1 from '../../images/b1.jpg';
import b2 from '../../images/b2.jpg';

const News = () => {
  return (
    <div className="p-12">
      <h1 className="text-center font-bold text-5xl">
        Latest <span className="text-primary">News</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5">
       
        <div class="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src={b1}
              alt="Movie"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Velit tempora molestias quae</h2>
            <p>Recusandae dolor sit amet consectetu entes adipisicing elit velit error repellat assumenda suscipit illum</p>
            <div class="card-actions">
              <button class="btn btn-primary text-white capitalize">read more</button>
            </div>
          </div>
        </div>
        <div class="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src={b2}
              alt="Movie"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Repudiandae voluptatum quaerat</h2>
            <p>Recusandae dolor sit amet consectetu entes adipisicing elit velit error repellat assumenda suscipit illum</p>
            <div class="card-actions">
              <button class="btn btn-primary text-white capitalize">read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
