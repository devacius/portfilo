import React, { useEffect, useState } from 'react'
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useNavigate,Link } from 'react-router-dom';
const Home = lazy(() => import("../pages/Home"));
const Project = lazy(() => import('../pages/Projects'));
const Hireme = lazy(() => import('../pages/Hireme'));
import { ThemeProvider } from './components/theme-provider';
import { Skeleton } from "@/components/ui/skeleton"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { Moon, Sun } from "lucide-react";

import { useTheme } from './components/theme-provider';
import { Button } from "@/components/ui/button";

export default function App() {
  const {setTheme,theme } = useTheme();
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className='relative w-screen  h-screen flex flex-col justify-center items-center'>
        <BrowserRouter>
          <Appbar theme={theme} setTheme={setTheme}/>
          <Routes>
            <Route path="/" element={<Suspense fallback={<Skeleton className="h-[125px] w-[250px] rounded-xl" />}><Home /> </Suspense>} />
            <Route path="/projects" element={<Suspense fallback={<Skeleton className="h-[125px] w-[250px] rounded-xl" />}><Project theme={theme}/> </Suspense>} />
            <Route path="/hire" element={<Suspense fallback={<Skeleton className="h-[125px] w-[250px] rounded-xl" />}><Hireme /> </Suspense>} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>

  )
}

function Appbar() {
  const{theme,setTheme} = useTheme();
  return (
    <div className='flex flex-row justify-end absolute top-0 w-full h-20' style={{backgroundColor:'#76ABAE'}}>
      <div >
      <NavigationMenu>
        <NavigationMenuList >
          <NavigationMenuItem className=' py-3' >
            <Link to="/">
            <NavigationMenuLink className={navigationMenuTriggerStyle()} style={theme ==='dark'?{ backgroundColor:'#31363F'}:{backgroundColor:'#EEEEEE'}} >
              Home
            </NavigationMenuLink>
            </Link>
            
          </NavigationMenuItem>
          <NavigationMenuItem >
            <Link to="/projects">
            <NavigationMenuLink className={navigationMenuTriggerStyle()} style={theme==='dark'?{ backgroundColor:'#31363F'}:{backgroundColor:'#EEEEEE'}}>
              Projects
            </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem >
            <Link to="/hire">
            <NavigationMenuLink className={navigationMenuTriggerStyle()} style={theme==='dark'?{ backgroundColor:'#31363F'}:{backgroundColor:'#EEEEEE'}}>
              Hire me 
            </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
          <Button variant="outline" size="icon" onClick={()=>{
            console.log(theme);
                  if(theme==="dark"){
                    setTheme("light");
                  }
                  else{
                    setTheme("dark");
                  }
                }} style={theme==='dark'?{ backgroundColor:'#31363F'}:{backgroundColor:'#EEEEEE'}}>
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-0 transition-all dark:-rotate-90 dark:scale-100" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-100 scale-100 transition-all dark:rotate-0 dark:scale-0" />
                  
                  <span className="sr-only">Toggle theme</span>
                </Button>
              
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      </div>
    </div>
  )


}
