import { ReactNode } from "react"

interface IProps {
    children: ReactNode
    className?: string
    width?: 'w-full' | 'w-fit'
}

const Button = ({children, className,width, ...rest}: IProps) => {
  return (
    <button {...rest} className={`w-full p-2 rounded-md text-white ${className} ${width}`}>{children}</button>
  )
}

export default Button