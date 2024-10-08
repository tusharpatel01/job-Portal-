import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
// import { Label } from '@radix-ui/react-label'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
// import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { RadioGroup } from '../ui/radio-group'
const Login = () => {
  const [input, setInput] = useState({

    email: "",
    password: "",
    role: "",

  });
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new formData();
    
    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "content-Type": "application/json"
        },
        withCredentials: true,
      });
      if (res.data.success) {
        Navigate("/f");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);


    }

  }


  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mx-auto '>
        <form onSubmit={submitHandler} className='w-1/2 border  border-gray-200 rounded-md p-5 my-12'>
          <h1 className='font-bold text-xl mb-5'> sign up</h1>

          <div className='my-2'>
            <Label>
              Email
            </Label>
            <Input
              type="text"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="akgec.ac.in"
            />
          </div>



          <div className='my-2'>
            <Label>
              Password
            </Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="john@123"
            />
          </div>
          <div>
            <Button type="submit" className="w-full my-4">
              Login
            </Button>
            <span className='text-sm'>dont have an account ?<Link to="/signup" className='text-blue-600'>signup</Link></span>
          </div>
          <div className='flex items-center justify-between'>
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                   checked={input.role === 'student'}
                   onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                   checked={input.role === 'recruiter'}
                   onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login
