import { DOMAttributes } from "react"

interface IProps extends DOMAttributes<HTMLSpanElement>{
    color: string
}

const CirculeColor = ({color, ...rest}: IProps) => {
  return (
    <span {...rest} className="bg-indigo-700 w-5 m-0.5 h-5 rounded-full" style={{backgroundColor: color}}></span>
  )
}

export default CirculeColor