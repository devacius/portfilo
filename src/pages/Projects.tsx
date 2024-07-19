
import { CardCom } from '@/components/CardCom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
export default function Projects() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);
  return (
    <div className='flex flex-col min-h-screen min-w-full pt-4 '>
      <div className='px-2 mt-10 pb-8 '><p className='text-sm'><b>Note:</b> The projects with green deploy border are deployed . While the ones with Red ones are not </p></div>
      <div >
        <div className='pb-4'>
          <p className='text-2xl px-2 font-bold rounded-lg w-80 py-2' style={{ backgroundColor: '#14B8A6' }}>Web Development</p>

          <div className='flex flex-col pt-4 md:flex-row items-center max-h-11/12 h-3/5   px-4 space-x-8 space-y-2 '>
            {
              isLargeScreen ? (
                <>
                  <CardCom title={"Paytm App"} link1={"https://github.com/devacius/paytm"} border={"border-red-500 border-4"} techstack={"React | Tailwind Css | Node Js | Prisma | JWT Authentication | PostgreSQL"} desc={"A simple paytm clone created using MERN stack with virtual money provided upon your signup . This project is created by me to learn about mongodb , creating backend, user authentication and understanding HTTP server requests. (It is not linked to you bank account No need to worry😅)."} link2={"#"} />
                  <CardCom title={"Diabetes Prediction Model"} link1={"https://github.com/devacius/DiabetesPrediction-Model"} link2={"https://diabetespredictiondevacius.streamlit.app/"} border={"border-green-500 border-4"} techstack={"Python | Google Collab | Streamlit | Numpy | scikit_learn | pickle "} desc={"It tells whether a person is diabetic or not based on Pregnancies , Glucose , BloodPressure ,etc. Uses streamlit for the ui and frontend part and is trained on the diabetes.csv file"} />
                  <CardCom title={"Desktop Search Engine"} link1={"https://github.com/devacius/DesktopSearchEngine"} border={"border-red-500 border-4"} techstack={"python | os | system | Text_extractor | Pdf Reader | pypdf"} desc={"A simple Desktop search engine application that allows to search for your specific words in text, pdf, image files in your desktop storage within a reduced time complexity and greater efficiency."} link2={"#"} />
                </>) : (<>
                  <Carousel className="w-96 h-auto px-4">
                    <CarouselContent>
                      <CarouselItem>                  <CardCom title={"Paytm App"} link1={"https://github.com/devacius/paytm"} border={"border-red-500 border-4"} techstack={"React | Tailwind Css | Node Js | Prisma | JWT Authentication | PostgreSQL"} desc={"A simple paytm clone created using MERN stack with virtual money provided upon your signup . This project is created by me to learn about mongodb , creating backend, user authentication and understanding HTTP server requests. (It is not linked to you bank account No need to worry😅)."} link2={"#"} />
                      </CarouselItem>
                      <CarouselItem>                  <CardCom title={"Diabetes Prediction Model"} link1={"https://github.com/devacius/DiabetesPrediction-Model"} link2={"https://diabetespredictiondevacius.streamlit.app/"} border={"border-green-500 border-4"} techstack={"Python | Google Collab | Streamlit | Numpy | scikit_learn | pickle "} desc={"It tells whether a person is diabetic or not based on Pregnancies , Glucose , BloodPressure ,etc. Uses streamlit for the ui and frontend part and is trained on the diabetes.csv file"} />
                      </CarouselItem>
                      <CarouselItem>                  <CardCom title={"Desktop Search Engine"} link1={"https://github.com/devacius/DesktopSearchEngine"} border={"border-red-500 border-4"} techstack={"python | os | system | Text_extractor | Pdf Reader | pypdf"} desc={"A simple Desktop search engine application that allows to search for your specific words in text, pdf, image files in your desktop storage within a reduced time complexity and greater efficiency."} link2={"#"} />
                      </CarouselItem>
              
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>

                </>)
            }
          </div>
        </div>

        <div className='pb-4'>
          <p className='text-2xl px-2 font-bold rounded-lg py-2 w-80' style={{ backgroundColor: '#14B8A6' }}>Blockchain</p>

          <div className='flex flex-col pt-4  md:flex-row items-center max-h-11/12 h-3/5 w-full  px-4 space-x-8 space-y-2 '>
            {
              isLargeScreen ? (
                <>
                  <CardCom title={"Blockchain Voting System"} link1={"https://github.com/devacius/blockchain-voting-main"} border={"border-red-500 border-4"} techstack={"react | metamask | tailwind css | Solidity | Polygon | Ethereum"} desc={"Our final year project - A blockchain-based voting system revolutionizes democratic processes, leveraging Ethereum and Polygon for secure, transparent, and accessible elections. Powered by smart contracts , our solution ensures integrity and inclusivity in governance."} link2={"#"} />
                </>) : (<>
                  <Carousel className="w-96 h-auto px-4">
                    <CarouselContent>
                      <CarouselItem>                            <CardCom title={"Blockchain Voting System"} link1={"https://github.com/devacius/blockchain-voting-main"} border={"border-red-500 border-4"} techstack={"react | metamask | tailwind css | Solidity | Polygon | Ethereum"} desc={"Our final year project - A blockchain-based voting system revolutionizes democratic processes, leveraging Ethereum and Polygon for secure, transparent, and accessible elections. Powered by smart contracts , our solution ensures integrity and inclusivity in governance."} link2={"#"} />
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>

                </>)
            }
          </div>
        </div>
        <div className='pb-4'>
          <p className='text-2xl px-2 font-bold rounded-lg py-2 w-80' style={{ backgroundColor: '#14B8A6' }}>App Development</p>

          <div className='flex flex-col pt-4  md:flex-row items-center max-h-11/12 h-3/5 w-full  px-4 space-x-8 space-y-2 '>
            {
              isLargeScreen ? (
                <>
                  <CardCom title={"Blockchain Voting System"} link1={"https://github.com/devacius/blockchain-voting-main"} border={"border-red-500 border-4"} techstack={"react | metamask | tailwind css | Solidity | Polygon | Ethereum"} desc={"Our final year project - A blockchain-based voting system revolutionizes democratic processes, leveraging Ethereum and Polygon for secure, transparent, and accessible elections. Powered by smart contracts , our solution ensures integrity and inclusivity in governance."} link2={"#"} />
                </>) : (<>
                  <Carousel className="w-96 h-auto px-4">
                    <CarouselContent>
                      <CarouselItem>                            <CardCom title={"Blockchain Voting System"} link1={"https://github.com/devacius/blockchain-voting-main"} border={"border-red-500 border-4"} techstack={"react | metamask | tailwind css | Solidity | Polygon | Ethereum"} desc={"Our final year project - A blockchain-based voting system revolutionizes democratic processes, leveraging Ethereum and Polygon for secure, transparent, and accessible elections. Powered by smart contracts , our solution ensures integrity and inclusivity in governance."} link2={"#"} />
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>

                </>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}
