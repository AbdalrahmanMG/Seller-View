interface IProps {
    color: string
}

const CirculeColor = ({color}: IProps) => {
  return (
    <span className="bg-indigo-700 w-5 m-0.5 h-5 rounded-full" style={{backgroundColor: color}}></span>
  )
}

export default CirculeColor