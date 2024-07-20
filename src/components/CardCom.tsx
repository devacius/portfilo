
import {Github} from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Link } from "react-router-dom";

export function CardCom(props: { title: string, techstack: string, desc: string, link1: string, link2: string, border: string }) {
  return (
    <Card className="max-w-[330px] border-4 overflow-hidden md: h-auto" style={{borderColor:'#31363F'}}>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.techstack}</CardDescription>
      </CardHeader>
      <CardContent>
        
          <div className="flex items-center gap-2 md: h-auto ">
            {props.desc}
          </div>
        
      </CardContent>
      <CardFooter className="flex justify-between pb-3 ">
      <Link to={props.link1}><Button>Github <Github className=" w-5 ml-2"></Github></Button></Link>
       <Link to={props.link2}> <Button className={props.border}>Deploy</Button></Link>
      </CardFooter>
    </Card>
  )
}
