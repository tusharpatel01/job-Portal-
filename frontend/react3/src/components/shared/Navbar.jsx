import React from 'react'
// import { Link } from 'react-router-dom'
import { Popover } from "@/components/ui/popover";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import { Button } from '../ui/button';
import { LogOut, User2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
  const user = false;
  return (
    <div className='bg-white'>
      <div className='flex items-center justify-between mx-auto max-w-7xl'>

        <div>
          <h1 className='text-2xl font-bold'>Career <span className=' text-red-600'>Vista</span></h1>
        </div>
        <div className='flex items-center gap-12 '>
          <ul className='flex gap-5 font-medium items-center'>
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          {
            !user ? (
              <div className='flex items-center gap-2'>
                <Link to="/login"> <Button variant="outline">login</Button></Link>
               
               <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#8243ee]" >Signup</Button></Link>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />

                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className='w-80'>
                  <div className='flex  gap-4 space-y-2'>
                    <Avatar className="cursor-pointer">
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />

                    </Avatar>
                    <div>
                      <h4 className='font-medium'>Premium member</h4>
                      <h3 className='text-sm text-muted-foreground'>you got the oppurtunity</h3>
                    </div>
                  </div>
                  <div className='flex flex-col  text-gray-700'>
                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                      <User2 />
                      <Button variant="link">view profile</Button>
                    </div>
                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                      <LogOut />
                      <Button variant="link">logout</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )

          }



        </div>

      </div>

    </div>
  )
}

export default Navbar
