import Image from "next/image"

function SpliteImage() {
    const imageUrl =[
        {alt : "spliteImage", src : "/overview.jpg"},
    ]
  return (
    <div className="relative mx-auto  z-20 ">
        <div className="absolute mx-auto w-[95%]  md:w-[750px] aspect-square h-96 md:h-[600px]  left-0 right-0  -translate-y-1/2">
        <Image alt={imageUrl[0].alt}  className=" object-fit rounded-xl" fill  src={imageUrl[0].src}/>
        </div>
       
      
    </div>
  )
}

export default SpliteImage