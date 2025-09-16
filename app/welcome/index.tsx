import { Accordion } from "~/components/home/accordion"
import { Nav } from "~/components/navbar/nav"

export function Index() {
    return (
        <>            
            <Nav/>

            <section>
            <div className="container mt-15.5 md:17.5">
                <div className="w-full flex flex-col lg:flex-row justify-between ">
                <div className="w-full lg:w-[600px]">
                    <div className="flex flex-col text-start items-center md:block">
                    <div className="font-medium text-6xl pt-2">
                        Mohammudullaha the <br className="hidden lg:block"/> digital landscape <br className="hidden lg:block"/> for success
                    </div>
                    <div className="lg:hidden">
                        <img src="img/banner/Illustration.svg" alt=""/>
                    </div>
                    <div className="text-xl font-normal py-8.75">
                        Our digital marketing agency helps businesses <br className="hidden lg:block"/>grow and succeed online through a range of <br className="hidden lg:block"/> services including SEO, PPC, social media marketing, <br className="hidden lg:block"/>and content creation.
                    </div>
                    <div className="w-full md:block">
                        <button className="w-full md:w-[264px] cursor-pointer text-xl font-normal border bg-black text-white py-4 rounded-2xl hover:bg-[#404040] text-center">
                        Book a consultation
                        </button>
                    </div>                      
                    
                    </div>
                </div>
            
                <div className="w-full lg:w-[600px] flex justify-center items-center hidden lg:block">
                    <img src="img/banner/Illustration.svg" alt=""/>
                </div>    
                </div>

                <div>
                <div className=" mt-17.5">
                    <div className="banner-slider swiper">
                    <div className="swiper-wrapper">
                        
                        <div className="swiper-slide">
                        <div className="flex justify-center items-center">
                            <img src="img/Company logo/amazon.svg" alt="amazon" className="grayscale hover:grayscale-0 transition-transform duration-300  hover:scale-110"/>
                        </div>
                        </div>
                        
                        <div className="swiper-slide">
                        <div className="flex justify-center items-center">
                            <img src="img/Company logo/Vector.svg" alt="amazon" className="grayscale hover:grayscale-0 transition-transform duration-300  hover:scale-110"/>
                        </div>
                        </div>
                        
                        <div className="swiper-slide">
                        <div className="flex justify-center items-center">
                            <img src="img/Company logo/hobspot.svg" alt="amazon" className="grayscale hover:grayscale-0 transition-transform duration-300  hover:scale-110"/>
                        </div>
                        </div>
                        
                        <div className="swiper-slide">
                        <div className="flex justify-center items-center">
                            <img src="img/Company logo/notion.svg" alt="amazon" className="grayscale hover:grayscale-0 transition-transform duration-300  hover:scale-110"/>
                        </div>
                        </div>
                        
                        <div className="swiper-slide">
                        <div className="flex justify-center items-center">
                            <img src="img/Company logo/netflix.svg" alt="amazon" className="grayscale hover:grayscale-0 transition-transform duration-300  hover:scale-110"/>
                        </div>
                        </div>
                        
                        <div className="swiper-slide">
                        <div className="flex justify-center items-center">
                            <img src="img/Company logo/zoom.svg" alt="amazon" className="grayscale hover:grayscale-0 transition-transform duration-300  hover:scale-110"/>
                        </div>
                        </div>
                    </div>

                    <div className="hidden">
                        <div className="swiper-button-next "></div>
                        <div className="swiper-button-prev "></div>
                        <div className="swiper-pagination"></div>
                    </div>
                    </div>

                </div>
                </div>
            </div>
            </section>
            

            <section>
                <div className="container mt-17.5 md:mt-35">
                    
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="text-[40px]/[45px] font-medium border rounded-lg border-green bg-green px-2">
                            Services
                        </div>
                        <div className="text-lg font-normal text-center md:text-left">
                            At our digital marketing agency, we offer a range of services to <br className="hidden md:block"/> help businesses grow and succeed online. These services include:
                        </div>
                    </div>

                    
                    <div className="mt-20">
                    <div className="gap-10 grid grid-cols-1 lg:grid-cols-2">
                        
                        <div className="px-12.5 items-end xl:items-start grid grid-cols-3 sm:grid-cols-2 xl:gap-x-20 gap-x-5 border border-bold rounded-[50px] py-20 bg-white border-b-[6px]">
                            <div className="col-span-3 sm:col-span-2 xl:col-span-1">
                                <div className="font-medium text-3xl bg-green text-black rounded-lg p-1 inline-block">
                                    Search engine
                                </div>
                            
                            <div className="flex justify-start">
                                <div className="font-medium text-3xl bg-green text-black rounded-lg p-1">
                                optimization
                                </div>
                                <div></div>
                            </div>
                            </div>

                        <div className="xl:col-span-2 xl:order-2 lg:-mt-5">
                            <a href="#">
                            <div className="flex items-center gap-3.75">
                                <div>
                                <svg className="transition-transform duration-300  hover:scale-150 cursor-pointer" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23"/>
                                    <path d="M11.2501 24.7009C10.5326 25.1151 10.2868 26.0325 10.701 26.75C11.1152 27.4674 12.0326 27.7132 12.7501 27.299L11.2501 24.7009ZM30.7694 16.3882C30.9839 15.588 30.509 14.7655 29.7088 14.5511L16.6688 11.057C15.8686 10.8426 15.0461 11.3175 14.8317 12.1177C14.6173 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0606L24.3776 28.6517C24.1632 29.4519 24.6381 30.2744 25.4383 30.4888C26.2385 30.7033 27.061 30.2284 27.2754 29.4282L30.7694 16.3882ZM12.7501 27.299L30.0706 17.299L28.5706 14.7009L11.2501 24.7009L12.7501 27.299Z" fill="#B9FF66"/>
                                </svg>
                                </div>
                                <div className="hidden md:block text-lg font-normal">
                                Learn more
                                </div>
                            </div>
                            </a>
                        </div>
                            
                            
                        <div className="pt-8 col-span-2 sm:col-span-1">
                        <img src="img/Services icon/1.svg" alt="" className="w-full"/>
                        </div>
                        </div>
                        
                        <div className="px-12.5 items-end xl:items-start grid grid-cols-3 sm:grid-cols-2 xl:gap-x-20 gap-x-5 border border-bold rounded-[50px] py-20 bg-green border-b-[6px]">
                            <div className="col-span-3 sm:col-span-2 xl:col-span-1">
                                <div className="font-medium text-3xl bg-[#fff] text-black rounded-lg p-1 inline-block">
                                    Pay-per-click
                                </div>
                            
                            <div className="flex justify-start">
                                <div className="font-medium text-3xl bg-[#fff] text-black rounded-lg p-1">
                                advertising
                                </div>
                                <div></div>
                            </div>
                            </div>

                        <div className="xl:col-span-2 xl:order-2 lg:-mt-5">
                            <a href="#">
                            <div className="flex items-center gap-3.75">
                                <div>
                                <svg className="transition-transform duration-300  hover:scale-150 cursor-pointer" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23"/>
                                    <path d="M11.2501 24.7009C10.5326 25.1151 10.2868 26.0325 10.701 26.75C11.1152 27.4674 12.0326 27.7132 12.7501 27.299L11.2501 24.7009ZM30.7694 16.3882C30.9839 15.588 30.509 14.7655 29.7088 14.5511L16.6688 11.057C15.8686 10.8426 15.0461 11.3175 14.8317 12.1177C14.6173 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0606L24.3776 28.6517C24.1632 29.4519 24.6381 30.2744 25.4383 30.4888C26.2385 30.7033 27.061 30.2284 27.2754 29.4282L30.7694 16.3882ZM12.7501 27.299L30.0706 17.299L28.5706 14.7009L11.2501 24.7009L12.7501 27.299Z" fill="#B9FF66"/>
                                </svg>
                                </div>
                                <div className="hidden md:block text-lg font-normal">
                                Learn more
                                </div>
                            </div>
                            </a>
                        </div>
                            
                            
                        <div className="pt-8 col-span-2 sm:col-span-1">
                        <img src="img/Services icon/2.svg" alt="" className="w-full"/>
                        </div>
                        </div>
                        
                        <div className="px-12.5 items-end xl:items-start grid grid-cols-3 sm:grid-cols-2 xl:gap-x-20 gap-x-5 border border-bold rounded-[50px] py-20 bg-black border-b-[6px]">
                            <div className="col-span-3 sm:col-span-2 xl:col-span-1">
                                <div className="font-medium text-3xl bg-white text-black rounded-lg p-1 inline-block">
                                    Social Media
                                </div>
                            
                            <div className="flex justify-start">
                                <div className="font-medium text-3xl bg-white text-black rounded-lg p-1">
                                Marketing
                                </div>
                                <div></div>
                            </div>
                            </div>

                        <div className="xl:col-span-2 xl:order-2 lg:-mt-5">
                            <a href="#">
                            <div className="flex items-center gap-3.75">
                                <div>
                                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20.5" cy="20.5" r="20.5" fill="white"/>
                                        <path d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z" fill="black"/>
                                    </svg>

                                </div>
                                <div className="hidden md:block text-white text-lg font-normal">
                                Learn more
                                </div>
                            </div>
                            </a>
                        </div>
                            
                            
                        <div className="pt-8 col-span-2 sm:col-span-1">
                        <img src="img/Services icon/3.svg" alt="" className="w-full"/>
                        </div>
                        </div>
                        
                        <div className="px-12.5 items-end xl:items-start grid grid-cols-3 sm:grid-cols-2 xl:gap-x-20 gap-x-5 border border-bold rounded-[50px] py-20 bg-white border-b-[6px]">
                            <div className="col-span-3 sm:col-span-2 xl:col-span-1">
                                <div className="font-medium text-3xl bg-green text-black rounded-lg p-1 inline-block">
                                    Email
                                </div>
                            
                            <div className="flex justify-start">
                                <div className="font-medium text-3xl bg-green text-black rounded-lg p-1 inline-block">
                                Marketing
                                </div>
                                <div></div>
                            </div>
                            </div>

                        <div className="xl:col-span-2 xl:order-2 lg:-mt-5">
                            <a href="#">
                            <div className="flex items-center gap-3.75">
                                <div>
                                <svg className="transition-transform duration-300  hover:scale-150 cursor-pointer" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23"/>
                                    <path d="M11.2501 24.7009C10.5326 25.1151 10.2868 26.0325 10.701 26.75C11.1152 27.4674 12.0326 27.7132 12.7501 27.299L11.2501 24.7009ZM30.7694 16.3882C30.9839 15.588 30.509 14.7655 29.7088 14.5511L16.6688 11.057C15.8686 10.8426 15.0461 11.3175 14.8317 12.1177C14.6173 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0606L24.3776 28.6517C24.1632 29.4519 24.6381 30.2744 25.4383 30.4888C26.2385 30.7033 27.061 30.2284 27.2754 29.4282L30.7694 16.3882ZM12.7501 27.299L30.0706 17.299L28.5706 14.7009L11.2501 24.7009L12.7501 27.299Z" fill="#B9FF66"/>
                                </svg>
                                </div>
                                <div className="hidden md:block text-lg font-normal">
                                Learn more
                                </div>
                            </div>
                            </a>
                        </div>
                            
                            
                        <div className="pt-8 col-span-2 sm:col-span-1">
                        <img src="img/Services icon/4.svg" alt="" className="w-full"/>
                        </div>
                        </div>
                        
                        <div className="px-12.5 items-end xl:items-start grid grid-cols-3 sm:grid-cols-2 xl:gap-x-20 gap-x-5 border border-bold rounded-[50px] py-20 bg-green border-b-[6px]">
                            <div className="col-span-3 sm:col-span-2 xl:col-span-1">
                                <div className="font-medium text-3xl bg-[#fff] text-black rounded-lg p-1 inline-block">
                                    Content
                                </div>
                            
                            <div className="flex justify-start">
                                <div className="font-medium text-3xl bg-[#fff] text-black rounded-lg p-1">
                                Creation
                                </div>
                                <div></div>
                            </div>
                            </div>

                        <div className="xl:col-span-2 xl:order-2 lg:-mt-5">
                            <a href="#">
                            <div className="flex items-center gap-3.75">
                                <div>
                                <svg className="transition-transform duration-300  hover:scale-150 cursor-pointer" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23"/>
                                    <path d="M11.2501 24.7009C10.5326 25.1151 10.2868 26.0325 10.701 26.75C11.1152 27.4674 12.0326 27.7132 12.7501 27.299L11.2501 24.7009ZM30.7694 16.3882C30.9839 15.588 30.509 14.7655 29.7088 14.5511L16.6688 11.057C15.8686 10.8426 15.0461 11.3175 14.8317 12.1177C14.6173 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0606L24.3776 28.6517C24.1632 29.4519 24.6381 30.2744 25.4383 30.4888C26.2385 30.7033 27.061 30.2284 27.2754 29.4282L30.7694 16.3882ZM12.7501 27.299L30.0706 17.299L28.5706 14.7009L11.2501 24.7009L12.7501 27.299Z" fill="#B9FF66"/>
                                </svg>
                                </div>
                                <div className="hidden md:block text-lg font-normal">
                                Learn more
                                </div>
                            </div>
                            </a>
                        </div>
                            
                            
                        <div className="pt-8 col-span-2 sm:col-span-1">
                        <img src="img/Services icon/5.svg" alt="" className="w-full"/>
                        </div>
                        </div>
                        
                        <div className="px-12.5 items-end xl:items-start grid grid-cols-3 sm:grid-cols-2 xl:gap-x-20 gap-x-5 border border-bold rounded-[50px] py-20 bg-black border-b-[6px]">
                            <div className="col-span-3 sm:col-span-2 xl:col-span-1">
                                <div className="font-medium text-3xl bg-white text-black rounded-lg p-1 inline-block">
                                    Analytics and 
                                </div>
                            
                            <div className="flex justify-start">
                                <div className="font-medium text-3xl bg-white text-black rounded-lg p-1 inline-block">
                                Tracking
                                </div>
                                <div></div>
                            </div>
                            </div>

                            <div className="xl:col-span-2 xl:order-2 lg:-mt-5">
                            <a href="#">
                            <div className="flex items-center gap-3.75">
                                <div>
                                <svg className="transition-transform duration-300  hover:scale-150 cursor-pointer" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23"/>
                                    <path d="M11.2501 24.7009C10.5326 25.1151 10.2868 26.0325 10.701 26.75C11.1152 27.4674 12.0326 27.7132 12.7501 27.299L11.2501 24.7009ZM30.7694 16.3882C30.9839 15.588 30.509 14.7655 29.7088 14.5511L16.6688 11.057C15.8686 10.8426 15.0461 11.3175 14.8317 12.1177C14.6173 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0606L24.3776 28.6517C24.1632 29.4519 24.6381 30.2744 25.4383 30.4888C26.2385 30.7033 27.061 30.2284 27.2754 29.4282L30.7694 16.3882ZM12.7501 27.299L30.0706 17.299L28.5706 14.7009L11.2501 24.7009L12.7501 27.299Z" fill="#B9FF66"/>
                                </svg>
                                </div>
                                <div className="hidden md:block text-white text-lg font-normal">
                                Learn more
                                </div>
                            </div>
                            </a>
                        </div>
                            
                            
                        <div className="pt-8 col-span-2 sm:col-span-1">
                        <img src="img/Services icon/6.svg" alt="" className="w-full"/>
                        </div>
                        </div>
                    </div>

                    </div>
                    
                    
                    <div>
                        <div className="relative">
                            <div className="mt-30.75 bg-[#F3F3F3] rounded-[45px] flex justify-between items-center px-15 py-15">
                                <div>
                                <div className="text-lg md:text-3xl font-medium">Let’s make things happen</div>
                                <div className="text-base md:text-lg font-normal py-6.5">
                                    Contact us today to learn more about how our digital <br className="hidden md:block"/>marketing services can help your business grow and <br className="hidden md:block"/> succeed online.
                                </div>
                                <div>
                                    <button className="bg-[#000] text-white font-normal text-lg px-10 py-3.75 rounded-lg hover:bg-[#404040] cursor-pointer">
                                    Get your free proposal
                                    </button>
                                </div>     
                                
                                </div>
                    
                            </div>     
                        <div className="absolute right-0 top-[-25px] ">
                            <div className="hidden lg:block">
                            <svg width="494" height="395" viewBox="0 0 494 395" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M169 163.5C215.644 163.5 257.858 167.471 288.398 173.887C303.673 177.095 316 180.91 324.497 185.13C328.746 187.24 332.011 189.439 334.208 191.694C336.403 193.948 337.5 196.222 337.5 198.5C337.5 200.778 336.403 203.052 334.208 205.306C332.011 207.561 328.746 209.76 324.497 211.87C316 216.09 303.673 219.905 288.398 223.113C257.858 229.529 215.644 233.5 169 233.5C122.356 233.5 80.1417 229.529 49.6016 223.113C34.3275 219.905 21.9997 216.09 13.5029 211.87C9.25392 209.76 5.98872 207.561 3.79199 205.306C1.59696 203.052 0.5 200.778 0.5 198.5C0.5 196.222 1.59696 193.948 3.79199 191.694C5.98872 189.439 9.25392 187.24 13.5029 185.13C21.9997 180.91 34.3275 177.095 49.6016 173.887C80.1417 167.471 122.356 163.5 169 163.5Z" stroke="black"/>
                                <path d="M169 188.5C215.644 188.5 257.858 192.471 288.398 198.887C303.673 202.095 316 205.91 324.497 210.13C328.746 212.24 332.011 214.439 334.208 216.694C336.403 218.948 337.5 221.222 337.5 223.5C337.5 225.778 336.403 228.052 334.208 230.306C332.011 232.561 328.746 234.76 324.497 236.87C316 241.09 303.673 244.905 288.398 248.113C257.858 254.529 215.644 258.5 169 258.5C122.356 258.5 80.1417 254.529 49.6016 248.113C34.3275 244.905 21.9997 241.09 13.5029 236.87C9.25392 234.76 5.98872 232.561 3.79199 230.306C1.59696 228.052 0.5 225.778 0.5 223.5C0.5 221.222 1.59696 218.948 3.79199 216.694C5.98872 214.439 9.25392 212.24 13.5029 210.13C21.9997 205.91 34.3275 202.095 49.6016 198.887C80.1417 192.471 122.356 188.5 169 188.5Z" stroke="black"/>
                                <path d="M169 213.5C215.644 213.5 257.858 217.471 288.398 223.887C303.673 227.095 316 230.91 324.497 235.13C328.746 237.24 332.011 239.439 334.208 241.694C336.403 243.948 337.5 246.222 337.5 248.5C337.5 250.778 336.403 253.052 334.208 255.306C332.011 257.561 328.746 259.76 324.497 261.87C316 266.09 303.673 269.905 288.398 273.113C257.858 279.529 215.644 283.5 169 283.5C122.356 283.5 80.1417 279.529 49.6016 273.113C34.3275 269.905 21.9997 266.09 13.5029 261.87C9.25392 259.76 5.98872 257.561 3.79199 255.306C1.59696 253.052 0.5 250.778 0.5 248.5C0.5 246.222 1.59696 243.948 3.79199 241.694C5.98872 239.439 9.25392 237.24 13.5029 235.13C21.9997 230.91 34.3275 227.095 49.6016 223.887C80.1417 217.471 122.356 213.5 169 213.5Z" stroke="black"/>
                                <path d="M252.343 66.6289L252.511 67.5342L253.179 66.9004L300.312 22.1758L272.341 80.8232L271.944 81.6543L272.857 81.5342L337.277 73.0547L280.177 104.061L279.367 104.5L280.177 104.939L337.277 135.944L272.857 127.466L271.944 127.346L272.341 128.177L300.312 186.823L253.179 142.1L252.511 141.466L252.343 142.371L240.5 206.259L228.657 142.371L228.489 141.466L227.821 142.1L180.688 186.823L208.659 128.177L209.056 127.346L208.143 127.466L143.722 135.944L200.823 104.939L201.633 104.5L200.823 104.061L143.722 73.0547L208.143 81.5342L209.056 81.6543L208.659 80.8232L180.688 22.1758L227.821 66.9004L228.489 67.5342L228.657 66.6289L240.5 2.74023L252.343 66.6289Z" stroke="black"/>
                                <path d="M277 177L294.789 222.06L341.11 207.874L316.972 249.877L356.944 277.247L309.055 284.563L312.578 332.879L277 300L241.422 332.879L244.945 284.563L197.056 277.247L237.028 249.877L212.89 207.874L259.211 222.06L277 177Z" fill="#D9D9D9"/>
                                <path d="M112.194 306.102L135.134 264L158.258 306.102L200.269 329.134L158.258 352.166L135.134 394.269L112.194 352.166L70 329.134L112.194 306.102Z" fill="#B9FF66"/>
                                <circle cx="152.5" cy="186.5" r="62" fill="black" stroke="black"/>
                                <ellipse cx="132" cy="173" rx="10" ry="20" fill="white"/>
                                <ellipse cx="173" cy="173" rx="10" ry="20" fill="white"/>
                            </svg>
                    
                            </div>
                
                        </div>  
                
                        </div>
                    </div>
                </div>
            </section>


            
            <section>
            <div className="container mt-17.5 md:mt-35">
                
                <div className="container">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="text-[30px]/[45px] font-medium border rounded-lg border-green bg-green px-2">
                        Case Studies
                    </div>
                    <div className="text-lg font-normal text-center md:text-left">
                        Explore Real-Life Examples of Our Proven Digital Marketing <br className="hidden lg:block"/>Success through Our Case Studies
                    </div>
                </div>
                </div>
        
        
                
                <div className="hidden lg:block pt-20">
                <div className="bg-[#191A23] border rounded-4xl gap-12.5 py-20 px-15 flex">
                    <div className="border-r border-[#fff] px-16">
                    <div className="font-normal text-lg text-[#fff]">
                        For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
                    </div>
                    <div className="pt-5">
                        <a href="#">
                        <div className="flex items-center gap-3.75 text-green">
                            <div className="font-normal text-xl">
                            Learn more
                            </div>
                            <div>
                            <img src="img/icon/1.svg" alt=""/>
                            </div>
                        </div>
                        </a>
                    </div>
                    </div>
                
                    <div className="border-r border-[#fff] px-16">
                    <div className="font-normal text-lg text-[#fff]">
                        For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
                    </div>
                    <div className="pt-5">
                        <a href="#">
                        <div className="flex items-center gap-3.75 text-green">
                            <div className="font-normal text-xl">
                            Learn more
                            </div>
                            <div>
                            <img src="img/icon/1.svg" alt=""/>
                            </div>
                        </div>
                        </a>
                    </div>
                    </div>
                
                    <div className="px-16">
                    <div className="font-normal text-lg text-[#fff]">
                        For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
                    </div>
                    <div className="pt-5">
                        <a href="#">
                        <div className="flex items-center gap-3.75 text-green">
                            <div className="font-normal text-xl">
                            Learn more
                            </div>
                            <div>
                            <img src="img/icon/1.svg" alt=""/>
                            </div>
                        </div>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="lg:hidden mt-10 ml-6.5">
                <div>
                <div className="threeimonial-slider mySwiper swiper">
                    <div className="swiper-wrapper" >
                    
                    <div  className="swiper-slide h-auto!">
                        <div className="border-[#fff] p-16 border rounded-[45px] bg-[#191A23] h-full">
                        <div className="font-normal text-sm text-[#fff]">
                            For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
                        </div>
                        
                        <div className="pt-5">
                            <a href="#">
                            <div className="flex items-center gap-3.75 text-green">
                                <div className="font-normal text-lg">
                                Learn more
                                </div>
                                <div>
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L2 15L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2 15L2.75 16.299L20.0705 6.29904L19.3205 5L18.5705 3.70096L1.25 13.701L2 15Z" fill="#B9FF66"/>
                                </svg>
                                </div>  
                            </div>
                            </a>
                        </div>
                        </div>
                    </div>
            
            
                    <div  className="swiper-slide h-auto!">
                        <div className="border-[#fff] p-16 border rounded-[45px] bg-[#191A23] h-full">
                        <div className="font-normal text-sm text-[#fff]">
                            For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
                        </div>
                        
                        <div className="pt-5">
                            <a href="#">
                            <div className="flex items-center gap-3.75 text-green">
                                <div className="font-normal text-lg">
                                Learn more
                                </div>
                                <div>
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L2 15L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2 15L2.75 16.299L20.0705 6.29904L19.3205 5L18.5705 3.70096L1.25 13.701L2 15Z" fill="#B9FF66"/>
                                </svg>
                                </div>  
                            </div>
                            </a>
                        </div>
                        </div>
                    </div>
            
            
                    <div  className="swiper-slide h-auto!">
                        <div className="border-[#fff] p-16 border rounded-[45px] bg-[#191A23] h-full">
                        <div className="font-normal text-sm text-[#fff]">
                            For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
                        </div>
                        
                        <div className="pt-5">
                            <a href="#">
                            <div className="flex items-center gap-3.75 text-green">
                                <div className="font-normal text-lg">
                                Learn more
                                </div>
                                <div>
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L2 15L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2 15L2.75 16.299L20.0705 6.29904L19.3205 5L18.5705 3.70096L1.25 13.701L2 15Z" fill="#B9FF66"/>
                                </svg>
                                </div>  
                            </div>
                            </a>
                        </div>
                        </div>
                    </div>  
                    </div>
                </div>
                </div>
            
            </div>        
            
            </section>  


            
            <section>
                <div className="container mt-17.5 md:mt-35">
                    
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="text-[30px]/[45px] font-medium border rounded-lg border-green bg-green px-2">
                            Our Working Process 
                        </div>
                        <div className="text-lg font-normal text-center md:text-left">
                            Step-by-Step Guide to Achieving <br className="hidden md:block"/> Your Business Goals
                        </div>
                    </div>

                    
                    <div className="mt-20">

                        {
                            [
                                { title: "Consultation", number: "01", },
                                { title: "Research and Strategy Development", number: "02" },
                                { title: "Implementation", number: "03", },
                                { title: "Monitoring and Optimization", number: "04", },
                                { title: "Reporting and Analysis", number: "05", },
                                { title: "Continuous Improvement", number: "06", },
                                { title: "Ongoing Support", number: "07", },
                                { title: "Review and Feedback", number: "08", },
                                
                            ].map((item, index) => (
                                <div key={index} className={`${index !== 0 ? 'hidden md:block' : ''} mb-5`}>
                                    <Accordion
                                        number={item.number}
                                        title={item.title}
                                        description="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts..."
                                    />
                                </div>
                            ))
                        }
                        
                        
                    </div>

                </div>
            </section>

            
            <section>
                <div className="container mt-17.5 md:mt-35">            
                    
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="text-[40px]/[45px] font-medium border rounded-lg border-green bg-green px-2">
                            Team
                        </div>
                        <div className="text-lg font-normal text-center md:text-left">
                            Meet the skilled and experienced team behind our <br className="hidden md:block"/> successful digital marketing strategies
                            
                        </div>
                    </div>

                    
                    <div className="mt-10 lg:mt-20">
                        <div className="gap-10 pb-10 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3">
                            
                            <div className="border rounded-[45px] px-15 py-20 border-b-[6px]">
                                <div className="pb-7 border-b flex justify-between gap-5">
                                <div>
                                    <img src="img/Team photo/1.svg" alt=""/>       
                                </div>

                                <div className="flex flex-col justify-end">
                                    <div className="font-medium text-lg">
                                    John Smith
                                    </div>
                                    <div className="font-normal text-xl">
                                    CEO and Founder
                                    </div>
                                </div>

                                <div >
                                    <svg className="transition-transform duration-300  hover:scale-150 cursor-pointer" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="17" cy="17" r="17" fill="black"/>
                                    <path d="M9.31776 25H12.8131V13.6844H9.31776V25Z" fill="#B9FF66"/>
                                    <path d="M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z" fill="#B9FF66"/>
                                    <path d="M22.4517 25H26V18.7844C26 15.7563 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z" fill="#B9FF66"/>
                                    </svg>

                                </div>
                                </div>
                            
                                <div className="pt-7">
                                10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy
                                </div>
                            </div>
                        
                            
                            <div className="border rounded-[45px] px-15 py-20 border-b-[6px]">
                                <div className="pb-7 border-b flex justify-between  gap-5">
                                <div>
                                    <img src="img/Team photo/2.svg" alt=""/>       
                                </div>
                                <div className="flex flex-col justify-end">
                                    <div className="font-medium text-lg">
                                    Jane Doe
                                    </div>
                                    <div className="font-normal text-xl">
                                    Director of Operations
                                    </div>
                                </div>
                                <div >
                                    <svg className="transition-transform duration-300  hover:scale-150 cursor-pointer" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="17" cy="17" r="17" fill="black"/>
                                    <path d="M9.31776 25H12.8131V13.6844H9.31776V25Z" fill="#B9FF66"/>
                                    <path d="M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z" fill="#B9FF66"/>
                                    <path d="M22.4517 25H26V18.7844C26 15.7563 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z" fill="#B9FF66"/>
                                    </svg>
                                </div>
                                </div>
                            
                                <div className="pt-7">
                                7+ years of experience in project management and team leadership. Strong organizational and communication skills
                                </div>
                            </div>
                        
                            
                            <div className="border rounded-[45px] px-15 py-20 border-b-[6px]">
                                <div className="pb-7 border-b flex justify-between  gap-5">
                                <div>
                                    <img src="img/Team photo/3.svg" alt=""/>       
                                </div>
                                <div className="flex flex-col justify-end">
                                    <div className="font-medium text-lg">
                                    Michael Brown
                                    </div>
                                    <div className="font-normal text-xl">
                                    Senior SEO Specialist
                                    </div>
                                </div>
                                <div >
                                    <svg className="transition-transform duration-300  hover:scale-150 cursor-pointer" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="17" cy="17" r="17" fill="black"/>
                                    <path d="M9.31776 25H12.8131V13.6844H9.31776V25Z" fill="#B9FF66"/>
                                    <path d="M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z" fill="#B9FF66"/>
                                    <path d="M22.4517 25H26V18.7844C26 15.7563 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z" fill="#B9FF66"/>
                                    </svg>
                                </div>
                                </div>
                            
                                <div className="pt-7">
                                5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization
                                </div>
                            </div>
                        
                            
                            <div className="border rounded-[45px] px-15 py-20 border-b-[6px]">
                                <div className="pb-7 border-b flex justify-between  gap-5">
                                <div>
                                    <img src="img/Team photo/4.svg" alt="" />       
                                </div>
                                <div className="flex flex-col justify-end">
                                    <div className="font-medium text-lg">
                                    Emily Johnson
                                    </div>
                                    <div className="font-normal text-xl">
                                    PPC Manager
                                    </div>
                                </div>
                                <div >
                                    <svg className="transition-transform duration-300  hover:scale-150 cursor-pointer" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="17" cy="17" r="17" fill="black"/>
                                    <path d="M9.31776 25H12.8131V13.6844H9.31776V25Z" fill="#B9FF66"/>
                                    <path d="M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z" fill="#B9FF66"/>
                                    <path d="M22.4517 25H26V18.7844C26 15.7563 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z" fill="#B9FF66"/>
                                    </svg>
                                </div>
                                </div>
                            
                                <div className="pt-7">
                                3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis
                                </div>
                            </div>
                            
                            <div className="border rounded-[45px] px-15 py-20 border-b-[6px]">
                                <div className="pb-7 border-b flex justify-between  gap-5">
                                <div>
                                    <img src="img/Team photo/5.svg" alt=""/>       
                                </div>
                                <div className="flex flex-col justify-end">
                                    <div className="font-medium text-lg">
                                    Brian Williams
                                    </div>
                                    <div className="font-normal text-xl">
                                    Social Media <br/>Specialist
                                    </div>
                                </div>
                                <div >
                                    <svg className="transition-transform duration-300  hover:scale-150 cursor-pointer" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="17" cy="17" r="17" fill="black"/>
                                    <path d="M9.31776 25H12.8131V13.6844H9.31776V25Z" fill="#B9FF66"/>
                                    <path d="M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z" fill="#B9FF66"/>
                                    <path d="M22.4517 25H26V18.7844C26 15.7563 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z" fill="#B9FF66"/>
                                    </svg>
                                </div>
                                </div>
                            
                                <div className="pt-7">
                                4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement
                                </div>
                            </div>
                            
                            <div className="border rounded-[45px] px-15 py-20 border-b-[6px]">
                                <div className="pb-7 border-b flex justify-between  gap-5">
                                <div>
                                    <img src="img/Team photo/5.svg" alt=""/>       
                                </div>
                                <div className="flex flex-col justify-end">
                                    <div className="font-medium text-lg">
                                    Sarah Kim
                                    </div>
                                    <div className="font-normal text-xl">
                                    Content Creator
                                    </div>
                                </div>
                                <div >
                                    <svg className="transition-transform duration-300  hover:scale-150 cursor-pointer" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="17" cy="17" r="17" fill="black"/>
                                    <path d="M9.31776 25H12.8131V13.6844H9.31776V25Z" fill="#B9FF66"/>
                                    <path d="M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z" fill="#B9FF66"/>
                                    <path d="M22.4517 25H26V18.7844C26 15.7563 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z" fill="#B9FF66"/>
                                    </svg>
                                </div>
                                </div>
                            
                                <div className="pt-7">
                                2+ years of experience in writing and editing
                                Skilled in creating compelling, SEO-optimized content for various industries
                                </div>
                            </div>
                    
                        </div>
                        <div className="flex justify-end">
                        <button className=" w-full md:w-[187px] h-[68px] bg-[#000] text-white font-normal text-lg  rounded-2xl hover:bg-[#404040] cursor-pointer">
                            See all team
                        </button>
                        </div>
                    </div>

                </div>
            </section>

            
            <section>
                <div className="container mt-12.5 md:mt-25">
                    
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="text-[40px]/[45px] font-medium border rounded-lg border-green bg-green px-2">
                            Testimonials
                        </div>
                        <div className="text-lg font-normal text-center md:text-left">
                            Hear from Our Satisfied Clients: Read Our Testimonials <br className="hidden md:block"/> to Learn More about Our Digital Marketing Services
                        </div>
                    </div>


                    
                    <div className="mt-15 md:20">
                        <div className="bg-[#191A23] border rounded-[50px] gap-12.5 py-20 pt-5 md:pt-21 px-4 md:px-0">
                            <div className="testimonial-slider swiper" >
                                <div className="swiper-wrapper">
                                    
                                    <div className="swiper-slide">
                                        <div>
                                            <div className="m-3 md:block font-normal text-lg text-[#fff] border border-green rounded-4xl px-13 pt-12 pb-20">
                                            "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
                                            </div>
                                            <div className="pt-5 pl-10">
                                            <div className="font-normal text-lg text-green">
                                                John Smith
                                            </div>
                                            <div className="font-normal text-lg text-[#fff]">
                                                Marketing Director at XYZ Corp
                                            </div>
                                            </div>
                
                                        </div>
                                    </div>        
                                    
                                    <div className="swiper-slide">
                                        <div >
                                            <div className="m-3 md:block font-normal text-lg text-[#fff] border border-green rounded-4xl px-13 pt-12 pb-20">
                                            "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
                                            </div>
                                            <div className="pt-5 pl-10">
                                            <div className="font-normal text-lg text-green">
                                                John Smith
                                            </div>
                                            <div className="font-normal text-lg text-[#fff]">
                                                Marketing Director at XYZ Corp
                                            </div>
                                            </div>
                
                                        </div>
                                    </div>        
                                    
                                    <div className="swiper-slide">
                                        <div >
                                            <div className="m-3 md:block font-normal text-lg text-[#fff] border border-green rounded-4xl px-13 pt-12 pb-20">
                                            "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
                                            </div>
                                            <div className="pt-5 pl-10">
                                            <div className="font-normal text-lg text-green">
                                                John Smith
                                            </div>
                                            <div className="font-normal text-lg text-[#fff]">
                                                Marketing Director at XYZ Corp
                                            </div>
                                            </div>
                
                                        </div>
                                    </div>        
                                    
                                    <div className="swiper-slide">
                                        <div >
                                            <div className="m-3 md:block font-normal text-lg text-[#fff] border border-green rounded-4xl px-13 pt-12 pb-20">
                                            "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
                                            </div>
                                            <div className="pt-5 pl-10">
                                            <div className="font-normal text-lg text-green">
                                                John Smith
                                            </div>
                                            <div className="font-normal text-lg text-[#fff]">
                                                Marketing Director at XYZ Corp
                                            </div>
                                            </div>
                
                                        </div>
                                    </div>        
                                    
                                </div>
                                <div className="flex justify-center mt-31 px-4 md:px-0">
                                    <div className="flex w-full max-w-lg items-center">
                                        
                                        <div className="swiper-button-prev static! after:hidden mt-0!">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 13.5C22.8284 13.5 23.5 12.8284 23.5 12C23.5 11.1716 22.8284 10.5 22 10.5L22 13.5ZM0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM22 10.5L2 10.5L2 13.5L22 13.5L22 10.5Z" fill="white"/>
                                            </svg>    
                                        </div>
                
                                        <div className="swiper-pagination static! mt-2"></div>
                
                                        
                                        <div className="swiper-button-next static! w-auto h-auto after:hidden mt-0!">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM23.0607 13.0607C23.6464 12.4749 23.6464 11.5251 23.0607 10.9393L13.5147 1.3934C12.9289 0.807613 11.9792 0.807613 11.3934 1.3934C10.8076 1.97919 10.8076 2.92893 11.3934 3.51472L19.8787 12L11.3934 20.4853C10.8076 21.0711 10.8076 22.0208 11.3934 22.6066C11.9792 23.1924 12.9289 23.1924 13.5147 22.6066L23.0607 13.0607ZM2 13.5L22 13.5L22 10.5L2 10.5L2 13.5Z" fill="white"/>
                                            </svg>    
                                        </div>
                                    </div>
                                </div>
                    
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>

            
            <section>
                <div className="container mt-35">
                    
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="text-[40px]/[45px] font-medium border rounded-lg border-green bg-green px-2">
                            Contact Us
                        </div>
                        <div className="text-lg font-normal text-center md:text-left">
                            Connect with Us: Let's Discuss Your <br className="hidden md:block"/> Digital Marketing Needs
                        </div>
                    </div>


                    
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 rounded-[50px] mt-10 lg:bg-[#F3F3F3] mt-20">
                        <div className="bg-[#F3F3F3] rounded-[50px] py-10 md:block w-full px-20 xl:w-2/3 pl-25 py-20">
                            
                            <div className="flex justify-center md:justify-start items-center gap-20 mb-15">
                                
                                <div className="gap-3.5 flex">
                                    <div className="flex items-center justify-center">
                                        <input type="radio" name="type" className=" accent-green border rounded-full w-7 h-7 cursor-pointer" checked/>
                                    </div>
                                    <div>
                                        <div className="text-lg font-normal">Say Hi</div>
                                    </div>
                                </div>
            
                                
                                <div className="gap-3.5 flex">
                                    <div className="flex items-center justify-center">
                                        <input type="radio" name="type" className="accent-green border rounded-full w-7 h-7 cursor-pointer "/>
                                    </div>
                                    <div>
                                        <div className="text-lg font-normal">Get a Quote</div>
                                    </div>
                                </div>
                
                            </div>
            
                            
                            <div className="flex flex-col justify-center">
                                <div>
                                    <p className="font-normal text-base">Name</p>
                                    <input type="text" placeholder="Name" className="border bg-white rounded-2xl w-full py-5 pl-7.5 mt-2"/>
                                </div>
                                <div className="pt-6.25">
                                    <p className="font-normal text-base">Email*</p>
                                    <input type="email" placeholder="Email" className="border bg-white rounded-2xl w-full py-5 pl-7.5 mt-2"/>
                                </div>
                                <div className="pt-6.25">
                                    <p className="font-normal text-base">Message*</p>
                                    <input type="text" placeholder="Message" className="border bg-white rounded-2xl w-full py-5 pl-7.5 mt-2 pb-37.25"/>
                                </div>
                                <div className="hidden md:block w-full lg:bl:block pt-6.25">
                                    <button className="font-normal text-xl border rounded-2xl bg-black text-white px-10 py-5 hover:bg-[#404040] w-full cursor-pointer ">
                                    Send Message
                                    </button>
                                </div>
                            </div>      
                        </div>
                        <div className="w-full md:hidden">
                            <button className="font-normal text-xl border rounded-2xl bg-black text-white px-10 py-5 hover:bg-[#404040] w-full cursor-pointer ">
                                Send Message
                            </button>
                        </div>
            
                        <div className="hidden lg:block flex justify-end">
                            <img src="img/icon/13.svg" alt=""/>
                        </div>
                    </div>

                </div>
            </section>

            <footer>
                <div className="mt-17.5 md:mt-35 md:container">
                    <div className="bg-[#191A23]  md:rounded-t-[60px] px-15 py-14">
                        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between gap-12">
                            <div>
                            <a href="#">
                                <img src="img/Logo/2 Logo.svg" alt="" className="transition-transform duration-300 hover:scale-110"/>
                            </a>
                            </div>
                        
                            
                            <div className="mt-2 md:block">
                            <ul className="flex flex-col md:flex-row font-normal text-xl gap-10 items-center text-[#fff]">
                                <li className="underline transition-transform duration-300 hover:scale-110 hover:text-[#808080]">
                                    <a href="aboutus.html">About us</a>
                                </li>
                                <li className="underline transition-transform duration-300 hover:scale-110 hover:text-[#808080]">
                                    <a href="#">Services</a>
                                </li>
                                <li className="underline transition-transform duration-300 hover:scale-110 hover:text-[#808080]">
                                    <a href="#">Use Cases</a>
                                </li>
                                <li className="underline transition-transform duration-300 hover:scale-110 hover:text-[#808080]">
                                    <a href="#">Pricing</a>
                                </li>
                                <li className="hidden lg:block underline transition-transform duration-300 hover:scale-110 hover:text-[#808080] ">
                                    <a href="#">Blog</a>
                                </li>
                            </ul>
                            </div> 
            
                            <div className="hidden lg:block">
                                <ul className="flex gap-5 items-center">
                                <li className="transition-transform duration-300  hover:scale-150">
                                    <a href="#">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="15" cy="15" r="15" fill="white"/>
                                            <path d="M8.22178 22.0586H11.3059V12.0742H8.22178V22.0586Z" fill="black"/>
                                            <path d="M7.94141 8.88672C7.94141 9.87109 8.7358 10.668 9.76384 10.668C10.7451 10.668 11.5395 9.87109 11.5395 8.88672C11.5395 7.90234 10.7451 7.05859 9.76384 7.05859C8.7358 7.05859 7.94141 7.90234 7.94141 8.88672Z" fill="black"/>
                                            <path d="M19.8106 22.0586H22.9414V16.5742C22.9414 13.9023 22.3339 11.793 19.2031 11.793C17.7078 11.793 16.6797 12.6367 16.2592 13.4336H16.2124V12.0742H13.2685V22.0586H16.3526V17.1367C16.3526 15.8242 16.5863 14.5586 18.2218 14.5586C19.8106 14.5586 19.8106 16.0586 19.8106 17.1836V22.0586Z" fill="black"/>
                                        </svg>
                                    </a>
                                </li>
                                <li className="transition-transform duration-300  hover:scale-150">
                                    <a href="#">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30 15.0913C30 6.75456 23.2863 0 15 0C6.71371 0 0 6.75456 0 15.0913C0 22.6369 5.44355 28.9047 12.6411 30V19.4726H8.83064V15.0913H12.6411V11.8053C12.6411 8.03245 14.879 5.90264 18.2661 5.90264C19.9597 5.90264 21.6532 6.2069 21.6532 6.2069V9.91886H19.7782C17.9032 9.91886 17.2984 11.0751 17.2984 12.2921V15.0913H21.4718L20.8065 19.4726H17.2984V30C24.496 28.9047 30 22.6369 30 15.0913Z" fill="white"/>
                                        </svg>
                            
                                    </a>
                                </li>
                                <li className="transition-transform duration-300  hover:scale-150">
                                    <a href="#">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="15" cy="15" r="15" fill="white"/>
                                            <path d="M21.9961 11.4915C22.6854 10.9745 23.3058 10.3541 23.7884 9.63028C23.168 9.90602 22.4442 10.1128 21.7204 10.1818C22.4786 9.73369 23.0301 9.04435 23.3058 8.18267C22.6165 8.59628 21.8238 8.90648 21.031 9.07881C20.3417 8.35501 19.4111 7.94141 18.3771 7.94141C16.378 7.94141 14.758 9.56135 14.758 11.5604C14.758 11.8362 14.7925 12.1119 14.8614 12.3876C11.8628 12.2153 9.1744 10.7677 7.38212 8.59628C7.07192 9.11328 6.89959 9.73369 6.89959 10.423C6.89959 11.6638 7.51999 12.7668 8.51953 13.4216C7.93359 13.3872 7.34766 13.2493 6.86512 12.9736V13.008C6.86512 14.7659 8.10593 16.2135 9.76034 16.5581C9.48461 16.6271 9.13994 16.696 8.82973 16.696C8.58847 16.696 8.38166 16.6615 8.1404 16.6271C8.58847 18.0747 9.93267 19.1087 11.5182 19.1432C10.2773 20.1082 8.72633 20.6942 7.03745 20.6942C6.72725 20.6942 6.45152 20.6597 6.17578 20.6252C7.76126 21.6592 9.65694 22.2452 11.725 22.2452C18.3771 22.2452 21.9961 16.7649 21.9961 11.974C21.9961 11.8017 21.9961 11.6638 21.9961 11.4915Z" fill="black"/>
                                        </svg>
                                    </a>
                                </li>
                                </ul>
                            </div>  
            
                        </div>
                        
                        <div>
                            <div className="border-b border-[#fff]">
                                <div className="flex flex-col justify-center items-center  py-10 ">
                                    <div className="w-full flex flex-col md:flex-row justify-between items-center text-[#fff]">
                                        <div className="flex flex-col justify-center items-center text-center md:justify-start md:items-start md:text-start">
                                            <div className="flex gap-5 items-center">
                                                <div className="font-medium text-xl bg-green text-black rounded-lg items-center p-1">
                                                    Contact us:
                                                </div>
                                                <div></div>
                                            </div>
                                            <div className="pt-6.75">
                                                <div>
                                                    Email: info@positivus.com
                                                </div>
                                                <div className="pt-5 pb-5">
                                                    Phone: 555-567-8901
                                                </div>
                                                <div>
                                                    Address: 1234 Main St <br/> Moonstone City, Stardust State 12345
                                                </div>
                                            </div>
                                        </div>
                            
                                        <div className="bg-[#292A32] rounded-xl mt-5 w-full  md:w-1/2">
                                            <div className="bg-[#292A32] text-[#fff] rounded-xl flex justify-center w-full gap-5 px-10 py-15 flex-col lg:flex-row w-full">
                                                <div className="w-full lg:w-1/2">
                                                    <input type="email" placeholder="Email" className="h-[67px] border text-[#fff] border-[#fff] rounded-xl w-full pl-8.75 bg-[#292A32]"/>
                                                </div>
                                                <div className="w-full lg:w-1/2">
                                                    <button className="w-full bg-green text-black rounded-xl h-[67px] font-medium font-normal text-lg  hover:bg-[#F3F3F3] cursor-pointer shrink-0">
                                                    Subscribe to news
                                                    </button>
                                                </div>
                                
                                            </div>
                                        
                                        </div>
                                    </div>
                            
                                    <div>
                                    <ul className="flex gap-5 items-center mt-10 lg:hidden">
                                        <li className="transition-transform duration-300  hover:scale-150">
                                        <a href="#">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="15" cy="15" r="15" fill="white"/>
                                            <path d="M8.22178 22.0586H11.3059V12.0742H8.22178V22.0586Z" fill="black"/>
                                            <path d="M7.94141 8.88672C7.94141 9.87109 8.7358 10.668 9.76384 10.668C10.7451 10.668 11.5395 9.87109 11.5395 8.88672C11.5395 7.90234 10.7451 7.05859 9.76384 7.05859C8.7358 7.05859 7.94141 7.90234 7.94141 8.88672Z" fill="black"/>
                                            <path d="M19.8106 22.0586H22.9414V16.5742C22.9414 13.9023 22.3339 11.793 19.2031 11.793C17.7078 11.793 16.6797 12.6367 16.2592 13.4336H16.2124V12.0742H13.2685V22.0586H16.3526V17.1367C16.3526 15.8242 16.5863 14.5586 18.2218 14.5586C19.8106 14.5586 19.8106 16.0586 19.8106 17.1836V22.0586Z" fill="black"/>
                                            </svg>
                                        </a>
                                        </li>
                                        <li className="transition-transform duration-300  hover:scale-150">
                                        <a href="#">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30 15.0913C30 6.75456 23.2863 0 15 0C6.71371 0 0 6.75456 0 15.0913C0 22.6369 5.44355 28.9047 12.6411 30V19.4726H8.83064V15.0913H12.6411V11.8053C12.6411 8.03245 14.879 5.90264 18.2661 5.90264C19.9597 5.90264 21.6532 6.2069 21.6532 6.2069V9.91886H19.7782C17.9032 9.91886 17.2984 11.0751 17.2984 12.2921V15.0913H21.4718L20.8065 19.4726H17.2984V30C24.496 28.9047 30 22.6369 30 15.0913Z" fill="white"/>
                                            </svg>
                            
                                        </a>
                                        </li>
                                        <li className="transition-transform duration-300  hover:scale-150">
                                        <a href="#">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="15" cy="15" r="15" fill="white"/>
                                            <path d="M21.9961 11.4915C22.6854 10.9745 23.3058 10.3541 23.7884 9.63028C23.168 9.90602 22.4442 10.1128 21.7204 10.1818C22.4786 9.73369 23.0301 9.04435 23.3058 8.18267C22.6165 8.59628 21.8238 8.90648 21.031 9.07881C20.3417 8.35501 19.4111 7.94141 18.3771 7.94141C16.378 7.94141 14.758 9.56135 14.758 11.5604C14.758 11.8362 14.7925 12.1119 14.8614 12.3876C11.8628 12.2153 9.1744 10.7677 7.38212 8.59628C7.07192 9.11328 6.89959 9.73369 6.89959 10.423C6.89959 11.6638 7.51999 12.7668 8.51953 13.4216C7.93359 13.3872 7.34766 13.2493 6.86512 12.9736V13.008C6.86512 14.7659 8.10593 16.2135 9.76034 16.5581C9.48461 16.6271 9.13994 16.696 8.82973 16.696C8.58847 16.696 8.38166 16.6615 8.1404 16.6271C8.58847 18.0747 9.93267 19.1087 11.5182 19.1432C10.2773 20.1082 8.72633 20.6942 7.03745 20.6942C6.72725 20.6942 6.45152 20.6597 6.17578 20.6252C7.76126 21.6592 9.65694 22.2452 11.725 22.2452C18.3771 22.2452 21.9961 16.7649 21.9961 11.974C21.9961 11.8017 21.9961 11.6638 21.9961 11.4915Z" fill="black"/>
                                            </svg>
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                
                                </div>
                        
                            </div>
                        </div>
            
                        
                        <div className="mt-4 text-[#fff] flex flex-col md:flex-row gap-4 xl:gap-10">
                            <div className="font-normal text-lg text-[#fff] text-center py-2 md:py-10">
                                © 2023 Positivus. All Rights Reserved.
                            </div>
                            <div className="font-normal text-lg text-[#fff] text-center py-2 md:py-10 underline" >
                                Privacy Policy
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
        
    )
}