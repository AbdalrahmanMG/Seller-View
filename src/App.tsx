import "./App.css";
import PoductCard from "./components/PoductCard";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import Modal from "./components/ui/Modal";
import { formInputList, productList } from "./data";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  // render
  const renderProductList = productList.map((product) => (
    <PoductCard key={product.id} product={product} />
  ));

  const renderFormInputList = formInputList.map((input) => (
    <div key={input.id} className="flex flex-col">
      <label
        htmlFor={input.id}
        className="mb-1 text-sm font-medium text-gray-700"
      >
        {input.label}
      </label>
      <Input id={input.id} name={input.name} type={input.type} />
    </div>
  ));

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2">
        {renderProductList}
      </div>
      <Modal close={close} isOpen={isOpen} title={"keke"}>
        <div className="flex flex-col space-y-3">
          {renderFormInputList}
          <div className="flex space-x-3">
            <Button className=" bg-indigo-500 hover:bg-indigo-800">Submit</Button>
            <Button onClick={close} className=" bg-gray-500 hover:bg-gray-800">
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
      <Button
        onClick={open}
        className="rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        Open dialog
      </Button>
    </div>
  );
}

export default App;
