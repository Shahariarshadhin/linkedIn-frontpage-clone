import React from "react";
import "./Navbar.css";
import { IoHomeSharp, IoPeopleSharp, IoBagRemove, IoNotificationsSharp } from "react-icons/io5";
import { FaRegCommentDots } from "react-icons/fa";


import me from "../../Assests/me.jpg";
import linkedin from "../../Assests/174857.png"
const Navar = () => {
    return (
        <div >
            <div class="navbar h-5 bg-base-100">
                <div class="flex-1 mx-36">
                    <img className="linkedin" src={linkedin} alt="logo" />
                    <div class="form-control">
                        <svg className="text-base-content pointer-events-none absolute z-1 my-2 ml-4 mb-2 stroke-current opacity-60 m-4  " width="20" height="26" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>


                        <div>  <input type="search" name="search" placeholder=" Search " className="input  w-72 h-9 fill search-area ml-4" /></div>

                    </div>
                </div>

                <div class="navbar-center  lg:flex">
                    <ul class="menu menu-horizontal p-0">

                        <div className="nav-set">
                            <div className="home-icon">
                                <a href="# " className="nav-icon nav-icons">
                                    <IoHomeSharp></IoHomeSharp>
                                    <li className="nav-font">Home</li>
                                </a>
                            </div>
                        </div>

                        <a href="# " className="nav-icon nav-icons">
                            <IoPeopleSharp></IoPeopleSharp>
                            <li className="nav-font img-font">My Network</li>
                        </a>

                        <a href="# " className="nav-icon nav-icons">
                            <IoBagRemove></IoBagRemove>
                            <li className="nav-font">Jobs</li>
                        </a>

                        <a href="# " className="nav-icon nav-icons">
                            <FaRegCommentDots></FaRegCommentDots>
                            <li className="nav-font">Messaging</li>
                        </a>

                        <a href="# " className="nav-icon nav-icons">
                            <IoNotificationsSharp></IoNotificationsSharp>
                            <li className="nav-font ">Notifications</li>
                        </a>
                    </ul>
                </div>

                <div class="flex-none ">
                    <div>
                        {/* <div class="btn btn-ghost btn-circle avatar mr-16">
        <div class="w-8 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
       
      </div> */}
                        <div className="profile ">
                            <img className="me-img" src={me} alt="" />
                            <div class="dropdown mr-12">
                                <button class="me mr-12 nav-icons">Me▾</button>

                                <div
                                    tabindex="0"
                                    class="dropdown-content card card-compact w-64 p-2 h-72 mr-16 shadow bg-base-100 text-black"
                                >
                                    <div class="card-body">
                                        <h3 class="card-title">Drop Down</h3>
                                        <p>you can use any element as a dropdown.</p>
                                        <p>Every thing is okk.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>





            </div>
        </div>
    );
};

export default Navar;

























































// import React from 'react';


// import { Link } from 'react-router-dom';




// const Navbar = () => {





//     const menubar = <>

//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/inventory">My Network</Link></li>
//         <li><Link to="/review">Jobs</Link></li>
//         <li><Link to="/contact">Messaging</Link></li>
//         <li><Link to="/blogs">Notification</Link></li>
//         <li><Link to="/blogs">Me</Link></li>


//     </>

//     return (
//         <div className="navbar bg-base-100">
//             < div class="navbar-start" >
//                 <div class="dropdown" >
//                     <label tabindex="0" class="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                     </label>
//                     <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
//                         {menubar}
//                     </ul>
//                     <div className="form-control">
//                         <input type="text" placeholder="Search" className="input input-bordered" />
//                     </div>

//                     <div className="dropdown dropdown-end">
//                         <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//                             <div className="w-10 rounded-full">
//                                 <img src="https://placeimg.com/80/80/people" />
//                             </div>
//                         </label>
//                         <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
//                             <li>
//                                 <a className="justify-between">
//                                     Profile
//                                     <span className="badge">New</span>
//                                 </a>
//                             </li>
//                             <li><a>Settings</a></li>
//                             <li><a>Logout</a></li>
//                         </ul>
//                     </div>
//                 </div >

//             </div >
//             <div class="navbar-center hidden lg:flex" >
//                 <ul class="menu menu-horizontal p-0" >
//                     {menubar}
//                 </ul >
//             </div >
//             <div className='navbar-end'>
//                 <label tabindex="1" for="dashboards-sidebar" class="btn btn-ghost lg:hidden">
//                     <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                 </label>

//             </div>
//         </div >
//     );
// };

// export default Navbar;
