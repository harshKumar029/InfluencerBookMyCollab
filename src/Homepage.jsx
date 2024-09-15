import React from 'react'
import Heroimg from './Assets/Img/heroimg.png'
import tanmay from './Assets/Img/12.png'
import Kusha from './Assets/Img/11.png'
import Rohan from './Assets/Img/10.png'
import Bhubhan from './Assets/Img/8.png'
import SharanHegde from './Assets/Img/2.png'
import DollySingh from './Assets/Img/24.png'
import hellochar from './Assets/Img/5.png'
import kritikaKhurana from './Assets/Img/9.png'
import market from './Assets/Img/112.jpg'
import wave from './Assets/Img/wave.png'
import Creatercard from './components/Creatercard';
import Categories from './components/Categories'

import Spotify from './Assets/Logo/25.png'
import google from './Assets/Logo/26.png'
import Stripe from './Assets/Logo/27.png'
import Zoom from './Assets/Logo/29.png'
import Youtube from './Assets/Logo/28.png'
import Microsoft from './Assets/Logo/30.png'
import Grab from './Assets/Logo/31.png'

const Homepage = () => {
    const ogCreators = [
        {
            img: tanmay,
            alt: 'Tanmay Bhatt',
            type: 'Entertainment',
            name: 'Tanmay Bhatt',
            nameid: 'tanmaybhat',
            followers: '1.9M'
        },
        {
            img: Kusha,
            alt: 'Kusha Kapila',
            type: 'Entertainment',
            name: 'Kusha Kapila',
            nameid: 'kushakapila',
            followers: '3.7M'
        },
        {
            img: Rohan,
            alt: 'Rohan Joshi',
            type: 'Entertainment',
            name: 'Rohan Joshi',
            nameid: 'mojorojo',
            followers: '597K'
        },
        {
            img: Bhubhan,
            alt: 'Bhuvan Bam',
            type: 'Entertainment',
            name: 'Bhuvan Bam',
            nameid: 'bhuvan.bam22',
            followers: '19.4M'
        }
    ];

    const Spotlight = [
        {
            img: SharanHegde,
            alt: 'Sharan Hegde',
            type: 'Finance',
            name: 'Sharan Hegde',
            nameid: 'financewithsharan',
            followers: '2.6M'
        },
        {
            img: DollySingh,
            alt: 'Dolly Singh',
            type: 'Entertainment',
            name: 'Dolly Singh',
            nameid: 'dollysingh',
            followers: '1.6M'
        },
        {
            img: kritikaKhurana,
            alt: 'kritika Khurana',
            type: 'Entertainment',
            name: 'kritika Khurana',
            nameid: 'thatbohogirl',
            followers: '1.8M'
        },
        {
            img: Bhubhan,
            alt: 'Bhuvan Bam',
            type: 'Entertainment',
            name: 'Bhuvan Bam',
            nameid: 'bhuvan.bam22',
            followers: '19.4M'
        }
    ];
    const Categorie = [
        {
            title: 'The Foodies',
            bgColor: '#d0a435', // Background color for Foodies
        },
        {
            title: 'The Techies',
            bgColor: '#1db934', // Background color for Techies
        },
        {
            title: 'The Fashionistas',
            bgColor: '#2667e0', // Background color for Fashionistas
        },
        {
            title: 'The Podcasters',
            bgColor: '#ff0000', // Background color for Podcasters
        },
        {
            title: 'The Travellers',
            bgColor: '#7635e1', // Background color for Travellers
        }
    ];

    return (
        <>
            <div>
                <section className=" py-16">
                    <div className=' w-[90%] mx-auto'>
                        <div className="container mx-auto flex flex-col lg:flex-row justify-between">

                            {/* Left Section */}
                            <div className="lg:w-1/2 space-y-6 rounded-2xl bg-[#fafafa] p-6">
                                <img className=' w-12' src={wave} alt='wave' />

                                <h1 className="text-4xl font-bold bg-gradient-to-br from-[#a572b6] to-[#3d0f9e] bg-clip-text text-transparent">
                                    Simplifying Influencer <br /> Marketing For You!
                                </h1>


                                <h3 className="text-lg text-[#000]">
                                    Explore creators across YouTube, Instagram &<br /> Facebook to curate unique content for your brand.
                                </h3>

                                {/* Dropdown Options */}

                                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 items-center">
                                    <select className="bg-white py-2 rounded-lg text-[#000] w-full sm:w-52 h-11 border-2 border-gray-400 focus:border-[#7042d2] focus:outline-none">
                                        <option value="" disabled selected>Select Category</option>
                                        <option>Facebook</option>
                                        <option>Instagram</option>
                                        <option>Snapchat</option>
                                        <option>YouTube</option>
                                    </select>

                                    <select className="bg-white py-2 rounded-lg text-[#000] w-full sm:w-52 h-11 border-2 border-gray-400 focus:border-[#7042d2] focus:outline-none">
                                        <option value="" disabled selected>Select Category</option>
                                        <option>Option 2a</option>
                                        <option>Option 2b</option>
                                    </select>

                                    {/* Search Button */}
                                    <button className="bg-[#5526b6] text-white px-7 py-2 rounded-lg hover:bg-[#5c21d2] w-full sm:w-auto">
                                        Search
                                    </button>
                                </div>


                            </div>

                            {/* Right Section - Image */}
                            <div className="lg:w-1/2 mb-8 md:mb-0 "
                                style={{ textAlign: '-webkit-center' }}
                            >
                                <img
                                    src={Heroimg}
                                    alt="Hero Section"
                                    className="w-[70%] h-auto object-cover rounded-lg"
                                />
                            </div>
                        </div>

                    </div>
                </section>

                <section className='py-16 bg-[#fafafa]'>
                    <div className='w-[90%] mx-auto'>
                        {/* Header Section */}
                        <div className='flex flex-col md:flex-row items-center justify-between mb-16'>
                            <div className='space-y-3 text-center md:text-left'>
                                <h1 className="text-4xl font-bold bg-gradient-to-r from-[#cc95a2] from-0% to-[#3d0f9e] to-55%  bg-clip-text text-transparent">
                                    The OG Creators
                                </h1>
                                <h3 className='text-[#737373] text-lg md:text-xl font-semibold'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                </h3>
                            </div>
                            <button className="bg-[#ffffff] border border-[#484848] text-[#000] font-semibold px-6 py-2 rounded-3xl hover:bg-[#535353] mt-4 md:mt-0">
                                View all
                            </button>
                        </div>

                        {/* Card Slider Section */}
                        <div className='scrollable-div overflow-x-auto flex space-x-12'>
                            {ogCreators.map((creator, index) => (
                                <div key={index} className="flex-shrink-0 w-72">
                                    <Creatercard
                                        img={creator.img}
                                        alt={creator.alt}
                                        type={creator.type}
                                        name={creator.name}
                                        nameid={creator.nameid}
                                        followers={creator.followers}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* <section className=' py-16 bg-[#f6efec]'>
                    <div className=' w-[90%] mx-auto space-y-16'>
                        <div className=' flex justify-between'>
                            <h1 className="text-4xl font-bold">Categories</h1>
                            <button className="bg-[#ffffff] border border-[#484848] text-[#000] font-semibold px-7 py-1 rounded-3xl hover:bg-[#535353]">
                                View all
                            </button>
                        </div>
                        <div className="flex flex-wrap justify-between gap-4">
                            {Categorie.map((data, index) => (
                                <Categories
                                    key={index}
                                    title={data.title}
                                    bgColor={data.bgColor}
                                />
                            ))}
                        </div>
                    </div>
                </section> */}
                <section className='py-16 bg-[#f6efec]'>
                    <div className='w-[90%] mx-auto space-y-16'>
                        {/* Header Section */}
                        <div className='flex items-center justify-between'>
                            <h1 className="text-4xl font-bold">Categories</h1>
                            <button className="bg-[#ffffff] border border-[#484848] text-[#000] font-semibold px-6 py-2 rounded-3xl hover:bg-[#535353]">
                                View all
                            </button>
                        </div>

                        {/* Card Container */}
                        <div className='scrollable-div overflow-x-auto flex space-x-16 py-4'>
                            {Categorie.map((data, index) => (
                                <div key={index} className="flex-shrink-0 w-52">
                                    <Categories
                                        title={data.title}
                                        bgColor={data.bgColor}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>



                <section className='py-16'>
                    <div className='w-[90%] mx-auto'>
                        {/* Header Section */}
                        <div className='flex items-center justify-between mb-16 flex-col md:flex-row'>
                            <div className='space-y-3'>
                                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#cc95a2] to-[#3d0f9e] bg-clip-text text-transparent">
                                    In The Spotlight
                                </h1>
                                <h3 className='text-[#737373] text-lg md:text-xl font-semibold'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                </h3>
                            </div>
                            <button className="bg-[#ffffff] border border-[#484848] text-[#000] font-semibold px-6 py-2 rounded-3xl hover:bg-[#535353] mt-4 md:mt-0">
                                View all
                            </button>
                        </div>

                        {/* Cards Section */}
                        <div className='scrollable-div overflow-x-auto flex space-x-36 py-4'>
                            {Spotlight.map((creator, index) => (
                                <div key={index} className="flex-shrink-0 w-52">
                                    <Creatercard
                                        img={creator.img}
                                        alt={creator.alt}
                                        type={creator.type}
                                        name={creator.name}
                                        nameid={creator.nameid}
                                        followers={creator.followers}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                <section className='py-16'>
                    <div className='w-[90%] mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:gap-4'>

                        {/* Left Section */}
                        <div className='p-6 w-full md:w-[40rem] h-auto md:h-[65vh] rounded-xl bg-[#f6efec] flex flex-col justify-between py-12'>
                            <h1 className='text-4xl md:text-6xl font-semibold'>
                                Meet
                                <span className='font-bold block md:mt-4'>
                                    The Design <br />
                                    Creator
                                </span>
                            </h1>
                            <p className='text-lg md:text-4xl text-[#7d00eb] underline mt-4 md:mt-0'>Read more</p>
                        </div>

                        {/* Right Section */}
                        <div className='w-full max-w-full md:max-w-[30rem] flex flex-col space-y-6'>
                            <h2 className='text-3xl md:text-6xl font-bold'>Aman k.</h2>
                            <h5 className='flex items-center space-x-4'>
                                <div className='w-10 h-10 md:w-12 md:h-12 bg-[#e6e6e6] rounded-full flex items-center justify-center overflow-hidden'>
                                    <img className='w-8 h-8 md:w-10 md:h-10 object-cover' src={hellochar} alt='Design Creator' />
                                </div>
                                <span className='text-lg md:text-5xl font-medium text-[#666666]'>Design Creator</span>
                            </h5>
                            <p className='text-base md:text-xl font-medium max-w-full md:max-w-[33rem]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad mini
                            </p>
                            <div className='flex flex-wrap space-x-4'>
                                <div className='w-10 h-10 md:w-12 md:h-12 bg-[#e6e6e6] rounded-full flex items-center justify-center overflow-hidden'></div>
                                <div className='w-10 h-10 md:w-12 md:h-12 bg-[#e6e6e6] rounded-full flex items-center justify-center overflow-hidden'></div>
                                <div className='w-10 h-10 md:w-12 md:h-12 bg-[#e6e6e6] rounded-full flex items-center justify-center overflow-hidden'></div>
                                <div className='w-10 h-10 md:w-12 md:h-12 bg-[#eaeaea] rounded-full flex items-center justify-center overflow-hidden'></div>
                                <div className='w-10 h-10 md:w-12 md:h-12 bg-[#ebebeb] rounded-full flex items-center justify-center overflow-hidden'></div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className='py-16'>
                    <div className='w-[90%] mx-auto'>
                        <div className='flex flex-col md:flex-row items-center justify-between mb-16 space-y-6 md:space-y-0'>
                            <div className='space-y-3'>
                                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#cc95a2] to-[#3d0f9e] bg-clip-text text-transparent">
                                    On The Rise
                                </h1>
                                <h3 className='text-lg md:text-xl text-[#737373] font-semibold'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                </h3>
                            </div>
                            <button className="bg-[#ffffff] border border-[#484848] text-[#000] font-semibold px-5 py-2 rounded-3xl hover:bg-[#535353]">
                                View all
                            </button>
                        </div>
                        <div className='scrollable-div overflow-x-auto flex space-x-36 py-4'>
                            {Spotlight.map((creator, index) => (
                                <div key={index} className="flex-shrink-0 w-52">
                                    <Creatercard
                                        img={creator.img}
                                        alt={creator.alt}
                                        type={creator.type}
                                        name={creator.name}
                                        nameid={creator.nameid}
                                        followers={creator.followers}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                <section className='py-16'>
                    <div className='w-[90%] mx-auto'>
                        <div className='flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8'>
                            <div className="flex flex-col justify-between items-center pt-10 rounded-[2rem] bg-gradient-to-b from-[#5526b6] to-[#3a2a4f] w-full md:w-[38rem]">
                                <div className="flex flex-col items-center space-y-4 pb-16">
                                    <h3 className="text-[#7fff46] font-semibold text-lg md:text-xl">Join As a Brand</h3>
                                    {/* <h1 className="font-bold text-[#fff] text-4xl md:text-4xl">Interdum et</h1> */}
                                    <h1 className="font-bold max-w-96 text-center text-[#fff] text-4xl md:text-4xl">Interdum et malesuada fames ac</h1>
                                    <p className='text-[#fff] pt-5 font-semibold text-lg md:text-xl'>Join As a Brand</p>
                                </div>
                                <img className="w-64 md:w-72 rounded-t-3xl mt-4" src={market} alt="Join As a Brand" />
                            </div>

                            <div className="flex flex-col justify-between items-center pt-10 rounded-[2rem] bg-gradient-to-b from-[#5526b6] to-[#3a2a4f] w-full md:w-[38rem]">
                                <div className="flex flex-col items-center space-y-4 pb-16">
                                    <h3 className="text-[#7fff46] font-semibold text-lg md:text-xl">Join As a Creator</h3>
                                    {/* <h1 className="font-bold text-[#fff] text-4xl md:text-4xl">Interdum et</h1> */}
                                    <h1 className="font-bold max-w-96 text-center text-[#fff] text-4xl md:text-4xl">Interdum et malesuada fames ac</h1>
                                    <p className='text-[#fff] pt-5 font-semibold text-lg md:text-xl'>Join As a Creator</p>
                                </div>
                                <img className="w-64 md:w-72 rounded-t-3xl mt-4" src={market} alt="Join As a Creator" />
                            </div>
                        </div>
                    </div>
                </section>



                {/* <section className=' py-16 '>
                    <div className=' w-[90%] mx-auto'>
                        <div className=' flex items-center justify-between mb-16'>
                            <div className=' space-y-3' >
                                <h1 className="text-4xl font-bold bg-gradient-to-r from-[#cc95a2] from-0% to-[#3d0f9e] to-55%  bg-clip-text text-transparent">
                                    UGC
                                </h1>
                                <h3 className=' text-[#737373] text-xl font-semibold'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                </h3>
                            </div>
                            <button className="bg-[#ffffff] border border-[#484848] text-[#000] font-semibold px-7 py-1 rounded-3xl hover:bg-[#535353]">
                                View all
                            </button>
                        </div>
                        <div className=' flex justify-around'>
                            {Spotlight.map((creator, index) => (
                                <Creatercard
                                    key={index}
                                    img={creator.img}
                                    alt={creator.alt}
                                    type={creator.type}
                                    name={creator.name}
                                    nameid={creator.nameid}
                                    followers={creator.followers}
                                />
                            ))}
                        </div>
                    </div>
                </section> */}


                <section className='py-16'>
                    <div className='w-[90%] mx-auto'>
                        <div className='flex flex-col md:flex-row items-center justify-between mb-16 space-y-6 md:space-y-0 md:space-x-6'>
                            <div className='space-y-3'>
                                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#cc95a2] from-0% to-[#3d0f9e] to-55% bg-clip-text text-transparent">
                                    UGC
                                </h1>
                                <h3 className='text-lg md:text-xl text-[#737373] font-semibold'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                </h3>
                            </div>
                            <button className="bg-[#ffffff] border border-[#484848] text-[#000] font-semibold px-5 py-2 rounded-3xl hover:bg-[#535353]">
                                View all
                            </button>
                        </div>
                        <div className='scrollable-div overflow-x-auto flex space-x-36 py-4'>
                            {Spotlight.map((creator, index) => (
                                <div key={index} className="flex-shrink-0 w-52">
                                    <Creatercard
                                        img={creator.img}
                                        alt={creator.alt}
                                        type={creator.type}
                                        name={creator.name}
                                        nameid={creator.nameid}
                                        followers={creator.followers}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                <section className=' py-16 bg-[#fafafa]'>
                    <div className=' w-[90%] text-center m-auto space-y-16'>
                        <div className=' space-y-4'>
                            <h1 className="text-4xl font-bold bg-gradient-to-br from-[#a572b6] to-[#3d0f9e] bg-clip-text text-transparent">
                                Associated Brands
                            </h1>
                            <h3 className=' text-[#737373] text-xl font-semibold'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                            </h3>
                        </div>
                        <div className="flex justify-center">
                            <div className="grid grid-cols-5 md:grid-cols-5 md:gap-x-24 sm:gap-x-6 gap-x-10 items-center">
                                <img className="w-36" src={Spotify} alt="Spotify" />
                                <img className="w-36" src={google} alt="Google" />
                                <img className="w-36" src={Stripe} alt="Stripe" />
                                <img className="w-36" src={Youtube} alt="YouTube" />
                                <img className="w-36" src={Microsoft} alt="Microsoft" />


                                <div className="grid col-span-5 sm:ml-36 md:col-span-5 grid-cols-5 sm:gap-x-6 items-center gap-x-10 pt-6">
                                    <img className="w-36 " src={Zoom} alt="Zoom" />
                                    <img className="w-36 " src={google} alt="Google" />
                                    <img className="w-36" src={Microsoft} alt="Microsoft" />
                                    <img className="w-36" src={Grab} alt="Grab" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* <section className=' pt-16 bg-[#f6efec]'>
                    <div className='w-[90%] m-auto'>
                        <div className=' grid grid-cols-3 gap-28'>
                            <div className=' space-y-8 w-[30rem]'>
                                <h1 className="text-4xl font-bold">BookMyCollab</h1>
                                <p className=' text-2xl font-medium '>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut </p>
                                <div className='flex gap-7'>
                                    <svg className=' w-5' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256">
                                        <g fill="#7d00eb" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(10.66667,10.66667)"><path d="M8,3c-2.757,0 -5,2.243 -5,5v8c0,2.757 2.243,5 5,5h8c2.757,0 5,-2.243 5,-5v-8c0,-2.757 -2.243,-5 -5,-5zM8,5h8c1.654,0 3,1.346 3,3v8c0,1.654 -1.346,3 -3,3h-8c-1.654,0 -3,-1.346 -3,-3v-8c0,-1.654 1.346,-3 3,-3zM17,6c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM12,7c-2.757,0 -5,2.243 -5,5c0,2.757 2.243,5 5,5c2.757,0 5,-2.243 5,-5c0,-2.757 -2.243,-5 -5,-5zM12,9c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3z"></path></g></g>
                                    </svg>

                                    <svg className=' w-5' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256">
                                        <g fill="#7d00eb" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(8,8)"><path d="M8.64258,4c-1.459,0 -2.64258,1.18163 -2.64258,2.64063c0,1.459 1.18262,2.66797 2.64063,2.66797c1.458,0 2.64258,-1.20897 2.64258,-2.66797c0,-1.458 -1.18163,-2.64062 -2.64062,-2.64062zM21.53516,11c-2.219,0 -3.48866,1.16045 -4.09766,2.31445h-0.06445v-2.00391h-4.37305v14.68945h4.55664v-7.27148c0,-1.916 0.14463,-3.76758 2.51563,-3.76758c2.337,0 2.37109,2.18467 2.37109,3.88867v7.15039h4.55078h0.00586v-8.06836c0,-3.948 -0.84884,-6.93164 -5.46484,-6.93164zM6.36328,11.31055v14.68945h4.56055v-14.68945z"></path></g></g>
                                    </svg>

                                    <svg className=' w-5' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256">
                                        <g fill="#7d00eb" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(8.53333,8.53333)"><path d="M28,6.937c-0.957,0.425 -1.985,0.711 -3.064,0.84c1.102,-0.66 1.947,-1.705 2.345,-2.951c-1.03,0.611 -2.172,1.055 -3.388,1.295c-0.973,-1.037 -2.359,-1.685 -3.893,-1.685c-2.946,0 -5.334,2.389 -5.334,5.334c0,0.418 0.048,0.826 0.138,1.215c-4.433,-0.222 -8.363,-2.346 -10.995,-5.574c-0.458,0.788 -0.721,1.704 -0.721,2.683c0,1.85 0.941,3.483 2.372,4.439c-0.874,-0.028 -1.697,-0.268 -2.416,-0.667c0,0.023 0,0.044 0,0.067c0,2.585 1.838,4.741 4.279,5.23c-0.447,0.122 -0.919,0.187 -1.406,0.187c-0.343,0 -0.678,-0.034 -1.003,-0.095c0.679,2.119 2.649,3.662 4.983,3.705c-1.825,1.431 -4.125,2.284 -6.625,2.284c-0.43,0 -0.855,-0.025 -1.273,-0.075c2.361,1.513 5.164,2.396 8.177,2.396c9.812,0 15.176,-8.128 15.176,-15.177c0,-0.231 -0.005,-0.461 -0.015,-0.69c1.043,-0.753 1.948,-1.692 2.663,-2.761z"></path></g></g>
                                    </svg>
                                    <svg className=' w-4' xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#7d00eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                            </div>
                            <div className=' max-w-fit '>
                                <h1 className="text-4xl font-bold mb-8">Company   </h1>
                                <ui className=' space-y-6 text-lg list-none font-medium'>
                                    <li>About</li>
                                    <li>Career</li>
                                    <li>Terms & Conditions </li>
                                    <li>Privacy Policy</li>
                                    <li>Refund Policy </li>
                                </ui>
                            </div>
                            <div className=' max-w-fit'>
                                <h1 className="text-4xl font-bold mb-8">Join us </h1>
                                <ul className=' space-y-6 text-lg list-none font-medium'>
                                    <li>Join as a brand</li>
                                    <li>Join as a creator</li>
                                    <li>Find creator</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className=' bg-[#302c2c] mt-28'>
                        <div className='flex justify-between text-[#f6efec] py-6 w-[90%] m-auto'>
                            <p className=' font-semibold text-lg'>No Upfront Payment </p>
                            <p className=' font-semibold text-lg'>Verified Creators</p>
                            <p className=' font-semibold text-lg'>Inbuilt Messengers </p>
                            <p className=' font-semibold text-lg'>Secure and Timely Payment</p>
                        </div>
                    </div>
                </section> */}


                <section className='pt-16 bg-[#f6efec]'>
                    <div className='w-[90%] m-auto'>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-28'>

                            <div className='space-y-8'>
                                <h1 className='text-3xl md:text-4xl font-bold'>BookMyCollab</h1>
                                <p className='text-lg md:text-2xl font-medium'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                </p>
                                <div className='flex gap-5 md:gap-7'>

                                    <svg className='w-4 md:w-5' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256">
                                        <g fill="#7d00eb" fill-rule="nonzero">
                                            <g transform="scale(10.66667,10.66667)">
                                                <path d="M8,3c-2.757,0 -5,2.243 -5,5v8c0,2.757 2.243,5 5,5h8c2.757,0 5,-2.243 5,-5v-8c0,-2.757 -2.243,-5 -5,-5zM8,5h8c1.654,0 3,1.346 3,3v8c0,1.654 -1.346,3 -3,3h-8c-1.654,0 -3,-1.346 -3,-3v-8c0,-1.654 1.346,-3 3,-3zM17,6c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM12,7c-2.757,0 -5,2.243 -5,5c0,2.757 2.243,5 5,5c2.757,0 5,-2.243 5,-5c0,-2.757 -2.243,-5 -5,-5zM12,9c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3z"></path>
                                            </g>
                                        </g>
                                    </svg>

                                    <svg className='w-4 md:w-5' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256">
                                        <g fill="#7d00eb" fill-rule="nonzero">
                                            <g transform="scale(8,8)">
                                                <path d="M8.64258,4c-1.459,0 -2.64258,1.18163 -2.64258,2.64063c0,1.459 1.18262,2.66797 2.64063,2.66797c1.458,0 2.64258,-1.20897 2.64258,-2.66797c0,-1.458 -1.18163,-2.64062 -2.64062,-2.64062zM21.53516,11c-2.219,0 -3.48866,1.16045 -4.09766,2.31445h-0.06445v-2.00391h-4.37305v14.68945h4.55664v-7.27148c0,-1.916 0.14463,-3.76758 2.51563,-3.76758c2.337,0 2.37109,2.18467 2.37109,3.88867v7.15039h4.55078h0.00586v-8.06836c0,-3.948 -0.84884,-6.93164 -5.46484,-6.93164zM6.36328,11.31055v14.68945h4.56055v-14.68945z"></path>
                                            </g>
                                        </g>
                                    </svg>

                                    <svg className='w-4 md:w-5' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256">
                                        <g fill="#7d00eb" fill-rule="nonzero">
                                            <g transform="scale(8.53333,8.53333)">
                                                <path d="M28,6.937c-0.957,0.425 -1.985,0.711 -3.064,0.84c1.102,-0.66 1.947,-1.705 2.345,-2.951c-1.03,0.611 -2.172,1.055 -3.388,1.295c-0.973,-1.037 -2.359,-1.685 -3.893,-1.685c-2.946,0 -5.334,2.389 -5.334,5.334c0,0.418 0.048,0.826 0.138,1.215c-4.433,-0.222 -8.363,-2.346 -10.995,-5.574c-0.458,0.788 -0.721,1.704 -0.721,2.683c0,1.85 0.941,3.483 2.372,4.439c-0.874,-0.028 -1.697,-0.268 -2.416,-0.667c0,0.023 0,0.044 0,0.067c0,2.585 1.838,4.741 4.279,5.23c-0.447,0.122 -0.919,0.187 -1.406,0.187c-0.343,0 -0.678,-0.034 -1.003,-0.095c0.679,2.119 2.649,3.662 4.983,3.705c-1.825,1.431 -4.125,2.284 -6.625,2.284c-0.43,0 -0.855,-0.025 -1.273,-0.075c2.361,1.513 5.164,2.396 8.177,2.396c9.812,0 15.176,-8.128 15.176,-15.177c0,-0.231 -0.005,-0.461 -0.015,-0.69c1.043,-0.753 1.948,-1.692 2.663,-2.761z"></path>
                                            </g>
                                        </g>
                                    </svg>

                                    <svg className='w-4 md:w-5' xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#7d00eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                            </div>


                            <div className='max-w-fit'>
                                <h1 className='text-3xl md:text-4xl font-bold mb-4 md:mb-8'>Company</h1>
                                <ul className='space-y-4 md:space-y-6 text-lg list-none font-medium'>
                                    <li>About</li>
                                    <li>Career</li>
                                    <li>Terms & Conditions</li>
                                    <li>Privacy Policy</li>
                                    <li>Refund Policy</li>
                                </ul>
                            </div>


                            <div className='max-w-fit'>
                                <h1 className='text-3xl md:text-4xl font-bold mb-4 md:mb-8'>Join us</h1>
                                <ul className='space-y-4 md:space-y-6 text-lg list-none font-medium'>
                                    <li>Get started</li>
                                    <li>Become a Partner</li>
                                    <li>Affiliate</li>
                                    <li>Seller</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#302c2c] mt-28'>
                        <div className='flex flex-wrap justify-between text-[#f6efec] py-6 w-[90%] m-auto'>
                            <p className='font-semibold text-lg mb-4 flex-1 text-center md:text-left md:mb-0 md:flex-auto'>No Upfront Payment</p>
                            <p className='font-semibold text-lg mb-4 flex-1 text-center md:text-left md:mb-0 md:flex-auto'>Verified Creators</p>
                            <p className='font-semibold text-lg mb-4 flex-1 text-center md:text-left md:mb-0 md:flex-auto'>Inbuilt Messengers</p>
                            <p className='font-semibold text-lg mb-4 flex-1 text-center md:text-left md:mb-0 md:flex-auto'>Secure and Timely Payment</p>
                        </div>
                    </div>

                </section>


            </div>
        </>
    )
}

export default Homepage