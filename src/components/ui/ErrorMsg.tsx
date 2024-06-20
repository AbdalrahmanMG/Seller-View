interface IProps {
    msg: string
}

const ErrorMsg = ({msg}: IProps) => {
  return (
    msg ? <p className="block text-red-700 font-semibold text-sm">{msg}</p>: null
  )
}

export default ErrorMsg