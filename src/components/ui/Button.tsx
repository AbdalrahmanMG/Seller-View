import { DOMAttributes, ReactNode } from "react"

interface IProps extends DOMAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: string
    width?: 'w-full' | 'w-fit'
}

const Button = ({children, className,width = 'w-full', ...rest}: IProps) => {
  return (
    <button {...rest} className={`p-2 rounded-md ${className} ${width}`}>{children}</button>
  )
}

export default Button