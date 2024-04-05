import React from 'react'
import { CardCom } from '@/components/CardCom'
export default function Projects() {
  return (
    <div className='flex flex-col h-full w-full lg:overflow-x-hidden mt-20'>
      <div className='pb-12'><p className='text-sm'><b>Note:</b> The projects with green deploy border are deployed . While the ones with Red ones are not </p></div>
      <div className='flex flex-row  items-center h-2/3 w-full py-4 px-4 space-x-8'> 
      <CardCom title={"Paytm App"} link1={"https://github.com/devacius/paytm"} border={"border-red-500 border-4"} techstack={"React | Tailwind Css | Node Js | Prisma | JWT Authentication | PostgreSQL"} desc={"A simple paytm clone created using MERN stack with virtual money provided upon your signup . This project is created by me to learn about mongodb , creating backend, user authentication and understanding HTTP server requests. (It is not linked to you bank account No need to worry😅)."}/>
      <CardCom title={"Diabetes Prediction Model"} link1={"https://github.com/devacius/DiabetesPrediction-Model"} link2={"https://diabetespredictiondevacius.streamlit.app/"} border={"border-green-500 border-4"} techstack={"Python | Google Collab | Streamlit | Numpy | scikit_learn | pickle "} desc={"It tells whether a person is diabetic or not based on Pregnancies , Glucose , BloodPressure ,etc. Uses streamlit for the ui and frontend part and is trained on the diabetes.csv file"}/>
      <CardCom title ={"Desktop Search Engine"} link1={"https://github.com/devacius/DesktopSearchEngine"} border={"border-red-500 border-4"} techstack={"python | os | system | Text_extractor | Pdf Reader | pypdf"} desc={"A simple Desktop search engine application that allows to search for your specific words in text, pdf, image files in your desktop storage within a reduced time complexity and greater efficiency."}/>
      <CardCom title={"Blockchain Voting System"} link1={"https://github.com/devacius/blockchain-voting-main"}border={"border-red-500 border-4"} techstack={"react | metamask | tailwind css | Solidity | Polygon | Ethereum"} desc={"Our final year project - A blockchain-based voting system revolutionizes democratic processes, leveraging Ethereum and Polygon for secure, transparent, and accessible elections. Powered by smart contracts , our solution ensures integrity and inclusivity in governance."}/>
      </div>
    </div>
  )
}
