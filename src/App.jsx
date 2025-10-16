import { useState, useEffect } from "react";
import { database } from "./firebase";
import { ref, onValue, push, update, remove } from "firebase/database";
import Header from "./components/Header";
import AddItemForm from "./components/AddItemForm";
import ShoppingList from "./components/ShoppingList";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const itemsRef = ref(database, "shoppingList");

    const unsubscribe = onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const itemsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        // Ordenar: não comprados primeiro, depois comprados
        itemsArray.sort((a, b) => {
          if (a.bought === b.bought) {
            return b.timestamp - a.timestamp;
          }
          return a.bought ? 1 : -1;
        });
        setItems(itemsArray);
      } else {
        setItems([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addItem = (name, quantity, category) => {
    const itemsRef = ref(database, "shoppingList");
    push(itemsRef, {
      name,
      quantity: parseInt(quantity) || 1,
      bought: false,
      category: category || "outros",
      timestamp: Date.now(),
    });
  };

  const toggleBought = (id, currentStatus) => {
    const itemRef = ref(database, `shoppingList/${id}`);
    update(itemRef, {
      bought: !currentStatus,
    });
  };

  const deleteItem = (id) => {
    const itemRef = ref(database, `shoppingList/${id}`);
    remove(itemRef);
  };

  const clearBoughtItems = () => {
    items.forEach((item) => {
      if (item.bought) {
        deleteItem(item.id);
      }
    });
  };

  const boughtCount = items.filter((item) => item.bought).length;
  const totalCount = items.length;

  return (
    <div className="app">
      <Header totalCount={totalCount} boughtCount={boughtCount} />
      <div className="container">
        <AddItemForm onAddItem={addItem} />
        {loading ? (
          <div className="loading">Carregando...</div>
        ) : (
          <ShoppingList
            items={items}
            onToggleBought={toggleBought}
            onDeleteItem={deleteItem}
            onClearBought={clearBoughtItems}
          />
        )}
      </div>
    </div>
  );
}

export default App;
