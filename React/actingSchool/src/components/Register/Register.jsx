function Register(params) {
  return (
    <>
      <section className="h-auto w-full py-10 sm:py-12 md:py-16 lg:py-14 xl:py-26">
        <div className="w-[60vw] h-auto m-auto ">
          <div className="h-[0.2rem] sm:h-[0.3rem] md:h-[0.4rem] lg:h-[0.7rem] border bg-[#ffb800] rounded-2xl my-[7px] sm:my-[12px] md:my-1 lg:my-3 xl:my-3"></div>
          <div>
            <h1 className="uppercase font-bold text-[1.3rem] sm:text-[2rem] md:text-[3rem] lg:text-[3.6rem] xl:text-[5.5rem] text-white text-center">registration for</h1>
            <h1 className="uppercase font-bold text-[1.3rem] sm:text-[2rem] md:text-[3rem] lg:text-[3.6rem] xl:text-[5.5rem] text-white text-center tracking-wider">classes</h1>
          </div>
          <div className="w-full flex justify-center my-3 md:my-4 lg:my-8 pb-1 sm:pb-3 md:pb-4">
            <button className="uppercase border-2 border-white rounded-[1.3rem] bg-[#ffb800] text-white text-[0.5rem] sm:text-[0.5rem] md:text-[0.7rem] lg:text-[1.1rem] font-semibold sm:py-[2px] md:py-[4px] lg:py-[8px] px-1 sm:px-2 md:px-4 lg:px-8 tracking-wide ">register here</button>
          </div>
          <div className="h-[0.2rem] sm:h-[0.3rem] md:h-[0.4rem] lg:h-[0.7rem] border bg-[#ffb800] rounded-2xl my-[7px] sm:my-[12px] md:my-1 lg:my-3 xl:my-3"></div>
        </div>
      </section>
    </>
  )
}
export default Register;