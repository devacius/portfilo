import React from 'react'
import { CardCom } from '@/components/CardCom'
export default function Projects() {
  return (
    <div className='flex flex-col h-full w-full lg:overflow-x-hidden mt-20'>
      <div className='flex flex-row  items-center h-auto w-full py-4 px-4 space-x-8'> 
      <CardCom title={"Paytm App"} />
      <CardCom title={"Diabetes Prediction Model"}/>
      <CardCom title ={"Desktop Search Engine"}/>
      <CardCom />
      </div>
    </div>
  )
}
