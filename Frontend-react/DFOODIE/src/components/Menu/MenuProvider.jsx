import React,{useState} from "react";
import MenuContext from "./MenuContext";
import Menu from "./Menu";

const MenuProvider=({children})=>{
    const [menuItems]=useState([
        { name: "Salad", image: "src/assets/menu/salad-menu.jpg" },
        { name: "Rolls", image: "src/assets/menu/rolls-menu.jpg" },
        { name: "Deserts", image: "src/assets/menu/deserts-menu.jpg" },
        { name: "Sandwich", image: "src/assets/menu/sandwich-menu.jpg" },
        { name: "Cake", image: "src/assets/menu/cake-menu.jpg" },
        { name: "Pure Veg", image: "src/assets/menu/pureveg-menu.jpg" },
        { name: "Pasta", image: "src/assets/menu/pasta-menu.jpg" },
        { name: "Noodles", image: "src/assets/menu/noodles-menu.jpg" },
        { name: "Beverages", image: "src/assets/menu/bevarages-menu.jpg" },
        { name: "Soups", image: "src/assets/menu/soup-menu.jpg" },
        { name: "Gravy", image: "src/assets/menu/gravy-menu.jpg" },
        { name: "Kce Hostel", image: "src/assets/menu/noodles-menu.jpg" }
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