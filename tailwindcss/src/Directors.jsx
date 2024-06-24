import React from 'react'
import Agada from './assets/Dimage1_files/agada-7e7dee65.png'
import Albert from './assets/Dimage1_files/albert-eca16837.png'
import Dosumu from './assets/Dimage1_files/dosumu-d7b068d0.jpeg'
import Ejembi from './assets/Dimage1_files/ejembi-19f6ee49.png'
import Titilayo from './assets/Dimage1_files/titilayo-8b5544c6.png'

function Directors() {
    return (
        <div className=' w-[100%] p-7'>
             <div>
                    <h3 style={{ textAlign: 'center', fontSize:'25px',color: '#24b0ff', fontWeight: 'bolder' }}>Meet Our</h3>
                    <h1 style={{ textAlign: 'center', fontSize:'20px', fontWeight: 900 }}>Board Of Directors</h1><br />
                    
            </div>
            <div className='p-16 grid lg:grid-cols-3 justify-items-center border border-lime-100 w-[100%] md:grid-cols-2'>
                <div className=' lg:col-start-2 lg:col-end-3 h-[300px] mb-4'>
                    <div className='lg:w-[240px] md:w-[240px] vsm:w-[240px]  '><img src={Agada} alt='' className='w-[100%] object-cover'/></div>
                    <div className='relative top-[-105px] bg-[#aaa] m-2 leading-9 text-white p-2' ><div className='font-bold'>Aganda Apoch <span></span></div>
                        <p>Chairman</p></div>
                </div>
                <div className='lg:col-start-1 lg:col-end-2 h-[300px] mb-4' >
                    <div className='w-[240px]'><img src={Albert} alt='' className='w-[100%]  object-cover'/></div>
                    <div className='relative top-[-105px] bg-[#aaa] m-2 leading-9 text-white p-2' ><div>Afolabi Albert <span style={{ fontSize: '25', color: 'white', fontWeight: 'bold', float: 'right' }}></span></div>
                        <p>MD/CEO</p></div>
                </div>
                <div className='h-[300px] mb-4'>
                    <div className='w-[240px]'><img src={Titilayo} alt='' className='w-[100%]  object-cover'/></div>
                    <div className='relative top-[-105px] bg-[#aaa] m-2 leading-9 text-white p-2'><div>Olubiyi Tititayo<span style={{ fontSize: '25', color: 'white', fontWeight: 'bold', float: 'right' }}></span></div>
                        <p>Director</p></div>
                </div>
                <div className='h-[300px] mb-4'>
                    <div className='lg:w-[240px] h-[300px]'><img src={Ejembi} alt='' className='w-[100%] h-[100%] object-cover'/></div>
                    <div className='relative top-[-105px] bg-[#aaa] m-2 leading-9 text-white p-2'><div>Ejembi Emmanuel <span style={{ fontSize: '25', color: 'white', fontWeight: 'bold', float: 'right' }}></span></div>
                        <p>Director</p></div>
                </div>
                <div className='lg:col-start-2 lg:col-end-3 md:col-start-1 md:col-span-1 h-[300px]'>
                    <div className='w-[240px]'><img src={Dosumu} alt='' className='w-[100%] h-[100%] object-cover'/></div>
                    <div className='relative top-[-105px] bg-[#aaa] m-2 leading-9 text-white p-2' ><div>Dosumu Sunday <span style={{ fontSize: '25', color: 'white', fontWeight: 'bold', float: 'right' }}></span></div>
                        <p>Director</p></div>
                </div>
            </div>
        </div>
    )
}

export default Directors


