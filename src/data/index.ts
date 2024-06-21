import { v4 as uuid } from "uuid";
import { ICategories, IformInput, IProduct } from "../interfaces/indes";

export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "Blue Bmw Sedan Near Green Lawn Grass",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea ipsam labore explicabo exercitationem odit? Quas praesentium aperiam necessitatibus corporis excepturi!",
    imageURL:
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "5000",
    colors: [
      "#a85025",
      "#2563eb",
      "#645c00",
      "#1f8a70",
      "#820000",
      "#ff0032",
    ],
    category: {
      name: 'Cars',
      imageURL: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }
  },
  {
    id: uuid(),
    title: "Red Alfa Romeo C4 on Road Near Trees",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea ipsam labore explicabo exercitationem odit? Quas praesentium aperiam necessitatibus corporis excepturi!",
    imageURL:
      "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "18000",
    colors: [
      "#a85025",
      "#1f8a70",
      "#820000",
      "#ff0032",
    ],
    category: {
      name: 'Clothes',
      imageURL: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }
  },
  {
    id: uuid(),
    title: "Red Coupe Soft-top on Road",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea ipsam labore explicabo exercitationem odit? Quas praesentium aperiam necessitatibus corporis excepturi!",
    imageURL:
      "https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "100000",
    colors: [
      "#a85025",
      "#2563eb",
      "#84d2c5",
      "#13005a",

    ],
    category: {
      name: 'Cars',
      imageURL: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }
  },
  {
    id: uuid(),
    title: "Yellow Mercedes-benz Beside Trees",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea ipsam labore explicabo exercitationem odit? Quas praesentium aperiam necessitatibus corporis excepturi!",
    imageURL:
      "https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "20000",
    colors: [
      
      "#3c2a21",
      "#6c4ab6",
      "#cb1c8d",
      "#000000",
      "#645c00",
      
    ],
    category: {
      name: 'Watches',
      imageURL: 'https://images.unsplash.com/photo-1585123334904-845d60e97b29?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }
  },
  {
    id: uuid(),
    title: "Silver Bmw Sedan",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea ipsam labore explicabo exercitationem odit? Quas praesentium aperiam necessitatibus corporis excepturi!",
    imageURL:
      "https://images.pexels.com/photos/951318/pexels-photo-951318.jpeg",
    price: "13000",
    colors: [
      "#820000",
      "#ff0032",
    ],
    category: {
      name: 'Sockes',
      imageURL: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   }
  },
];

export const formInputList: IformInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "number",
  },
];

export const colors: string[] = [
  "#a85025",
  "#2563eb",
  "#84d2c5",
  "#13005a",
  "#a31acb",
  "#ff6e31",
  "#3c2a21",
  "#6c4ab6",
  "#cb1c8d",
  "#000000",
  "#645c00",
  "#1f8a70",
  "#820000",
  "#ff0032",
];

export const categories: ICategories[] =[
    {
        id: uuid(),
        name: 'Cars',
        imageURL: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: uuid(),
        name: 'Clothes',
        imageURL: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: uuid(),
        name: 'Shoes',
        imageURL: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: uuid(),
        name: 'Watches',
        imageURL: 'https://images.unsplash.com/photo-1585123334904-845d60e97b29?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: uuid(),
        name: 'Sockes',
        imageURL: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
]