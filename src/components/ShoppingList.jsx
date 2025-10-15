import ShoppingItem from './ShoppingItem'
import './ShoppingList.css'

function ShoppingList({ items, onToggleBought, onDeleteItem, onClearBought }) {
  const boughtItems = items.filter(item => item.bought)

  if (items.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📝</div>
        <p>Nenhum item na lista</p>
        <p className="empty-subtitle">Adicione itens acima para começar!</p>
      </div>
    )
  }

  return (
    <div className="shopping-list">
      {items.map(item => (
        <ShoppingItem
          key={item.id}
          item={item}
          onToggleBought={onToggleBought}
          onDelete={onDeleteItem}
        />
      ))}
      
      {boughtItems.length > 0 && (
        <button className="clear-button" onClick={onClearBought}>
          🗑️ Limpar itens comprados ({boughtItems.length})
        </button>
      )}
    </div>
  )
}

export default ShoppingList

