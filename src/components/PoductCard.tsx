import Image from "./Image";
import Button from "./ui/Button";

export default function PoductCard() {
  return (
    <div className="border border-slate-300 rounded-md flex flex-col p-2">
      <Image
        imageURL={`https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
        alt={"prduct title"}
        className={""}
      />
      <h3>Prduct title</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea ipsam
        labore explicabo exercitationem odit? Quas praesentium aperiam
        necessitatibus corporis excepturi!
      </p>

      <div className="flex space-x-2 my-2">
        <span className="bg-indigo-700 w-5 h-5 rounded-full"></span>
        <span className="bg-red-700 w-5 h-5 rounded-full"></span>
        <span className="bg-amber-700 w-5 h-5 rounded-full"></span>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-teal-600">500$</p>
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
