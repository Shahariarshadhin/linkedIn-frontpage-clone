import React from 'react';
import './NewsFeed.css'

import { HiOutlinePhotograph } from "react-icons/hi";
import { BsYoutube } from "react-icons/bs";
import { BsCalendarDate, BsArrowRight } from "react-icons/bs";
import { RiArticleLine, RiSendPlaneFill } from "react-icons/ri";

import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots, FaShare } from "react-icons/fa";

import hiring from '../../Assests/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png'
import me from '../../Assests/me.jpg'
import daraz from '../../Assests/daraz.png'




const NewsFeed = () => {



    return (


        <div className="grid grid-cols-1 lg:grid-cols-3 lg:h-[700px] bg-slate-100">

            <div className=' mt-4 lg:mx-[350px]'>
                <div className="card lg:w-52 bg-base-100 shadow-xl">
                    <div className=" ">
                        <div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                        <div className='px-20' >
                            <img className="w-14 mt-[-20px] rounded-full" src={me} alt='' />
                        </div>
                        <h2 className="font-bold">Shahariar Hasan</h2>
                        <p className='text-[11px]'>Computer Science Engineer | Front-End Web Developer</p>
                        <div className="divider"></div>
                        <p className='text-[11px] text-left ml-2'>Connections</p>
                        <p className='text-[11px] text-left ml-2'>Grow your Network</p>
                        <div className="divider"></div>
                        <p className='text-[10px] text-left ml-2'>Access exclusive tools & insights</p>
                        <p className='text-[11px] text-left ml-2 font-semibold underline underline-offset-1'>Get Hired Faster, Try Preminum <br></br>Free</p>
                        <div className="divider"></div>
                        <p className='text-[11px] text-left ml-2 font-bold mb-4'>My Items</p>
                    </div>


                </div><div className="card lg:w-52 bg-base-100 shadow-xl mt-2">
                    <div className=" p-2">

                        <p className='text-[11px] text-left ml-2 mb-2 text-blue-600 font-semibold'>Group</p>
                        <p className='text-[11px] text-left ml-2 mb-2 text-blue-600 font-semibold'>Events +</p>
                        <p className='text-[11px] text-left ml-2 text-blue-600 font-semibold'>Followed Hashtag</p>
                        <div className="divider"></div>
                        <p className='text-[11px] text-left text-center ml-2 font-bold mb-2'>Discover More</p>
                    </div>


                </div>
            </div>


            {/*--------------------------- middle section--------------- */}


            <div className=' mt-4 lg:mx-16'>
                <div className="card lg:w-[430px] h-28 bg-base-100 border-2">
                    <div className="p-3">
                        <div class="flex items-center mb-2">
                            <img className="w-10  rounded-full mr-2" src={me} alt='' />
                            <div>

                                <input type="text" placeholder="Start a post" className="input bg-gray-300 rounded-full h-[35px] w-[500px] max-w-xs" />


                            </div>
                        </div>

                        <div className='grid grid-cols-4'>
                            <div className="flex items-center p-2">
                                <HiOutlinePhotograph></HiOutlinePhotograph>
                                <div>
                                    <button className='post-btn text-sm px-2'>Photo</button>
                                </div>
                            </div>

                            <div className="flex items-center ">
                                <BsYoutube></BsYoutube>
                                <div>
                                    <button className='post-btn text-sm  px-1'>Video</button>
                                </div>
                            </div>

                            <div className="flex items-center ">
                                <BsCalendarDate></BsCalendarDate>
                                <div>
                                    <button className='post-btn text-sm px-1'>Event</button>
                                </div>
                            </div>

                            <div className="flex items-center ">
                                <RiArticleLine></RiArticleLine>
                                <div>
                                    <button className='post-btn text-sm px-1'>Write article</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="divider w-96"></div>


                {/*--------------------------- middle section 2nd part--------------- */}

                <div className="card lg:w-[430px]  bg-base-100 border-2">
                    <div className="p-3">
                        <div class="flex items-center mb-2">
                            <img className="w-11  rounded-full mr-2" src={daraz} alt='' />
                            <div>

                                <p className='text-[13px] text-left ml-2 font-bold'>Daraz</p>
                                <p className='text-[11px] text-left ml-2 '>510,700 followers</p>
                                <p className='text-[11px] text-left ml-2 '>6d . Edited</p>



                            </div>
                            <button className="text-blue-600 font-bold  btn-xs  text-[14px] ml-[180px]">+ Follow</button>

                        </div>


                        <div className='text-[11px] text-left ml-2 '>
                            <p>We are thrilled to share that Daraz has reached 500,000 followers on LinkedIn!

                                This significant milestone was no easy feat, with many teams making efforts to establish a digital community to share big wins and key happenings at Daraz. We want to extend gratitude to everyone who has engaged and interacted with us; this wouldn't have been possible without YOU!

                                The journey doesn't stop here. Here is to celebrating bigger wins in the future!
                            </p>
                        </div>
                        <div className="divider lg:w-96"></div>

                        <div className='grid grid-cols-4'>
                            <div className="flex items-center p-2">
                                <AiOutlineLike></AiOutlineLike>
                                <div>
                                    <button className='post-btn text-sm px-2'>Like</button>
                                </div>
                            </div>

                            <div className="flex items-center ">
                                <FaRegCommentDots></FaRegCommentDots>
                                <div>
                                    <button className='post-btn text-sm  px-1'>Comment</button>
                                </div>
                            </div>

                            <div className="flex items-center ">
                                <FaShare></FaShare>
                                <div>
                                    <button className='post-btn text-sm px-1'>Share</button>
                                </div>
                            </div>

                            <div className="flex items-center ">
                                <RiSendPlaneFill></RiSendPlaneFill>
                                <div>
                                    <button className='post-btn text-sm px-1'>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >


            {/*--------------------------- right section--------------- */}


            <div>
                <div div className="card lg:w-64 lg:h-[310px] bg-base-100 border-2  p-3 mt-4 " >
                    <h3 className="text-[15px] font-bold text-left mb-4">Add to your feed</h3>
                    <div className="">

                        <div class="flex items-center mb-2">
                            <img className="w-11 mt-[-20px] rounded-full mr-2" src="https://placeimg.com/80/80/people" alt='' />
                            <div>
                                <p className='text-[13px] text-left ml-2 font-bold'>Andrew Alfred</p>
                                <p className='text-[11px] text-left ml-2 '>Technical advisor</p>

                                <button className="btn btn-outline btn-xs rounded-full ">+ Follow</button>
                            </div>
                        </div>
                        <div class="flex items-center mb-2">
                            <img className="w-11 mt-[-20px] rounded-full mr-2" src="https://placeimg.com/80/80/people" alt='' />
                            <div>
                                <p className='text-[13px] text-left ml-2 font-bold'>Hasanur Rahman</p>
                                <p className='text-[11px] text-left ml-2 '>Technical advisor</p>

                                <button className="btn btn-outline btn-xs rounded-full ">+ Follow</button>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <img className="w-11 mt-[-20px] rounded-full mr-2" src="https://placeimg.com/80/80/people" alt='' />
                            <div>
                                <p className='text-[13px] text-left ml-2 font-bold'>Amirul islam</p>
                                <p className='text-[11px] text-left ml-2 '>Technical advisor</p>

                                <button className="btn btn-outline btn-xs rounded-full ">+ Follow</button>
                            </div>
                        </div>

                        <div className="flex items-center mt-4">

                            <div>
                                <button className='post-btn text-sm px-1 mb-2'>View all recommendations</button>
                            </div>
                            <div>
                                <BsArrowRight></BsArrowRight>
                            </div>
                        </div>

                    </div>

                </div>

                <div div className="card lg:w-64  bg-base-100 border-2  p-3 mt-2 " >

                    <div className="">

                        <img className="" src={hiring} alt='' />
                    </div>

                </div>
            </div>



        </div >
    );
};

export default NewsFeed;