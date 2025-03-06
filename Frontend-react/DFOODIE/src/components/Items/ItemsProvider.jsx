import React,{  useState } from "react";
import ItemsContext from "./ItemsContext";

const ItemProvider=({children})=>{
    const [items]=useState([
        {id : 1, name: "Caesar Salad", category: "Salad", price: 300, image:"/assets/salad/salad1.webp",title:"Creamy and savory; can be high in calories but nutritious with added protein."},
        {id : 2, name: "Greek Salad", category: "Salad", price: 500, image:"/assets/salad/salad2.webp",title:"Fresh and tangy; rich in antioxidants and healthy fats."},
        {id : 3, name: "Waldorf Salad", category: "Salad", price: 500, image:"/assets/salad/salad3.webp",title:"Sweet and crunchy; packed with fiber and vitamins."},
        {id : 4, name: "Caprese Salad", category: "Salad", price: 500, image:"/assets/salad/salad4.webp",title:"Mild and refreshing; rich in calcium and healthy fats."},
        {id : 5, name: "Nicoise Salad", category: "Salad", price: 500, image:"/assets/salad/salad5.webp",title:"Savory and protein-packed; great for heart health."},
        {id : 6, name: "Cobb Salad", category: "Salad", price: 500, image:"/assets/salad/salad6.webp",title:"Rich and hearty; high in protein but can be calorie-dense."},
        {id : 7, name: "Coleslaw", category: "Salad", price: 500, image:"/assets/salad/salad7.webp",title:"Creamy and slightly sweet; good for digestion but can be high in mayo."},
        {id : 8, name: "Tabbouleh", category: "Salad", price: 500, image:"/assets/salad/salad8.webp",title:"Light and herby; rich in fiber and vitamins."},
        {id : 9, name: "Kachumber Salad", category: "Salad", price: 500, image:"/assets/salad/salad9.webp",title:"Spicy and tangy; hydrating and great for digestion."},
        {id : 10, name: "Fattoush Salad", category: "Salad", price: 500, image:"/assets/salad/salad10.webp",title:" Zesty and fresh; packed with vitamins and fiber."},
        {id : 11, name: "Russian Salad", category: "Salad", price: 500, image:"/assets/salad/salad11.webp",title:"Creamy and slightly sweet; a mix of veggies with mayo."},
        {id : 12, name: "Pasta Salad", category: "Salad", price: 500, image:"/assets/salad/salad12.webp",title:"Savory and filling; high in carbs but nutritious with veggies."},
        {id : 13, name: "Quinoa Salad", category: "Salad", price: 500, image:"/assets/salad/salad13.webp",title:"Nutty and wholesome; a great source of protein and fiber."},
        {id : 14, name: "Beetroot Salad", category: "Salad", price: 500, image:"/assets/salad/salad14.webp",title:"Earthy and slightly sweet; good for blood circulation."},
        {id : 15, name: "Fruit Chaat", category: "Salad", price: 500, image:"/assets/salad/salad15.webp",title:"Sweet and spicy; loaded with vitamins and antioxidants."},
        {id : 16, name: "Corn Salad", category: "Salad", price: 500, image:"/assets/salad/salad16.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 17, name: "Chicken Shawarma", category: "Rolls", price: 500, image:"/assets/Rolls/rolls1.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 18, name: "Mutton Kebab Roll", category: "Rolls", price: 500, image:"/assets/Rolls/rolls2.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 19, name: "Paneer Tikka Roll", category: "Rolls", price: 500, image:"/assets/Rolls/rolls3.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 20, name: "Veg Seekh Roll", category: "Rolls", price: 500, image:"/assets/Rolls/rolls4.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 21, name: "Chocolate Mousse", category: "Deserts", price: 500, image:"/assets/Deserts/deserts1.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 22, name: "Carrot Halwa", category: "Deserts", price: 500, image:"/assets/Deserts/deserts2.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 23, name: "Gulab Jamun", category: "Deserts", price: 500, image:"/assets/Deserts/deserts3.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 24, name: "Rasgulla Delight", category: "Deserts", price: 500, image:"/assets/Deserts/deserts4.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 25, name: "Grilled Chicken Sandwich", category: "Sandwich", price: 500, image:"/assets/Sandwich/sandwich1.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 26, name: "Spicy Fish Sandwich", category: "Sandwich", price: 500, image:"/assets/Sandwich/sandwich2.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 27, name: "Veg Club Sandwich", category: "Sandwich", price: 500, image:"/assets/Sandwich/sandwich3.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 28, name: "Paneer Tikka Sandwich", category: "Sandwich", price: 500, image:"/assets/Sandwich/sandwich4.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 29, name: "Chocolate Lava Cake", category: "Cake", price: 500, image:"/assets/Cake/cake1.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 30, name: "Red Velvet Cake", category: "Cake", price: 500, image:"/assets/Cake/cake2.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 31, name: "Fruit Cake", category: "Cake", price: 500, image:"/assets/Cake/cake3.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 32, name: "Banoffee Cake", category: "Cake", price: 500, image:"/assets/Cake/cake4.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 33, name: "Aloo Gobi", category: "Pure Veg", price: 500, image:"/assets/Pure Veg/pureveg1.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 34, name: "Paneer Butter Masala", category: "Pure Veg", price: 500, image:"/assets/Pure Veg/pureveg2.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 35, name: "Dal Tadka", category: "Pure Veg", price: 500, image:"/assets/Pure Veg/pureveg3.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 36, name: "Veg Pulao", category: "Pure Veg", price: 500, image:"/assets/Pure Veg/pureveg4.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 37, name: "Chicken Alfredo", category: "Pasta", price: 500, image:"/assets/Pasta/pasta1.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 38, name: "Pesto Pasta", category: "Pasta", price: 500, image:"/assets/Pasta/pasta2.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 39, name: "Mac n Cheese", category: "Pasta", price: 500, image:"/assets/Pasta/pasta3.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 40, name: "Spaghetti Bolognese", category: "Pasta", price: 500, image:"/assets/Pasta/pasta4.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 41, name: "Chow Mein", category: "Noodles", price: 500, image:"/assets/Noodles/noodles1.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 42, name: "Hakka Noodles", category: "Noodles", price: 500, image:"/assets/Noodles/noodles2.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 43, name: "Vegetable Noodles", category: "Noodles", price: 500, image:"/assets/Noodles/noodles3.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 44, name: "Egg Noodles", category: "Noodles", price: 500, image:"/assets/Noodles/noodles4.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 45, name: "Mango Lassi", category: "Beverages", price: 500, image:"/assets/Beverages/beverages1.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 46, name: "Cold Coffee", category: "Beverages", price: 500, image:"/assets/Beverages/beverages2.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 47, name: "Iced Tea", category: "Beverages", price: 500, image:"/assets/Beverages/beverages3.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 48, name: "Lemonade Fizz", category: "Beverages", price: 500, image:"/assets/Beverages/beverages4.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 49, name: "Corn Soup", category: "Soups", price: 500, image:"/assets/Soups/soups1.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 50, name: "Mutton Shorba", category: "Soups", price: 500, image:"/assets/Soups/soups2.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 51, name: "Tomato Soup", category: "Soups", price: 500, image:"/assets/Soups/soups3.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 52, name: "Sweet Corn Soup", category: "Soups", price: 500, image:"/assets/Soups/soups4.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 53, name: "Butter Chicken", category: "Gravy", price: 500, image:"/assets/Gravy/gravy1.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 54, name: "Rogan Josh", category: "Gravy", price: 500, image:"/assets/Gravy/gravy2.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 55, name: "Lamb Vindaloo", category: "Gravy", price: 500, image:"/assets/Gravy/gravy3.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 56, name: "Chicken Tikka Masala", category: "Gravy", price: 500, image:"/assets/Gravy/gravy4.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 57, name: "Corn Salad", category: "Kce Hostel", price: 500, image:"/assets/salad/salad16.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 58, name: "Corn Salad", category: "Kce Hostel", price: 500, image:"/assets/salad/salad16.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 59, name: "Corn Salad", category: "Kce Hostel", price: 500, image:"/assets/salad/salad16.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
        {id : 60, name: "Corn Salad", category: "Kce Hostel", price: 500, image:"/assets/salad/salad16.webp",title:"Crunchy and mildly sweet; rich in fiber and good for digestion."},
      ]);


    return(
        <>
        <ItemsContext.Provider value={[items]}>
            {children}
        </ItemsContext.Provider>
        </>
    )
};

export default ItemProvider;