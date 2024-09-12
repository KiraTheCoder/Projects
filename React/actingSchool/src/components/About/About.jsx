import React from "react";
// import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
function About() {
  return (
    <>
      <section className="h-auto w-[100vw]">
        <div className="h-auto w-full sm:pt-[1rem] md:pt-0 lg:pt-2 xl:pt-[4rem] ">
          <div className="h-auto w-full flex justify-evenly flex-wrap-reverse pt-[5rem]  sm:pt-[5.5rem] md:pt-[6rem] lg:pt-[5rem] xl:pt-4 pb-6  lg:pb-12 xl:pb-16 ">

            <div className=" px-2 py-1 sm:py-4 lg:pt-4 xl:py-0 h-auto sm:h-[14rem] md:h-[18rem] lg:h-auto xl:h-[30rem] lg:w-[25rem] xl:w-[35rem]  mt-[1rem] xl:mt-[3rem] lg:flex flex-col ">
              <h1 className="text-white text-[22px] sm:text-[28px] md:text-[32px] lg:text-[32px] xl:text-[45px] xl:pt-7 tracking-[2px] sm:tracking-[4px] md:tracking-[5px] lg:tracking-[5px] xl:tracking-[8px] font-semibold text-center lg:text-start xl:text-start">EVERYTHING ABOUT US</h1>
              <p className="text-white font-sans font-semibold text-[14px] sm:text-[18px] md:text-[20px] lg:text-[18px] xl:text-[25px] pt-3 sm:pt-4 md:pt-6 lg:px-4 xl:pr-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit,sed do eiusmid tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercition ullamco laboris nisi ut aliquip ex ea commondo consequat.
              </p>
              <p className="text-white font-sans font-semibold text-[14px] sm:text-[18px] md:text-[20px] lg:text-[18px] xl:text-[25px] pt-3 sm:pt-4 md:pt-6 lg:pt-2 xl:pr-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit,sed do eiusmid tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className=" h-auto sm:h-auto md:h-auto lg:h-auto xl:h-[30rem] w-screen sm:w-2/3 md:w-2/3 lg:w-[22rem] xl:w-[30rem] lg:mt-[1rem] xl:mt-[5.5rem] flex justify-center">
              <img className="h-[95%] xl:h-[25rem] w-[95%] xl:w-[26rem]" src="img/about.png" alt="" />
            </div>
          </div>

          {/* ..............next...section......... */}

          <div className="h-auto py-2">
            <h1 className="text-white text-[22px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[45px] text-center">OUR COURSES</h1>
            <p className="text-white text-[14px] sm:text-[18px]  md:text-[20px] lg:text-[25px] xl:text-2xl text-center pt-3">1500s, when an unknown printer took a galley of type and</p>

            <div className="h-auto flex flex-wrap gap-6 w-[85vw] sm:w-[75vw]  m-auto mt-0 lg:mt-[2rem] xl:mt-[2rem] mb-[4rem] sm:mb-[5rem] md:mb-[5rem] lg:mb-[7rem] xl:mb-[9rem]">
              <div className="h-auto w-[16rem] sm:w-[17rem] pb-2 mt-8 bg-white rounded-md m-auto shadow-2xl shadow-gray-900">
                <img className="h-[40%] sm:h-[8rem] w-[90%] sm:w-[15rem] m-auto mt-2 sm:mt-4" src="img/21552.png" alt="" />
                <h1 className="text-[16px] sm:text-[20px] pl-4 pt-2">Two Month Acting Workshop</h1>
                <div className="flex pl-4 mt-2 gap-1 sm:gap-2">
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                </div>

                <p className="text-[12px] px-3 py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit,sed do eiusmid tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercition ullamco laboris nisi ut aliquip ex ea commondo consequat.
                </p>

                <button className="h-[30px] w-[9rem] bg-[#170075] text-[14px] ml-3 rounded text-white">ENROLL NOW</button>
              </div>

              <div className="h-auto w-[16rem] sm:w-[17rem] pb-2 mt-8 border bg-white rounded-md m-auto shadow-2xl shadow-gray-900">
                <img className="h-[40%] sm:h-[8rem] w-[90%] sm:w-[15rem] m-auto mt-2 sm:mt-4" src="img/21553.png" alt="" />
                <h1 className="text-[16px] sm:text-[20px] pl-4 pt-2">Two Month Acting Workshop</h1>
                <div className="flex pl-4 mt-2 gap-1 sm:gap-2">
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                </div>

                <p className="text-[12px] px-3 py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit,sed do eiusmid tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercition ullamco laboris nisi ut aliquip ex ea commondo consequat.
                </p>

                <button className="h-[30px] w-[9rem] bg-[#170075] text-[14px] ml-3 rounded text-white">ENROLL NOW</button>
              </div>

              <div className="h-auto w-[16rem] sm:w-[17rem] pb-2mt-8 border bg-white rounded-md m-auto shadow-2xl shadow-gray-900">
                <img className="h-[40%] sm:h-[8rem] w-[90%] sm:w-[15rem] m-auto mt-2 sm:mt-4" src="img/21554.png" alt="" />
                <h1 className="text-[16px] sm:text-[20px] pl-4 pt-2">Two Month Acting Workshop</h1>
                <div className="flex pl-4 mt-2 gap-1 sm:gap-2">
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] "/>
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] "/>
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] "/>
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] "/>
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] "/>
                </div>

                <p className="text-[12px] px-3 py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit,sed do eiusmid tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercition ullamco laboris nisi ut aliquip ex ea commondo consequat.
                </p>

                <button className="h-[30px] w-[9rem] bg-[#170075] text-[14px] ml-3 rounded text-white">ENROLL NOW</button>
              </div>

              <div className="h-auto w-[16rem] sm:w-[17rem] pb-2 mt-8 border bg-white rounded-md m-auto shadow-2xl shadow-gray-900">
                <img className="h-[40%] sm:h-[8rem] w-[90%] sm:w-[15rem] m-auto mt-2 sm:mt-4" src="img/21555.png" alt="" />
                <h1 className="text-[16px] sm:text-[20px] pl-4 pt-2">Two Month Acting Workshop</h1>
                <div className="flex pl-4 mt-2 gap-1 sm:gap-2">
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                </div>

                <p className="text-[12px] px-3 py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit,sed do eiusmid tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercition ullamco laboris nisi ut aliquip ex ea commondo consequat.
                </p>

                <button className="h-[30px] w-[9rem] bg-[#170075] text-[14px] ml-3 rounded text-white">ENROLL NOW</button>
              </div>

              <div className="h-auto w-[16rem] sm:w-[17rem] pb-2 mt-8 border bg-white rounded-md m-auto shadow-2xl shadow-gray-900">
                <img className="h-[40%] sm:h-[8rem] w-[90%] sm:w-[15rem] m-auto mt-2 sm:mt-4" src="img/21556.png" alt="" />
                <h1 className="text-[16px] sm:text-[20px] pl-4 pt-2">Two Month Acting Workshop</h1>
                <div className="flex pl-4 mt-2 gap-1 sm:gap-2">
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                </div>

                <p className="text-[12px] px-3 py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit,sed do eiusmid tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercition ullamco laboris nisi ut aliquip ex ea commondo consequat.
                </p>

                <button className="h-[30px] w-[9rem] bg-[#170075] text-[14px] ml-3 rounded text-white">ENROLL NOW</button>
              </div>

              <div className="h-auto w-[16rem] sm:w-[17rem] pb-2 mt-8 border bg-white rounded-md m-auto shadow-2xl shadow-gray-900">
                <img className="h-[40%] sm:h-[8rem] w-[90%] sm:w-[15rem] m-auto mt-2 sm:mt-4" src="img/21557.png" alt="" />
                <h1 className="text-[16px] sm:text-[20px] pl-4 pt-2">Two Month Acting Workshop</h1>
                <div className="flex pl-4 mt-2 gap-1 sm:gap-2">
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                </div>

                <p className="text-[12px] px-3 py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit,sed do eiusmid tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercition ullamco laboris nisi ut aliquip ex ea commondo consequat.
                </p>

                <button className="h-[30px] w-[9rem] bg-[#170075] text-[14px] ml-3 rounded text-white">ENROLL NOW</button>
              </div>


            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default About




