
import Newsletter from "@/components/newsletter/Newsletter";
import Payment from "@/components/Payment/Payment";
import Brand from "@/ui/brands/Brand";
import Customer from "@/ui/customer/Customer";
import Header from "@/ui/header/Header";
import Solution from "@/ui/Solution/Solution";
import SpliteImage from "@/ui/SpliteImage";
import Technology from "@/ui/Technology";


export default function Home() {
  return (
   <>
   <div className=" bg-blue-700  h-screen rounded-b-[60px]">
    <Header/>
   </div>
    <SpliteImage/>
    <div className="container mx-auto  mt-96">
      <Brand/>
      <Technology/>
    </div>
      <Solution/>
      <Newsletter/>
      <Customer/>
      <Payment/>



   
   </>
  );
}
