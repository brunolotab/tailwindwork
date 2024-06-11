import React from 'react'
import Profile from './Profile'

function Home() {
    return (
        <div className='p-4 w-[100%]'>
            <div className="p-6 flex justify-center align-middle  ">
                <div className='w-[90%] text-center  bg-primary p-[3rem] px-[6rem] leading-[1.8rem]'  data-aos="zoom-in">
                    <div className='font-bold  sm:text-lg sm:text-red-300 md:text-[2rem] md:text-green-500 xl:text-5xl xl:text-black' data-aos="fade-down">
                        <p>About us</p>
                        <h1 className='pb-[12px]'>
                            Who we are
                        </h1>
                    </div>
                    <div className=' sm:text-[1.2rem] md:text-[24px] xl:text-[1.7rem] p-4 leading-9' data-aos="fade-down" data-aos-delay="300">
                        We are a software company with strong technical expertise in developing innovative
                        solutions that drive digital transformation in the IT industry. Leveraging our experience,
                        we deliver our solutions with flexibility, responsiveness, efficiency and unmatched
                        performance which has made us one of the most sought after technology companies.
                    </div>
                </div>
            </div>
            <Profile/>
            <div className=' vsm:block vsm:text-[18px] md:grid grid-cols-3 gap-8 p-10 m-5 border border-[#ddd] rounded-lg'>
                <div className=' shadow-md p-4 leading-7 rounded-md' data-aos="zoom-in">
                    <h3 className='text-lg font-bold'>Couston Software Development</h3>
                    <div>
                    We help to create tailored software solutions that addresses specific/various business requirements. We develop custom applications, software products, and platforms from scratch, ensuring a perfect fit for our client's unique needs.
                    </div>
                </div>
                <div className='shadow-lg p-4' data-aos="zoom-in" data-aos-delay="200" >
                    <h3 className='text-lg font-bold'>User centric Design</h3>
                    <div>
                    We focus on creating intuitive and user-friendly interfaces that enhances the user’s experience. We employ user-centric design principles to develop software that is visually appealing, easy to navigate, and optimized for usability.
                    </div>
                </div>
                <div className=' shadow-lg p-4 leading-7' data-aos="zoom-in" data-aos-delay="250" >
                    <h3 className='text-lg font-bold'>Agile Development Methology</h3>
                    <div>
                    We embrace agile development approach that allows us to deliver solutions quickly and efficiently. Our approach enables iterative development, frequent communication with clients, and adaptability to changing requirements, ensuring a high degree of client satisfaction.
                    </div>
                </div>
                <div className=' shadow-lg p-4 leading-7' data-aos="flip-left" data-aos-delay="300">
                    <h3 className='text-lg font-bold'>Scalability and Felxibility</h3>
                    <div>
                    We design systems with scalability in mind, ensuring that they can grow alongside the business and handle increased workloads since scaling and adapting sytems is crucial for businesses in a dynamic environment
                    </div>
                </div>
                <div className=' shadow-lg p-4 leading-7' data-aos="zoom-in" data-aos-delay="350">
                    <h3 className='text-lg font-bold'>Security and Data Privacy</h3>
                    <div>
                    With the increasing threats to digital security, We as a software solution company places great importance on implementing robust security measures.
                    </div>
                </div>
                <div className=' shadow-lg p-4 leading-7'  data-aos="flip-right" data-aos-delay="400">
                    <h3 className='text-lg font-bold'>Emerging Technogy and Innovation</h3>
                    <div>
                    To stay ahead in the ever-evolving technological landscape we keep our finger on the pulse of emerging technologies. We invest in research and development, and apply innovative solutions to drive digital transformation for our clients.
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Home