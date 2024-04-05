
import pdf from "../Deepansh_Gupta (1).pdf";




export default function Hireme() {
  return (
    <div className='flex flex-col items-center h-full w-full lg:overflow-x-hidden mt-20'>
      <div className='h-18 w-50 justify-center items-center flex flex-col py-4'><p className='text-2xl font-bold '>My Resume</p> </div>
      <div className='flex flex-col justify-center items-center h-auto w-auto'>
        <iframe src={pdf} width="700px " height="950px" className='my-8'></iframe>
        </div>
     
    </div>
  );
}
