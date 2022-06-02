import React from "react";
import { useForm } from "react-hook-form";

const ContactUS = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="p-12">
      <h1 className="font-bold text-center text-5xl">
        Contact <span className="text-primary">Us</span>
      </h1>
      <div className="w-2/3 m-auto">
      <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control w-full">
          <input
            type="text"
            placeholder="First Name"
            class="input input-bordered w-full"
            {...register("firstName", { required: true })}
          />
          <label class="label">
            {errors.firstName && (
              <span class="label-text-alt">First name is required</span>
            )}
          </label>
        </div>
        <div class="form-control w-full">
          <input
            type="text"
            placeholder="Last Name"
            class="input input-bordered w-full"
            {...register("lastName", { required: true })}
          />
          <label class="label">
            {errors.lastName && (
              <span class="label-text-alt">Last name is required</span>
            )}
          </label>
        </div>
        <div class="form-control w-full">
          <input
            type="email"
            placeholder="Email"
            class="input input-bordered w-full"
            {...register("email", { required: true })}
          />
          <label class="label">
            {errors.email && (
              <span class="label-text-alt">Email is required</span>
            )}
          </label>
        </div>
        <div class="form-control w-full">
          <input
            type="text"
            placeholder="Number"
            class="input input-bordered w-full"
            {...register("number")}
          />
        </div>
        <div class="form-control w-full mt-5">
          <textarea
            placeholder="Message"
            class="input input-bordered w-full"
            {...register("message", { required: true })}
          />
          <label class="label">
            {errors.message && (
              <span class="label-text-alt">Message is required</span>
            )}
          </label>
        </div>

        <input className="btn px-10 btn-xl btn-primary text-white" type="submit" value="Send" />
      </form>
      </div>
    </div>
  );
};

export default ContactUS;
