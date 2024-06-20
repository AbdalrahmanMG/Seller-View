import { IProduct } from "../interfaces/indes";
import { txtSlicer } from "../utils/functions";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps{
    product: IProduct
}

export default function PoductCard({product}:IProps) {
    const {title, imageURL, description, price} = product

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border border-slate-300 rounded-md flex flex-col p-2">
      <Image
        imageURL={imageURL}
        alt={title}
        className={"h-2/5"}
      />
      <h3 className="text-xl pt-2 text-slate-700">{txtSlicer(title, 25)}</h3>
      <p className="text-sm py-2 text-gray-600">
        {txtSlicer(description,100)}
      </p>

      <div className="flex space-x-2 my-2">
        <span className="bg-indigo-700 w-5 h-5 rounded-full"></span>
        <span className="bg-red-700 w-5 h-5 rounded-full"></span>
        <span className="bg-amber-700 w-5 h-5 rounded-full"></span>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-teal-600">{`$${price}`}</p>
        <Image
          imageURL={
            "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="product title"
          className={"w-10 h-10 rounded-full"}
        />
      </div>

      <div className=" flex space-x-1 mt-4">
        <Button className="bg-blue-700">edit</Button>
        <Button className="bg-red-700 ">delete</Button>
      </div>
    </div>
  );
}
