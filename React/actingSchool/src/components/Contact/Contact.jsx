import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

function Contact() {

    return (
        <>
            <section className="h-auto w-screen">
                <div className="h-auto w-full ">
                    <div className="h-auto w-[100vw] m-auto flex justify-around flex-wrap-reverse pt-[4.5rem] sm:pt-[5.5rem] md:pt-[6rem] lg:pt-[7.8rem] xl:pt-[9rem] ">
                        <div className="h-auto ">

                            <div className=" h-[13rem] sm:h-[17rem] md:h-[20rem] lg:h-[23rem] xl:h-[25rem] ">
                                <img className=" h-[90%] m-auto mt-6 " src="img/collab 2.png" alt="face" />
                            </div>

                            <div className="h-[10rem] sm:h-[14rem] md:h-[16rem] lg:h-[18rem] xl:h-[20rem] w-auto sm:px-2 ">
                                <h1 className="text-white text-[1rem] sm:text-[1.5rem] md:text-2xl lg:text-2xl xl:text-[1.4rem] pt-5 tracking-[0.1rem] sm:tracking-[0.15rem] lg:tracking-[0.2rem] xl:tracking-[0.25rem] font-semibold">CONTACT INFORMATION</h1>
                                <div className="h-[1rem] sm:h-[1.5rem] md:h-[2rem] lg:h-[2.5rem] xl:h-[3rem] w-auto flex jusctify-center items-center mt-2">
                                    <BsTelephoneFill className="text-[15px] sm:text-[19px] md:text-[22px] lg:text-[24px] xl:text-[26px] text-white" />
                                    <span className="text-white text-[14px] sm:text-[18px] md:text-[20px] lg:text-[23px] xl:text-[24px] pl-4">+202 555 0789</span>
                                </div>

                                <div className="h-[1rem] sm:h-[1.5rem] md:h-[2rem] lg:h-[2.5rem] xl:h-[3rem] w-auto flex jusctify-center items-center mt-2">
                                    <AiOutlineMail className="text-[15px] sm:text-[19px] md:text-[22px] lg:text-[24px] xl:text-[26px] text-white" />
                                    <span className="text-white text-[14px] sm:text-[18px] md:text-[20px] lg:text-[23px] xl:text-[24px] pl-4">dance@gamil.com</span>
                                </div>

                                <div className="h-[1rem] sm:h-[1.5rem] md:h-[2rem] lg:h-[2.5rem] xl:h-[3rem] w-auto flex jusctify-center sm:items-start xl:items-center lg:items-center mt-2">
                                    <HiOutlineLocationMarker className="text-[18px] sm:text-[21px] md:text-[24px] lg:text-[28px] xl:text-[30px] text-white" />
                                    <span className="text-white text-[14px] sm:text-[18px]  md:text-[20px] lg:text-[23px] xl:text-[24px] pl-4">218 Pegg Rd, Morris, New York(NY), 13808</span>
                                </div>

                            </div>
                        </div>

                        <div className="h-auto w-[28rem] flex flex-col items-center ">
                            <h1 className="text-white text-[1rem] sm:text-xl md:text-2xl lg:text-[2rem] xl:text-[2.2rem]  tracking-[0.18rem] sm:tracking-[0.25rem] lg:tracking-[0.3rem] xl:tracking-[0.4rem] font-semibold">CONTACT US</h1>
                            <form className="mt-1 sm:mt-2  md:mt-4 lg:mt-6 xl:mt-7 w-full p-4 rounded-lg">
                                <input type="text" placeholder="Name" className=" h-[2rem] sm:h-[2.5rem] md:h-[2.7rem] lg:h-[3.2rem] xl:h-[3.5rem] w-full text-[14px] sm:text-[16px] md:text-[18px] lg:text-lg xl:text-lg rounded-sm sm:rounded-sm md:rounded-md lg:rounded-lg xl:rounded-lg pl-[4px] sm:pl-2 md:pl-3 lg:pl-4 xl:pl-4 mb-4 sm:mb-6 md:mb-8 lg:10 xl:mb-10" />
                                <input type="text" placeholder="Email" className=" h-[2rem] sm:h-[2.5rem] md:h-[2.7rem] lg:h-[3.2rem] xl:h-[3.5rem]  w-full text-[14px] sm:text-[16px] md:text-[18px] lg:text-lg xl:text-lg rounded-sm sm:rounded-sm md:rounded-md lg:rounded-lg xl:rounded-lg pl-[4px] sm:pl-2 md:pl-3 lg:pl-4 xl:pl-4 mb-4 sm:mb-6 md:mb-8 lg:10 xl:mb-10" />
                                {/* <input type="message" placeholder="Message" className="h-[20rem] w-full text-sm sm:text-[16px] md:text-[18px] lg:text-lg xl:text-lg rounded-sm sm:rounded-sm md:rounded-md lg:rounded-lg xl:rounded-lg pl-[4px] sm:pl-2 md:pl-3 lg:pl-4 xl:pl-4 mb-4 sm:mb-6 md:mb-8 lg:10 xl:mb-10" /> */}
                                <textarea
                                    name="Your Message"
                                    id="footextArea"
                                    placeholder="Your Message"
                                    className="h-32 sm:h-40 md:h-48 lg:56 xl:h-64 w-full text-[14px] sm:text-[16px] md:text-[18px] lg:text-lg xl:text-lg rounded-sm sm:rounded-sm md:rounded-md lg:rounded-lg xl:rounded-lg pl-[4px] sm:pl-2 md:pl-3 lg:pl-4 xl:pl-4 mb-4 sm:mb-6 md:mb-8 lg:10 xl:mb-10"
                                ></textarea>
                            <button className=" h-[2rem] sm:h-[2.5rem] md:h-[2.7rem] lg:h-[3.2rem] xl:h-[3.5rem] w-full sm:text-[18px] md:text-[20px] lg:text-lg xl:text-lg rounded-sm sm:rounded-sm md:rounded-md lg:rounded-lg xl:rounded-lg pl-4 border outline-none border-none font-bold bg-[#FFB800]">SUBMIT</button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact



