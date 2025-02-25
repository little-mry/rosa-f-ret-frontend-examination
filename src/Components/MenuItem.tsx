import { useEffect, useState } from "react";
import AddImg from "../assets/add.png";
import { getMenu, MenuItem } from "../Services/api";

export default function MenuItems() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const menu = await getMenu();
      console.log(menu);
      setMenuItems(menu);
    };
    fetchMenu();
  }, []);
  return (
    <>
      <div className="MenuItems">
        {menuItems.map((item) => (
          // <div
          // 	key={item.id}
          // 	className="CoffeeInfo">
          // 	<img
          // 		src={AddImg}
          // 		alt="Add symbol"
          // 		className="MenuItemsImg"
          // 	/>
          // 	<h3>{item.title}</h3>
          // 	<p>{item.desc}</p>
          // 	<p className="Sum">{item.price} kr</p>
          // </div>
          <section className="cont">
            <figure className="img">
              <img src={AddImg} alt="Add symbol" className="btn-size" />
            </figure>
            <section className="info">
              <h3 className="top">{item.title}......</h3>
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
