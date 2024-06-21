import "./App.css";
import PoductCard from "./components/PoductCard";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import Modal from "./components/ui/Modal";
import { colors, formInputList, productList } from "./data";
import { ChangeEvent, FormEvent, useState } from "react";
import { IProduct } from "./interfaces/indes";
import { productValidation } from "./validatoin";
import ErrorMsg from "./components/ui/ErrorMsg";
import CirculeColor from "./components/CirculeColor";
import Select from "./components/ui/Select";
import { categories } from "./data";

function App() {
  const defaultProductObj = {
    description: "",
    imageURL: "",
    price: "",
    title: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };

  const errorDefaultValues = {
    description: "",
    imageURL: "",
    price: "",
    title: "",
    colors: "",
  };

  const [products, setProducts] = useState<IProduct[]>(productList);
  const [productToEdit, setProductToEdit] = useState<IProduct>(defaultProductObj);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [tempColor, setTempColor] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [error, setError] = useState(errorDefaultValues);
  const [selected, setSelected] = useState(categories[3]);
  console.log(productToEdit);
  

  // -------------------handlers------------------------//
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const openEdit = () => setIsEditOpen(true);
  const closeEdit = () => setIsEditOpen(false);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
    setError({
      ...error,
      [name]: "",
    });
  };

  const closeHandler = (): void => {
    setProduct(defaultProductObj);
    setError(errorDefaultValues);
    close();
  };

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    const { title, description, price, imageURL } = product;

    event.preventDefault();
    const errors = productValidation({
      title,
      description,
      price,
      imageURL,
      colors: tempColor,
    });

    const hasError =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    setError(errors);
    if (!hasError) return;

    setProducts((prev) => {
      return [{ ...product, colors: tempColor, category: selected }, ...prev];
    });
    setProduct(defaultProductObj);
    setTempColor([]);
    close();
  };

  const onSubmitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    const { title, description, price, imageURL } = product;

    event.preventDefault();
    const errors = productValidation({
      title,
      description,
      price,
      imageURL,
      colors: tempColor,
    });

    const hasError =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    setError(errors);
    if (!hasError) return;

    setProducts((prev) => {
      return [{ ...product, colors: tempColor, category: selected }, ...prev];
    });
    setProduct(defaultProductObj);
    setTempColor([]);
    close();
  };

  // -----------------------render------------------//
  const renderProductList = products.map((product) => (
    <PoductCard key={product.id} product={product} setProductToEdit={setProductToEdit} openEdit={openEdit} />
  ));

  const renderFormInputList = formInputList.map((input) => (
    <div key={input.id} className="flex flex-col">
      <label
        htmlFor={input.id}
        className="mb-1 text-sm font-medium text-gray-700"
      >
        {input.label}
      </label>
      <Input
        id={input.id}
        name={input.name}
        type={input.type}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMsg msg={error[input.name]} />
    </div>
  ));

  const renderCirculeColor = colors.map((color) => (
    <CirculeColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColor.includes(color)) {
          setTempColor((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTempColor((prev) => [...prev, color]);
      }}
    />
  ));

  return (
    <main className="container mx-auto">
      <div className="flex justify-center">
        <Button
          onClick={open}
          className=" rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
          width="w-fit"
        >
          Add Product
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2">
        {renderProductList}
      </div>

      <Modal close={close} isOpen={isOpen} title={"Add a new"}>
        <form className="flex flex-col space-y-3" onSubmit={onSubmitHandler}>
          {renderFormInputList}
          <Select selected={selected} setSelected={setSelected} />
          <div className="flex my-2 flex-wrap">{renderCirculeColor}</div>
          <div className="flex my-2 flex-wrap">
            {tempColor.map((color) => (
              <span
                className="p-1 mb-1 text-xs text-white rounded-md mr-1"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>
          {error.colors ? <ErrorMsg msg={error.colors} /> : null}
          <div className="flex space-x-3">
            <Button className=" bg-indigo-500 hover:bg-indigo-800">
              Submit
            </Button>
            <Button
              onClick={closeHandler}
              className=" bg-gray-500 hover:bg-gray-800"
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>

      <Modal close={closeEdit} isOpen={isEditOpen} title={'Edit this Product'}>
        <form className="flex flex-col space-y-3" onSubmit={onSubmitEditHandler}>
          {renderFormInputList}
          <Select selected={selected} setSelected={setSelected} />
          <div className="flex my-2 flex-wrap">{renderCirculeColor}</div>
          <div className="flex my-2 flex-wrap">
            {tempColor.map((color) => (
              <span
                className="p-1 mb-1 text-xs text-white rounded-md mr-1"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>
          {error.colors ? <ErrorMsg msg={error.colors} /> : null}
          <div className="flex space-x-3">
            <Button className=" bg-indigo-500 hover:bg-indigo-800">
              Submit
            </Button>
            <Button
              onClick={closeHandler}
              className=" bg-gray-500 hover:bg-gray-800"
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default App;
