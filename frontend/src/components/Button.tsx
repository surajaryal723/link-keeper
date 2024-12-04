import { ReactElement } from "react"

interface ButtonProps{
    variant:'primary' | 'secondary'|'dark',
    icon?:ReactElement,
    text:string

}

const buttonStyles={
    "primary":'bg-primary-600 text-white',
    "secondary":'bg-primary-200 text-primary-600',
    "dark":'bg-black text-white'
}
const defaultButtonStyles='px-6 py-2 rounded-[4px] text-md w-full'

const Button = (props:ButtonProps) => {
  return (
    <button className={`${defaultButtonStyles} ${buttonStyles[props.variant]}`}>
        <span>{props.icon}</span>
        <span>{props.text}</span>
    </button>
  )
}

export default Button