import React from "react";
import ReactDom  from "react-dom/client";
import "./index.css"

const pizza1Data = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function App() {
    return (
  <div className="container">
    <h1>Welcome To</h1>
    <Header />
    <Menu />
    <Footer />
  </div>
    );
}

function Header(){
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>

        </header>
    )}
function Menu(){
  const pizzas = pizza1Data
  const numpizzas = pizzas.length

    return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numpizzas > 0 ? (
        <>
        <p>
         Authentic Italian cuisine. 6 creative dishes to choose from. All
         from our stone oven, all organic, all delicious.
        </p>

         <ul className="pizzas">
         {pizza1Data.map((data) =>( 
         <Pizza pizzaobj={data} key={data.name} />
        ))}
     </ul>
        </>
         
      ):(<p>We're still working on our menu</p>)
      
        }
     
  
     

    
    
 </main>
    )
      }

function Pizza({pizzaobj}){

    return(
        <li className={`pizza ${pizzaobj.soldOut ? "sold-out" : ""}`} >
            <img src={pizzaobj.photoName} alt="ERROR!"></img>
            <div>
            <h3>{pizzaobj.name}</h3>
            <p>{pizzaobj.ingredients}</p>
            <span>{pizzaobj.price}</span>

            </div>
           
        </li>)
    }

function Footer(){
    const hour = new Date().getHours()
    // console.log(hour)
    const openHour = 9
    const closeHour = 23 

    const isOpen = hour>=openHour && hour<=closeHour
    console.log(isOpen);

    // console.log(closeHour);

    const timing = hour>=openHour && hour<=closeHour ? "open" : "we're closed right now"

    // if(hour >= openHour && hour <= closeHour)
    //     alert("We're currently open")
    // else    
    //     alert("Sorry we're closed")
    
     //return React.createElement("footer", null, "We are currently open")
    return (
    <footer className="footer">
      {isOpen && (
        <Order />
       )}
      
      
      </footer>
    )
    function Order(){
      return(
        <div className="order">
        <p>We're open until {closeHour}:00. Come visit us or order online.</p> 
        
        <button className="btn">Order</button> 
       </div> 
      )
    }
   
}


const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<App />)