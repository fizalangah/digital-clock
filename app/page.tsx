
"use client"
import { useState,useEffect } from "react"
export default function DigitalClock() {
    const [time,setTime] = useState<string>("")
    const[formate1,setFormate1] = useState(true)
   

function handelformatebtn() {
    setFormate1(true)
   
}
    useEffect(() => {
        const updateTime = () => {
          const date = new Date();
          // Convert time to Pakistan Standard Time (UTC +5)
          const options: Intl.DateTimeFormatOptions = {
            hour12: !formate1,
            timeZone: 'Asia/Karachi',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          };
          const formattedTime = new Intl.DateTimeFormat('en-US', options).format(date);
          setTime(formattedTime);
        };
    
        // Update the time every second
        const intervalId = setInterval(updateTime, 1000);
    
        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
      }, [formate1]);

      const toggleFormat = () => {
        setFormate1((prevFormat) => !prevFormat);
      };
  return (
    <div className="flex justify-center justify-items-center"> 
        <div className="bg-white lg:w-[400px] md:w-[400px] w-[300px] lg:h-[250px] md:h-[300px] h-[250px] border-transparent rounded-xl  md:mt-[100px] lg:mt-[200] mt-[50px]">
            <h1 className="flex justify-center items-center mt-[20px] text-2xl font-bold">Digital Clock</h1>
            <p className="flex justify-center items-center  font-normal mt-[10px] text-center ">Display current time in hours, minutes, and seconds.</p>
               <div className="flex justify-center items-center mt-[20px]">
                <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">{time}</h1>
               </div>
               <div className=" flex lg:gap-x-4 justify-center items-center mt-[10px]">
               {/* Button to toggle between 24-hour and 12-hour format */}
          <button
            className="font-bold bg-white border-4 rounded-xl p-2 text-sm"
            onClick={toggleFormat}
          >
            {formate1 ? 'Switch to 12-Hour Format' : 'Switch to 24-Hour Format'}
          </button>
               </div>
              
        </div>
    </div>
  )
}
