import { useState } from 'react'
import './AddItemForm.css'

function AddItemForm({ onAddItem }) {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('1')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim()) {
      onAddItem(name.trim(), quantity)
      setName('')
      setQuantity('1')
    }
  }

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
        <button type="submit" className="add-button">
          <span className="add-icon">+</span>
        </button>
      </div>
    </form>
  )
}

export default AddItemForm

