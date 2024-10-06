'use client'

import { useState } from "react";
import { Card, CardBody, Button } from "@nextui-org/react";

export default function App({listing,loading}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="md:w-[30vw] my-3 w-[70vw] flex-wrap hover:bg-[#434252] text-white bg-[#282836]  cursor-pointer ">
      <CardBody>
        <div className="flex flex-col">
          <div className="flex justify-between">
       
            <div className="flex flex-col gap-1 items-center">
               
            <h3>heading</h3>
            <h3>heading</h3>
            </div>
          
            <div className="flex flex-col items-center gap-1">
              <h6>Delviery time</h6>
              <p>date din </p>
            </div>
          </div>

          <div
            className={`transition-all duration-500 ${
              isExpanded ? "max-h-[none] overflow-auto" : "max-h-[100px] overflow-hidden"
            }`}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, modi aliquid sint fuga
              maxime excepturi, voluptate placeat reprehenderit amet repellat, at quaerat debitis
              dignissimos ducimus eos reiciendis dolor molestiae quas cupiditate illum! Pariatur,
              nostrum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, modi aliquid
              sint fuga maxime excepturi, voluptate placeat reprehenderit amet repellat, at quaerat
              debitis dignissimos ducimus eos reiciendis dolor molestiae quas cupiditate illum!
              Pariatur, nostrum?
            </p>
          </div>

          <Button onClick={toggleExpanded} className="mt-2">
            {isExpanded ? "Read Less" : "Read More"}
          </Button>
        </div>
        
      </CardBody>
    </Card>
  );
}
