import Register from "../Register/Register"
import Client from "./Client"
function Ourclients() {
    return (
        <>
            <section className="h-auto ">
                {/* <section className="h-auto bg-pink-500"> */}
                <div className="w-[90%] m-auto pt-[4.5rem] sm:pt-[5.3rem] md:pt-[6.5rem] lg:pt-[8rem] xl:pt-[9rem]">
                    <div className="text-center flex flex-col">
                        <div><h2 className="uppercase text-white text-sm sm:text-lg md:text-[1.5rem] lg:text-[2.2rem] xl:text-[2.5rem] font-semibold tracking-widest">testimonials</h2></div>
                        <div className="flex w-auto m-auto gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-4 items-center my-3">
                            <div className="h-[1px] w-8 sm:w-12 md:w-16 lg:w-20 xl:w-24 bg-gray-300" ></div>
                            <div className="capitalize text-gray-300 text-[12px] sm:text-[13px] md:text-[15px] lg:text-[17px] xl:text-sm">what our clients have to say</div>
                            <div className="h-[1px] w-8 sm:w-12 md:w-16 lg:w-20 xl:w-24 bg-gray-300" ></div>
                        </div>
                    </div>
                   <div className="my-[-1.7rem] sm:my-[-1rem] md:my-[-0.8rem] lg:my-[-0.3rem] xl:mt-0"> <Client /></div>
                    <div className="mt-[1rem] sm:mt-[1.6rem] md:mt-[2rem] lg:mt-[2.5rem] xl:mt-[3rem]">
                        <Register />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ourclients