import { useState } from "react";
import "./App.css";
import { Item } from "./components/Item";

function App() {
  const mainItem =
    "https://plus.unsplash.com/premium_photo-1666318300512-8b159e275945";

  const items = [
    "https://images.unsplash.com/photo-1667286170985-3e18ee349b97",
    "https://images.unsplash.com/photo-1667615983516-5e724e6fc348",
    "https://images.unsplash.com/photo-1667530269833-34e6823185d0",
  ];

  return (
    <div className="App">
      <Item title="Title 1" mainItem={mainItem} items={items} />
      <Item title="Title 2" mainItem={mainItem} items={items} />
      <Item title="Title 3" mainItem={mainItem} items={items} />
      <Item title="Title 4" mainItem={mainItem} items={items} />
      <Item title="Title 5" mainItem={mainItem} items={items} />
    </div>
  );
}

export default App;
