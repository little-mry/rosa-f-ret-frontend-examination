import AddImg from '../assets/add.png';

export default function MenuItems (){
    return (
    <div className="MenuItems" >
        <img src={AddImg} alt="Add symbol" className="MenuItemsImg"/>

            <div className='CoffeeInfo'>
            <h2>Kaffesort</h2>
            <p>Info om kaffet</p>
            </div>

        <p className='Sum'>50 kr</p>
    </div>
    );
}