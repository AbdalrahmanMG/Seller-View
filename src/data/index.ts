import { v4 as uuid } from 'uuid';
import { IformInput, IProduct } from '../interfaces/indes';


export const productList: IProduct[] =[
    {
        id:uuid(),
        title: 'Blue Bmw Sedan Near Green Lawn Grass',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea ipsam labore explicabo exercitationem odit? Quas praesentium aperiam necessitatibus corporis excepturi!',
        imageURL: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price: '5000'
    },
    {
        id:uuid(),
        title: 'Red Alfa Romeo C4 on Road Near Trees',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea ipsam labore explicabo exercitationem odit? Quas praesentium aperiam necessitatibus corporis excepturi!',
        imageURL: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price: '18000'
    },
    {
        id:uuid(),
        title: 'Red Coupe Soft-top on Road',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea ipsam labore explicabo exercitationem odit? Quas praesentium aperiam necessitatibus corporis excepturi!',
        imageURL: 'https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price: '100000'
    },
    {
        id:uuid(),
        title: 'Yellow Mercedes-benz Beside Trees',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea ipsam labore explicabo exercitationem odit? Quas praesentium aperiam necessitatibus corporis excepturi!',
        imageURL: 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price: '20000'
    },
    {
        id:uuid(),
        title: 'Silver Bmw Sedan',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea ipsam labore explicabo exercitationem odit? Quas praesentium aperiam necessitatibus corporis excepturi!',
        imageURL: 'https://images.pexels.com/photos/951318/pexels-photo-951318.jpeg',
        price: '13000'
    },
]

export const formInputList: IformInput[] =[
    {
        id: 'title',
        name: 'title',
        label: 'Product Title',
        type: 'text',
    },
    {
        id: 'description',
        name: 'description',
        label: 'Product description',
        type: 'text',
    },
    {
        id: 'image',
        name: 'imageURL',
        label: 'Product Image URL',
        type: 'text',
    },
    {
        id: 'price',
        name: 'price',
        label: 'Product Price',
        type: 'number',
    },
]