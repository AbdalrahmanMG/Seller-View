import "./App.css";
import PoductCard from "./components/PoductCard";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import { productList } from "./data/product";
import { useState } from "react";

function App() {
  const theProductList = productList.map((product) => (
    <PoductCard product={product} />
  ));

  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2">
        {theProductList}
      </div>
      <Modal close={close} isOpen={isOpen} title={"keke"}>
        <div className="flex space-x-2 my-2">
          <Button className=" bg-indigo-500">Submit</Button>
          <Button onClick={close} className=" bg-gray-500">
            Cancel
          </Button>
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
