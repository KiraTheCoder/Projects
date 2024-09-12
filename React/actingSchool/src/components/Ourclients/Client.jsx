import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TestimonialCard({ imgSrc, name, title, testimonial }) {
    return (
        <div className='w-full flex justify-center items-center'>
            <div className=" w-[12rem] sm:w-[12rem] md:w-[14rem] lg:w-[16rem] xl:w-[17rem] mt-[2rem] sm:mt-[2rem] md:mt-[2.2rem] lg:mt-[2.3rem] xl:mt-[2.3rem] py-1 sm:py-2 md:py-3 lg:py-4 xl:py-4 px-2 sm:px-1 md:px-3 lg:px-5 xl:px-6 flex flex-col items-center bg-slate-300 rounded-md relative">
                <div className="w-[4rem] sm:w-[4rem] md:w-[4.3rem] lg:w-[4.8rem] xl:w-[5rem] h-[4rem] sm:h-[4rem] md:h-[4.3rem] lg:h-[4.8rem] xl:h-[5rem] border-2 border-blue-400 rounded-full absolute -top-8 hover:scale-110 transition-transform duration-1000">
                    <img className="w-full h-full  rounded-full" src={imgSrc} alt={`${name}`} />
                </div>
                <div className="mt-7 sm:mt-8 md:mt-9 lg:mt-10 xl:mt-10 text-center">
                    <h6 className="text-black capitalize text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] mt-2">{name}</h6>
                    <p className="text-gray-500 capitalize text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[14px] mt-[2px] md:mt-[2px] lg:mt-[3px] xl:mt-1">{title}</p>
                </div>
                <div className="text-center my-2">
                    <p className="capitalize text-[10px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[14px] text-black">{testimonial}</p>
                </div>
                <div className="w-14 sm:w-16 md:w-18 lg:w-20 xl:w-24 flex justify-between">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className=" text-sm sm:text-sm md:text-lg lg:text-lg xl:text-lg text-violet-600">*</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Client() {
    const testimonials = [
        {
            imgSrc: "img/Ellipse 4.png",
            name: "Robert Lopez",
            title: "Broadway Dancer",
            testimonial: "This was one of the best learning experiences I've ever had. The teachers were friends and gave me great advice.",
        },
        {
            imgSrc: "img/Ellipse 4-1.png",
            name: "Allen King",
            title: "Choreographer",
            testimonial: "I've learned a variety of new things that helped me a lot in my career as a choreographer.",
        },
        {
            imgSrc: "img/Ellipse 4-2.png",
            name: "Alexandra Laurent",
            title: "Dance Instructor",
            testimonial: "Great learning platform for those who are starting out as a dancer.",
        },
        {
            imgSrc: "img/Ellipse 4.png",
            name: "Robert Lopez",
            title: "Broadway Dancer",
            testimonial: "This was one of the best learning experiences I've ever had. The teachers were friends and gave me great advice.",
        },
        {
            imgSrc: "img/Ellipse 4-1.png",
            name: "Allen King",
            title: "Choreographer",
            testimonial: "I've learned a variety of new things that helped me a lot in my career as a choreographer.",
        },
        {
            imgSrc: "img/Ellipse 4-2.png",
            name: "Alexandra Laurent",
            title: "Dance Instructor",
            testimonial: "Great learning platform for those who are starting out as a dancer.",
        }
    ];

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true,
                    centerMode: true,
                    centerPadding: "0",
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "0",
                }
            }
        ]
    };

    return (
        <div className="w-[75vw] m-auto bg-transparent mt-[3rem]">
            <Slider {...settings}>
                {testimonials.map((t, index) => (
                    <div className="flex justify-center" key={index}>
                        <TestimonialCard
                            imgSrc={t.imgSrc}
                            name={t.name}
                            title={t.title}
                            testimonial={t.testimonial}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Client;






// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// function TestimonialCard({ imgSrc, name, title, testimonial }) {
//     return (
//         // <div className="w-[17rem] mt-[4rem] py-4 px-6 flex flex-col items-center bg-slate-300 rounded-md shadow-2xl shadow-[#713659] relative">
//         <div className="w-[17rem] mt-[2.3rem] py-4 px-6 flex flex-col items-center bg-slate-300 rounded-md  relative">
//             <div className="w-[5rem] h-[5rem]  border-2 border-blue-400 rounded-full absolute -top-8 hover:scale-110 transition-transform duration-1000">
//             <img className="w-full h-full  rounded-full" src={imgSrc} alt={`${name}`} />
//             </div>
//             <div className="mt-10 text-center">
//                 <h6 className="text-black capitalize text-[16px] mt-2">{name}</h6>
//                 <p className="text-gray-500 capitalize text-[14px] mt-1">{title}</p>
//             </div>
//             <div className="text-center my-2">
//                 <p className="capitalize text-[14px] text-black">{testimonial}</p>
//             </div>
//             <div className="w-24 flex justify-between">
//                 {[...Array(5)].map((_, i) => (
//                     <span key={i} className="text-lg text-violet-600">*</span>
//                 ))}
//             </div>
//         </div>
//     );
// }

// function Client() {
//     const testimonials = [
//         {
//             imgSrc: "img/Ellipse 4.png",
//             name: "Robert Lopez",
//             title: "Broadway Dancer",
//             testimonial: "This was one of the best learning experiences I've ever had. The teachers were friends and gave me great advice.",
//         },
//         {
//             imgSrc: "img/Ellipse 4.png",
//             name: "Robert Lopez",
//             title: "Broadway Dancer",
//             testimonial: "This was one of the best learning experiences I've ever had. The teachers were friends and gave me great advice.",
//         },
//         {
//             imgSrc: "img/Ellipse 4.png",
//             name: "Robert Lopez",
//             title: "Broadway Dancer",
//             testimonial: "This was one of the best learning experiences I've ever had. The teachers were friends and gave me great advice.",
//         },
//         {
//             imgSrc: "img/Ellipse 4.png",
//             name: "Robert Lopez",
//             title: "Broadway Dancer",
//             testimonial: "This was one of the best learning experiences I've ever had. The teachers were friends and gave me great advice.",
//         },
//         {
//             imgSrc: "img/Ellipse 4-1.png",
//             name: "Allen King",
//             title: "Choreographer",
//             testimonial: "I've learned a variety of new things that helped me a lot in my career as a choreographer.",
//         },
//         {
//             imgSrc: "img/Ellipse 4-2.png",
//             name: "Alexandra Laurent",
//             title: "Dance Instructor",
//             testimonial: "Great learning platform for those who are starting out as a dancer.",
//         }
//     ];

//     const settings = {
//         // dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         centerMode: true,
//         centerPadding: "-25",
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true,
//                     centerMode: true,
//                     centerPadding: "0",
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     centerMode: true,
//                     centerPadding: "0",
//                 }
//             }
//         ]
//     };

//     return (
//         <div className="w-[75vw] m-auto bg-transparent mt-[3rem]">
//             <Slider {...settings}>
//                 {testimonials.map((t, index) => (
//                     <div className="flex justify-center" key={index}>
//                         <TestimonialCard 
//                             imgSrc={t.imgSrc}
//                             name={t.name}
//                             title={t.title}
//                             testimonial={t.testimonial}
//                         />
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// }

// export default Client;