import { Heading } from "../components/Heading"
import SignupForm from "../components/SignupForm"


const Signup= () => {
  return (
    <>
   <div className="w-full min-h-screen flex justify-center items-stretch bg-purple-100 lg:px-20 ">
    <div className="lg:w-1/2 lg:p-10 flex flex-col bg-[#F9FAFB] justify-center">
    <Heading size="lg" color="black" title="Create your account!"/>
    <p className=" w-[90%]">We're happy to welcome you to link keeper. Create your account today and never lose a link again!</p>
    <div className="w-full">
      <SignupForm/>
    </div>
    </div>
    <div className="lg:w-1/2 lg:p-10 flex flex-col bg-[#F3F4F6]"></div>
   </div>
    </>
  )
}

export default Signup