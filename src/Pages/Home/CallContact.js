import React from "react";
import callImg from "../../images/call-img.jpg";

const CallContact = () => {
  return (
    <div className="bg-secondary p-12 text-white">
      <div class="card lg:card-side shadow-xl">
        <figure className="w-2/4">
          <div class="avatar">
            <div class=" rounded-full ring ring-secondary ring-offset-secondary ring-offset-2">
              <img src={callImg} alt="Album" />
            </div>
          </div>
        </figure>
        <div class="w-2/4 flex items-center  px-20">
          <div>
            <p className=" text-2xl mb-2">Call Us Today </p>
            <h1 className=" text-5xl text-primary mb-2">+01 123456789</h1>

            <p className="font-bold">
              Optio pariatur facilis, dolores veritatis perferendis cumque, non
              ipsa expedita fugit corrupti, earum ex officiis? Eaque quisquam
              temporibus nemo enim impedit. Fuga, vero debitis! Ducimus iusto
              dolores provident maxime itaque
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallContact;
