import React from 'react';
import { useState, useEffect } from 'react';

import pdf from '../src/Deepansh_Gupta (1).pdf'

import { Document, Page, pdfjs } from 'react-pdf';

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Button } from '@/components/ui/button';
import { Canvas } from '@react-pdf/renderer';



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
