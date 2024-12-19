import React from "react";
import contact_us_image from "@/assets/image/contact_us_image.png";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
const Contact = () => {
  //Event handler
  const handleContact = (buttonType: string) => {
    if (buttonType === "email") {
      window.location.href =
        "mailto:jlsuhot@gmail.com?subject=Contact from portfolio";
    }
  };
  return (
    <section className="bg-background">
      <div className="lg:px-20 min-h-screen">
        <div className="py-[60px]  md:flex md:flex-row-reverse">
          <div className="md:w-1/2 w-full">
            <img src={contact_us_image} alt="contact_us_image" />
          </div>
          <div className="md:w-1/2">
            <div className="py-8 px-4">
              <h1 className="text-foreground text-3xl mx-1 md:flex md:flex-col flex flex-col">
                <span className="text-5xl text-foreground underline-offset-4 underline decoration-2 md:py-2 py-4">
                  Let's talk business!
                </span>
                I'd love to hear from you. Here's how you can reach me.
              </h1>
              <div className="mt-10">
                {/* Email */}
                <div
                  className="flex space-x-3 py-1 cursor-pointer"
                  onClick={() => handleContact("email")}
                >
                  <span>
                    <MdEmail className="w-8 h-8 text-foreground items-center" />
                  </span>
                  <label
                    htmlFor=""
                    className="text-foreground text-xl cursor-pointer"
                  >
                    jlsuhot@gmail.com
                  </label>
                </div>
                {/* Number */}
                <div className="flex space-x-3 py-1">
                  <span>
                    <BiSolidPhoneCall className="w-8 h-8 text-foreground items-center" />
                  </span>
                  <div className="flex flex-col">
                    <label htmlFor="" className="text-foreground text-xl">
                      0907-508-7284
                    </label>
                    <label htmlFor="" className="text-foreground text-xl">
                      0994-289-4494
                    </label>
                    <label htmlFor="" className="text-foreground text-xl">
                      0970-586-3239
                    </label>
                  </div>
                </div>
                <div className="flex space-x-3 py-1">
                  <span>
                    <FaMapLocationDot className="w-8 h-8 text-foreground items-center" />
                  </span>
                  <label htmlFor="" className="text-foreground text-xl">
                    Cebu City, 6000
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
