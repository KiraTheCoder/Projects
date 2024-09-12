
function Home() {
    return (
        <>
            {/* <section className="w-full h-auto absolute top-0  m-auto" style={{ background: 'linear-gradient(to top, #e8760a, #ca6508)'}}> */}
            <section className="w-full h-auto  top-0 font-DM m-auto" >
                 <div className="w-[86vw] m-auto  border-r-2 border-white">
                    <div className="pt-[4rem] sm:pt-[6rem] md:pt-[8rem] flex flex-col-reverse md:flex-row  h-full justify-between">
                        <div className="w-full md:w-1/2 lg:w-full xl:w-1/2 mb-8 md:mb-0">
                            <div className="bg-white bg-opacity-10 w-full md:w-3/4 lg:w-[85%] xl:w-3/4 h-20 sm:28 md:h-32 lg:h-28 text-white sm:text-2xl md:text-3xl lg:text-2xl flex items-end p-4 sm:p-4 md:p-6">
                                <p>Parallele Realitaten</p>
                            </div>
                            <h2 className="capitalize text-[2.5rem] sm:text-[3.4rem] md:text-[4rem] lg:text-[3rem] xl:text-[4.4rem] flex pb-2 text-white tracking-wider [text-shadow:4px_4px_10px_rgba(0,0,0,0.5)] ">Acting theatre</h2>
                            <div className="bg-white bg-opacity-10 w-full md:w-[86vw] lg:w-[85%] xl:w-3/4 text-white p-4">
                                <h6 className="capitalize text-[22px] mb-2">Your acting school</h6>
                                <p className="text-sm">1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <button className="mt-4 md:mt-6 my-2 h-6 sm:h-7 md:h-8 w-24 sm:w-28 md:w-32 text-[16px] sm:text-[20px] md:text-[22px] uppercase border-2 border-white">register</button>
                            </div>
                            <div className=' w-full md:w-[70vw] lg:w-[85%] xl:3/4 h-16 mt-6 flex sm:gap-6 md:gap-8 text-white items-center justify-evenly sm:justify-start md:justify-start'>
                                <div className='uppercase font-bold tracking-wider md:tracking-widest'>follow us</div>
                                <div className='w-3 sm:w-10 md:w-16 lg:w-9 xl:w-16 h-[3px] bg-white'></div>
                                <div className='text-green-300 flex gap-4 sm:gap-6 md:gap-10 lg:gap-4 xl:gap-10'>
                                    <img className="w-4 sm:w-5 md:w-5 " src="img/Group 1261153027.png" alt="" />
                                    <img className="w-4 sm:w-5 md:w-5 " src="img/Group 1261153037.png" alt="" />
                                    <img className="w-4 sm:w-5 md:w-5 " src="img/Group 1261153036.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-auto lg:w-full xl:w-1/2  lg:mt-auto h-full md:h-[20.32rem] lg:h-full flex justify-center items-end  mt-[4px] ">
                            <img src="img/Photo 4.png" className="h-full w-[90%]" alt="Acting Theatre" />
                        </div>
                    </div>
                </div>
                <div className="h-4 w-full bg-white"></div>
            </section>
        </>
    )
}
export default Home
