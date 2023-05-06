import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r0nee9p",
        "template_9zpux5o",
        form.current,
        "3TDvLvUiezXfFb8im"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          toast.success("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error("An error occurred. Please try again later.");
        }
      );
  };
  return (
    <div className="flex justify-center bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600">
      <div className="max-w-screen-2xl">
        {" "}
        <ToastContainer />
        <div className="min-h-full">
          <section class=" py-10 lg:py-[20rem] overflow-hidden">
            <div>
              <div class="flex flex-wrap lg:justify-between -mx-4">
                <div class="w-full lg:w-1/2 xl:w-6/12 px-4 ">
                  <div class=" mb-12 ml-10 lg:mb-0">
                  
                    <h2
                      class="
                  text-[#000300]
                  mb-6
                  uppercase
                  font-extrabold
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[36px]
                  xl:text-[40px]
                  "
                    >
                     CONTACT ME
                    </h2>
                    <p class="text-base text-body-color leading-relaxed mb-9">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eius tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim adiqua minim veniam quis nostrud
                      exercitation ullamco
                    </p>
                  </div>
                </div>
                <div class="w-full lg:w-1/2 xl:w-5/12 px-4 drop-shadow-3xl mr-10">
                  <div className="bg-black/90 backdrop-blur-md relative  rounded-lg p-8 sm:p-12 shadow-lg">
                    <form ref={form} onSubmit={sendEmail}>
                      <div class="mb-6">
                        <input
                          type="text"
                          placeholder="Your Name"
                          name="to_name"
                          required
                          class="  w-full
                          rounded-lg
                          py-3
                          px-[14px]
                          bg-transparent
                          text-body-color text-base
                          border border-[f0f0f0]
                          resize-none
                          outline-none
                          focus-visible:shadow-none
                          focus:border-[#2470c6]
                          focus:bg-white
                        "
                        />
                      </div>
                      <div class="mb-6">
                        <input
                          type="email"
                          placeholder="Your Email"
                          name="from_email"
                          required
                          class="
                                                w-full
                                                rounded-lg
                                                py-3
                                                px-[14px]
                                                bg-transparent
                                                text-body-color text-base
                                                border border-[f0f0f0]
                                                resize-none
                                                outline-none
                                                focus-visible:shadow-none
                                                focus:border-[#2470c6]
                                                focus:bg-white
                        "
                        />
                      </div>
                      <div class="mb-6">
                        <input
                          type="text"
                          placeholder="Your Phone"
                          class="
                          w-full
                          rounded-lg
                          py-3
                          px-[14px]
                          bg-transparent
                          text-body-color text-base
                          border border-[f0f0f0]
                          resize-none
                          outline-none
                          focus-visible:shadow-none
                          focus:border-[#2470c6]
                          focus:bg-white
                        "
                        />
                      </div>
                      <div class="mb-6">
                        <textarea
                          rows="6"
                          placeholder="Your Message"
                          name="message"
                          required
                          class="
                          w-full
                          rounded-lg
                          py-3
                          px-[14px]
                          bg-transparent
                          text-body-color text-base
                          border border-[f0f0f0]
                          resize-none
                          outline-none
                          focus-visible:shadow-none
                          focus:border-[#2470c6]
                          focus:bg-white
                        "
                        ></textarea>
                      </div>
                      <div>
                        <button
                          type="submit"
                          value="Send"
                          className="
                                            relative rounded-md m-4 text-gray-300 hover:text-white font-bold text-center p-2 px-4 bg-[#000300]  transition-all duration-500
                                            before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#0f041a] before:transition-all
                                            before:duration-300 before:opacity-20 before:hover:opacity-0 before:hover:scale-50
                                            after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300
                                            after:border after:border-white/50 after:scale-125 after:hover:opacity-100 after:hover:scale-100
                        "
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
