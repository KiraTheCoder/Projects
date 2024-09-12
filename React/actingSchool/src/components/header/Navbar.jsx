



import { NavLink } from "react-router-dom";
// import { useState } from "react";

function Navbar() {
    // const [color, setColor] = useState('transparent');

    // function myfun() {
    //     if (color === "transparent") {
    //         setColor("black");
    //     } else {
    //         setColor("transparent");
    //     }
    // }

    return (
        <>
            {/* <div className="absolute z-10 h-13 sm:h-16 md:h-18 lg:h-22 xl:h-24 border-b-2 border-b-white flex items-center" style={{ background: `${color}` }}> */}
            <div className="absolute z-10 h-13 sm:h-16 md:h-18 lg:h-22 xl:h-24 border-b-2 border-b-white flex items-center">
                <nav className="h-[3rem] w-[99vw] px-4 sm:px-12 md:px-19 lg:px-22 xl:px-[5rem] text-white flex justify-between items-center ">
                    <div className="logo w-[20%] sm:w-[25%] md:w-[30%] lg:w-1/3 text-[0.6rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.3rem] xl:text-[1.5rem] uppercase font-bold tracking-widest">
                        Acting School
                         {/* <span onClick={myfun}>OOO</span> */}
                    </div>
                    <ul className="flex gap-2 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-5 w-[60%] sm:w-[60%] md:w-[50%] lg:w-[50%] xl:w-1/3">
                        <li className="list-none font-semibold">
                            <NavLink to={'/'} className={({ isActive }) => `text-[9px] sm:text-[13px] md:text-[15px] lg:text-[18px] xl:text-[20px] uppercase relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] lg:after:h-[2px] after:w-1/2 after:bg-white ${isActive ? 'after:block' : 'after:hidden'}`}>
                                Home
                            </NavLink>
                        </li>
                        <li className="list-none font-semibold">
                            <NavLink to={'/about'} className={({ isActive }) => `text-[9px] sm:text-[13px] md:text-[15px] lg:text-[18px] xl:text-[20px] uppercase relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] lg:after:h-[2px] after:w-1/2 after:bg-white ${isActive ? 'after:block' : 'after:hidden'}`}>
                                About
                            </NavLink>
                        </li>
                    
                        <li className="list-none font-semibold">
                            <NavLink to={'/ourclients'} className={({ isActive }) => `text-[9px] sm:text-[13px] md:text-[15px] lg:text-[18px] xl:text-[20px] uppercase relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] lg:after:h-[2px] after:w-1/2 after:bg-white ${isActive ? 'after:block' : 'after:hidden'}`}>
                                Clients
                            </NavLink>
                        </li>
                        <li className="list-none font-semibold">
                            <NavLink to={'/contact'} className={({ isActive }) => `text-[9px] sm:text-[13px] md:text-[15px] lg:text-[18px] xl:text-[20px] uppercase relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] lg:after:h-[2px] after:w-1/2 after:bg-white ${isActive ? 'after:block' : 'after:hidden'}`}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            
        </>
    );
}

export default Navbar;












// import { NavLink } from "react-router-dom"
// import { useState } from "react"

// function Navbar() {

//     const [color, setColor] =useState('transparent')

// function myfun(){
//     if (color==="transparent") {
//        setColor("black") 
//     }
//     else{
//         setColor("transparent")
//     }
// }
//     return (
//         <>
//             <div className=" absolute z-10 h-13 sm:h-16 md:h-18 lg:h-22 xl:h-24 border-b-2 border-b-white flex items-center" style={{background:`${color}`}}>
//                 <nav className="h-[3rem] w-[100vw] px-4 sm:px-12 md:px-19 lg:px-22 xl:px-[5rem] text-white flex justify-between items-center ">
//                     <div className="logo  w-[20%] sm:w-[25%] md:w-[30%] lg:w-1/3  text-[0.6rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.3rem] xl:text-[1.5rem] uppercase font-bold tracking-widest">acting school <span onClick={myfun()}>OOO</span></div>
//                     <div className="flex gap-2 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-5 w-[60%] sm:w-[60%] md:w-[50%] lg:w-[50%] xl:w-1/3 ">
//                         <li className="list-none font-semibold " ><NavLink to={'/'} className={({ isActive }) => `text-[9px] sm:text-[13px] md:text-[15px] lg:text-[18px] xl:text-[20px] uppercase relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] lg:after:h-[2px] after:w-1/2 after:bg-white ${isActive ? 'after:block' : 'after:hidden'}`}>Home</NavLink></li>
//                         <li className="list-none font-semibold " ><NavLink to={'/about'} className={({ isActive }) => `text-[9px] sm:text-[13px] md:text-[15px] lg:text-[18px] xl:text-[20px] uppercase relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] lg:after:h-[2px] after:w-1/2 after:bg-white ${isActive ? 'after:block' : 'after:hidden'}`}>About</NavLink></li>
//                         {/* <li className="list-none font-semibold " ><NavLink to={'/blog'} className={({ isActive }) => `text-[9px] sm:text-[13px]  md:text-[15px] lg:text-[18px] xl:text-[20px] uppercase relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] lg:after:h-[2px] after:w-1/2 after:bg-white ${isActive ? 'after:block' : 'after:hidden'}`}>Blog</NavLink></li> */}
//                         <li className="list-none font-semibold " ><NavLink to={'/ourclients'} className={({ isActive }) => `text-[9px] sm:text-[13px]  md:text-[15px] lg:text-[18px] xl:text-[20px] uppercase relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] lg:after:h-[2px] after:w-1/2 after:bg-white ${isActive ? 'after:block' : 'after:hidden'}`}>clients</NavLink></li>
//                         <li className="list-none font-semibold " ><NavLink to={'/contact'} className={({ isActive }) => `text-[9px] sm:text-[13px]  md:text-[15px] lg:text-[18px] xl:text-[20px] uppercase relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.8px] sm:after:h-[1px] md:after:h-[1px] lg:after:h-[2px] after:w-1/2 after:bg-white ${isActive ? 'after:block' : 'after:hidden'}`}>contact</NavLink></li>
//                     </div>
//                 </nav>
//             </div>
//         </>
//     )
// }
// export default Navbar