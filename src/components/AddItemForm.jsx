import { useState } from "react";
import "./AddItemForm.css";

function AddItemForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [category, setCategory] = useState("mercado");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onAddItem(name.trim(), quantity, category);
      setName("");
      setQuantity("1");
      setCategory("mercado");
    }
  };

  return (
    <form className="add-item-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="item-input"
          placeholder="Digite o item..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="off"
        />
        <input
          type="number"
          className="quantity-input"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Qtd"
        />
        <select
          className="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Categoria"
        >
          <option value="mercado">Mercado</option>
          <option value="farmacia">Farmácia</option>
          <option value="natural">Natural</option>
          <option value="outros">Outros</option>
        </select>
        <button type="submit" className="add-button">
          <span className="add-icon">+</span>
        </button>
      </div>
    </form>
  );
}

export default AddItemForm;
