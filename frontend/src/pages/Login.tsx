import { Heading } from "../components/Heading"
import { LoginForm } from "../components/LoginForm"


export const Login = () => {
  return (
    <div className="w-full min-h-screen bg-[#F3F4F6] flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col justify-center items-center"><Heading size="md" title="Link Keeper" color="black" />
        <Heading size="lg" title="Welcome back!" color="black" /></div>
        <div className="w-[30%] flex flex-col gap-5 bg-white p-10 rounded-md shadow-sm border-solid border-[1px] border-[#D1D5DB]">
        <LoginForm/>
        </div>
    </div>
  )
}
