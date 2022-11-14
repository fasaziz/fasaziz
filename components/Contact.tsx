import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:info:fasaziz.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <div className="sm:h-screen flex flex-col relative text-center max-w-7xl px-4 sm:px-10 justify-evenly mx-auto items-center py-10 sm:py-0">
      <h3 className="sm:absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Conact
      </h3>
      <div className="flex flex-col space-y-10 sm:p-8 md:p-8">
        <h4 className="sm:text-sm md:text-sm lg:text-lg text-3xl font-semibold text-center">
          Feel free to contact me <br></br>
          <span className="underline decoration-blue-500">
            Lets Work Together
          </span>
        </h4>

        <div className="space-y-6 sm:space-y-10">
          {/* <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-blue-500 h-7 w-7 animate-pulse" />
            <p className="text-2xl">+00000</p>
          </div> */}

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-blue-500 h-7 w-7 animate-pulse" />
            <p className="text-2xl">London</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-blue-500 h-7 w-7 animate-pulse" />
            <p className="text-2xl">info@fasaziz.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 sm:w-fit mx-auto w-full"
        >
          <div className="flex space-x-1">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput w-full"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput w-full"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />

          <button
            type="submit"
            className="py-4 sm:py-5 px-10 rounded-md font-bold text-black bg-slate-500/50 "
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
