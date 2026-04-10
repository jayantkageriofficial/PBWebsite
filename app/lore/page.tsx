import connectDB from '@/db/connection'
import { Metadata } from 'next'

connectDB()


export const metadata:Metadata  = {
    title:"Lore",
    description:"The Lores of Point Blank"
  } 



export default async function Lore() {  
  return (
    <div>
      
    </div>
  )
}


