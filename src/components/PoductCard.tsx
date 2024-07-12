import { memo } from "react";
import { IProduct } from "../interfaces/indes";
import { txtSlicer } from "../utils/functions";
import CirculeColor from "./CirculeColor";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEdit: () => void;
  openRemove: () => void;
  setProductToEditIdx: (value: number) => void;
  idx: number;
}

const PoductCard= ({
  product,
  setProductToEdit,
  openEdit,
  setProductToEditIdx,
  idx,
  openRemove,
}: IProps)=> {
  const { title, imageURL, description, price, colors, category } = product;

  const renderCirculeColor = colors?.map((color) => <CirculeColor key={color} color={color} />);

  const editHandler = () => {
    setProductToEdit(product);
    openEdit();
    setProductToEditIdx(idx);
  };

  const onRemove = () => {
    setProductToEdit(product);
    openRemove();
  };

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border border-slate-300 rounded-md flex flex-col p-2">
      <Image imageURL={imageURL} alt={title} className={"h-2/5"} />
      <div className="flex flex-col justify-between flex-grow">
        <h3 className="text-xl pt-2 text-slate-700">{txtSlicer(title, 25)}</h3>
        <p className="text-sm py-2 text-gray-600">{txtSlicer(description, 100)}</p>

        <div className="flex space-x-2 my-2">{renderCirculeColor}</div>

        <div className="flex items-center justify-between">
          <p className="text-teal-600">{`$${price}`}</p>
          <Image imageURL={category.imageURL} alt={category.name} className={"w-10 h-10 rounded-full"} />
        </div>

        <div className=" flex space-x-1 mt-4">
          <Button className="bg-blue-700 text-white" onClick={editHandler}>
            Edit
          </Button>
          <Button className="bg-red-700 text-white" onClick={onRemove}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default memo(PoductCard)