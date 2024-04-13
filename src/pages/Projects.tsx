
import { CardCom } from '@/components/CardCom'
export default function Projects() {
  return (
    <div className='flex flex-col h-full w-full md:justify-center'>
      <div className='mt-20 py-2 h-30 md:pb-16 md:-mt-16'><p className='text-sm'><b>Note:</b> The projects with green deploy border are deployed . While the ones with Red ones are not </p></div>
      <div className='flex flex-col  md:flex-row items-center max-h-11/12 md:h-3/5 w-full  px-4 md:space-x-8 space-y-2 '> 
      <CardCom title={"Paytm App"}  link1={"https://github.com/devacius/paytm"} border={"border-red-500 border-4"} techstack={"React | Tailwind Css | Node Js | Prisma | JWT Authentication | PostgreSQL"} desc={"A simple paytm clone created using MERN stack with virtual money provided upon your signup . This project is created by me to learn about mongodb , creating backend, user authentication and understanding HTTP server requests. (It is not linked to you bank account No need to worry😅)."} link2={"#"}/>
      <CardCom title={"Diabetes Prediction Model"} link1={"https://github.com/devacius/DiabetesPrediction-Model"} link2={"https://diabetespredictiondevacius.streamlit.app/"} border={"border-green-500 border-4"} techstack={"Python | Google Collab | Streamlit | Numpy | scikit_learn | pickle "} desc={"It tells whether a person is diabetic or not based on Pregnancies , Glucose , BloodPressure ,etc. Uses streamlit for the ui and frontend part and is trained on the diabetes.csv file"}/>
      <CardCom title ={"Desktop Search Engine"} link1={"https://github.com/devacius/DesktopSearchEngine"} border={"border-red-500 border-4"} techstack={"python | os | system | Text_extractor | Pdf Reader | pypdf"} desc={"A simple Desktop search engine application that allows to search for your specific words in text, pdf, image files in your desktop storage within a reduced time complexity and greater efficiency."} link2={"#"}/>
      <CardCom title={"Blockchain Voting System"} link1={"https://github.com/devacius/blockchain-voting-main"}border={"border-red-500 border-4"} techstack={"react | metamask | tailwind css | Solidity | Polygon | Ethereum"} desc={"Our final year project - A blockchain-based voting system revolutionizes democratic processes, leveraging Ethereum and Polygon for secure, transparent, and accessible elections. Powered by smart contracts , our solution ensures integrity and inclusivity in governance."} link2={"#"}/>
      </div>
    </div>
  )
}
