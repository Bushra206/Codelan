import React from 'react'

const PricingCard= ({data}) => {


  return (
    <>
    <div className='h-[500px] md:h-[570px]  lg:h-[650px] xl:h-[500px] px-7  border-box border-gray-500 box-border rounded-lg bg-[#151519] '>
    <p className= {`text-[18px] leading-6 py-1 font-bold ${
          data?.label == "Premium" ? "text-[#2244FF]" : "text-[#D7D7D7]"
        }`}>{data.label}</p>
    <h1 className='text-[42px] py-2 leading-[48px] font-bold '>
       {data.price}
    </h1>
    <p className='text-[18px] font-normal leading-[26px] py-2 '>{data.description}</p>

     {data.buttonText == "Start free trail" ? (
        <button className=' bg-blue-800  rounded-md shadow-lg p-3 mt-7 mb-3 text-[18px] font-medium leading-[22px]  text-center flex flex-nowrap border-blue-600 border-[1px] '>{data.buttonText}</button>)
        : (<button className='rounded-md shadow-lg p-3 mt-7 mb-3 text-[18px] font-medium leading-[22px] text-center flex flex-nowrap border-blue-600 border-[1px] '>{data.buttonText}</button>)}



    <p className='text-[16px] leading-[28px] mt-3 py-3 '>What's included</p>
    <p className='font-bold text-[18px] leading-[34px] py-3 px-3'>{data.includedItems.map((item,index)=>(
       <React.Fragment key={index}>
        {item}
       </React.Fragment>
    ))}</p>
    </div>

    </>
  )
}

export default PricingCard

