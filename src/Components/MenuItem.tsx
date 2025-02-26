import { useEffect, useState } from "react";
import AddImg from "../assets/add.png";
import { getMenu, MenuItem } from "../Services/api";
import { useCart } from "./CartContext";

export default function MenuItems() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchMenu = async () => {
      const menu = await getMenu();
      setMenuItems(menu);
    };
    fetchMenu();
  }, []);

  const campaignOffer = {
    id: "campaign", 
    title: "Kampanjerbjudande",
    desc: "Bryggkaffe + bakelse",
    price: 49,
  };

  const handleAddItem = (id: string, title: string, price: number) => {
    addToCart(id, title, price);
  };

  return (
    <>
      <div className="MenuItems">
        <section className="cont" key={campaignOffer.id}>
          <figure className="img">
            <img 
              src={AddImg} 
              alt="Add symbol" 
              className="btn-size" 
              onClick={() => handleAddItem(campaignOffer.id, campaignOffer.title, campaignOffer.price)}
            />
          </figure>
         
          <h3 className="top">{campaignOffer.title}</h3>
          <div className="menu_dotted_line"></div>
          <p className="desc">{campaignOffer.desc}</p>
          
          <section className="sum">
            <h4>{campaignOffer.price}kr</h4>
          </section>
        </section>

        {menuItems.map((item) => (
          <section className="cont" key={item.id}>
            <figure className="img">
              <img 
                src={AddImg} 
                alt="Add symbol" 
                className="btn-size"
                onClick={() => handleAddItem(item.id, item.title, item.price)}
              />
            </figure>
           
            <h3 className="top">{item.title}</h3>
            <div className="menu_dotted_line"></div>
            <p className="desc">{item.desc}</p>
            
            <section className="sum">
              <h4>{item.price}kr</h4>
            </section>
          </section>
        ))}
      </div>
    </>
  );
}