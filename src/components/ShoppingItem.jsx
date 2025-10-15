import './ShoppingItem.css'

function ShoppingItem({ item, onToggleBought, onDelete }) {
  return (
    <div className={`shopping-item ${item.bought ? 'bought' : ''}`}>
      <div className="item-content" onClick={() => onToggleBought(item.id, item.bought)}>
        <div className="checkbox">
          {item.bought && <span className="check">✓</span>}
        </div>
        <div className="item-details">
          <span className="item-name">{item.name}</span>
          <span className="item-quantity">Qtd: {item.quantity}</span>
        </div>
      </div>
      <button 
        className="delete-button" 
        onClick={() => onDelete(item.id)}
        aria-label="Excluir item"
      >
        ✕
      </button>
    </div>
  )
}

export default ShoppingItem

