import React,{useState} from "react";
import MenuContext from "./MenuContext";
import Menu from "./Menu";

const MenuProvider=({children})=>{
    const [menuItems]=useState([
        { name: "Salad", image: "/assets/menu/salad-menu.jpg" },
        { name: "Rolls", image: "/assets/menu/rolls-menu.jpg" },
        { name: "Deserts", image: "/assets/menu/deserts-menu.jpg" },
        { name: "Sandwich", image: "/assets/menu/sandwich-menu.jpg" },
        { name: "Cake", image: "/assets/menu/cake-menu.jpg" },
        { name: "Pure Veg", image: "/assets/menu/pureveg-menu.jpg" },
        { name: "Pasta", image: "/assets/menu/pasta-menu.jpg" },
        { name: "Noodles", image: "/assets/menu/noodles-menu.jpg" },
        { name: "Beverages", image: "/assets/menu/bevarages-menu.jpg" },
        { name: "Soups", image: "/assets/menu/soup-menu.jpg" },
        { name: "Gravy", image: "/assets/menu/gravy-menu.jpg" },
        { name: "Kce Hostel", image: "/assets/menu/noodles-menu.jpg" }
      ]);

    return(
        <>
        <MenuContext.Provider value={[menuItems]}>
            {children}
        </MenuContext.Provider>
        </>
    );
};

export default MenuProvider;