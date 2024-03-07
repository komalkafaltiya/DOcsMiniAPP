import React, { useRef } from 'react'
import Card from './Card'
function Foreground() {

  const ref = useRef(null);

  const data = [
    {
      desc:"Little things matter in life.🤞✌",
      filesize:".9mb",
      close: true,
      tag:{ isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
    {
      desc:"Hey There...!!!! Yor are beautiful inside out😍💖.",
      filesize:".9mb",
      close: true,
      tag:{ isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
    },
    {
      desc:"Be yourselffff.💕🅿",
      filesize:".9mb",
      close: false,
      tag:{ isOpen: false, tagTitle: "Upload", tagColor: "green"},
    },
  ];
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item, index)=>(
          <Card  data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground
