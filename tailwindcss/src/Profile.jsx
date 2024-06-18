import React from 'react'

import Image2 from './assets/Image2.jpg'

function Profile() {
    return (
        <div>
            <div className=' vsm:block md:flex justify-start items-start gap-8 w-[100%] p-8'>
                <div className='w-[45%] ' data-aos="fade-right" style={{ marginTop: '50px' }}>
                    <h1 className='font-bold vsm:text-[18px] sm:text-[19px] vsm:w-[200%] md:w-[100%] md:text-[25px] lg:text-3xl xl:text-4xl' style={{color: '#00A9ff'}}>
                        Empowering the Future 
                        With Inovative Software.
                    </h1>
                    
                    <div className='md:leading-10 sm:leading-8 vsm: leading-7 vsm:text-[15px] sm: text-[17px] vsm:w-[220%] vsm:text-start vsm:pb-8 md:w-[100%] md:text-[19px] lg:text-[21px] xl:text-[22px] text-gray'  data-aos="fade-right"  data-aos-delay="400">
                        At TM30 Global Limited, we are more than just a software development firm; we are pioneers, trailblazers, and visionaries. Our team of talented engineers, designers, and strategists are dedicated to crafting bespoke software solutions that align with our clients' unique objectives, empowering them to achieve their goals with utmost efficiency and innovation.
                        <div style={{ marginTop: '8px' }}>
                            <button style={{ background: '#00A9ff', border: 'none', fontSize: '16px', padding: '12px 33px', color: '#fff', borderRadius: '5px' }}>
                                About us
                            </button>
                        </div>
                    </div>

                </div>
                <div className=' md:w-[380px] lg:w-[500px] xl:w-[750px] h-[600px] ' data-aos="fade-left" >
                    <img src={Image2} alt='' className='w-[100%] h-[100%] rounded-[20%] object-cover' />
                </div>
            </div>

        </div>
    )
}

export default Profile

