import { ReactNode } from "react"

interface IProps {
    children: ReactNode
    className: string
}

const Button = ({children, className, ...rest}: IProps) => {
  return (
    <button {...rest} className={`w-full p-2 rounded-md text-white ${className}`}>{children}</button>
  )
}

export default Button