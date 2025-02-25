import { useEffect, useState } from "react";
import AddImg from "../assets/add.png";
import { getMenu, MenuItem } from "../Services/api";


export default function MenuItems() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

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

  return (
    <>
      <div className="MenuItems">
        <section className="cont" key={campaignOffer.id}>
          <figure className="img">
            <img src={AddImg} alt="Add symbol" className="btn-size" />
          </figure>
          <section className="info">
            <h3 className="top">{campaignOffer.title}....</h3>
            <p className="desc">{campaignOffer.desc}</p>
          </section>
          <section className="sum">
            <h4>{campaignOffer.price}kr</h4>
          </section>
        </section>

        {menuItems.map((item) => (
          <section className="cont" key={item.id}>
            <figure className="img">
              <img src={AddImg} alt="Add symbol" className="btn-size" />
            </figure>
            <section className="info">
              <h3 className="top">{item.title}....</h3>
              <p className="desc">{item.desc}</p>
            </section>
            <section className="sum">
              <h4>{item.price}kr</h4>
            </section>
          </section>
        ))}
      </div>
    </>
  );
}