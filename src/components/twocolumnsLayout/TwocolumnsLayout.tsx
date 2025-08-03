import React from 'react'
interface ITwocolumnsProps{
    leftContent : React.ReactNode ,RightContent:React.ReactNode,leftStyle?:string , rightStyle?:string,containerStyle?:string
}
function TwocolumnsLayout({leftContent ,RightContent,leftStyle='' , rightStyle ='',containerStyle=''}:ITwocolumnsProps) {
  return (
    <div className={`container  flex items-center px-2 justify-center md:justify-between md:gap-12 flex-col md:flex-row`}>
        <div className={ `w-full mx-auto md:w-1/2 ${leftStyle}`}>
            {leftContent}
        </div>
        <div className={ `w-full md:w-1/2  ${rightStyle}`}>
            {RightContent}
        </div>
    </div>
  )
}

export default TwocolumnsLayout