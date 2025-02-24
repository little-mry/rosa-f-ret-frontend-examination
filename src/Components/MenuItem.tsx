import { useEffect, useState } from 'react';
import AddImg from '../assets/add.png';
import {getMenu, MenuResponse, MenuItem} from '../Services/api';


export default function MenuItems (){
    const [menuItems, setMenuItems] = useState<MenuItem[]>([])
    useEffect( () => {
        const fetchMenu = async () => {
            const menu = await getMenu ()
            console.log(menu)
            setMenuItems (menu)
        } 
        fetchMenu()
    }, []) 
    return (
    <div className="MenuItems" >

        <img src={AddImg} alt="Add symbol" className="MenuItemsImg"/>
            {menuItems.map((item) => (
               <div key={item.id} className="CoffeeInfo">
               <h3>{item.title}</h3>
               <p>{item.desc}</p>
               <p className="Sum">{item.price} kr</p>
            </div>
            ))}
    </div>
);
}

