import ShoppingItem from "./ShoppingItem";
import "./ShoppingList.css";

function ShoppingList({ items, onToggleBought, onDeleteItem, onClearBought }) {
  const boughtItems = items.filter((item) => item.bought);

  // Agrupa itens por categoria mantendo ordem original
  const categoriesOrder = ["mercado", "farmacia", "natural", "outros"];
  const grouped = categoriesOrder.map((cat) => ({
    key: cat,
    title: cat.charAt(0).toUpperCase() + cat.slice(1),
    items: items.filter((i) => (i.category || "outros") === cat),
  }));

  if (items.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📝</div>
        <p>Nenhum item na lista</p>
        <p className="empty-subtitle">Adicione itens acima para começar!</p>
      </div>
    );
  }

  return (
    <div className="shopping-list">
      {grouped.map((group) => (
        <div key={group.key} className="category-group">
          <div className="category-title">{group.title}</div>
          {group.items.length === 0 ? (
            <div className="empty-category">Sem itens</div>
          ) : (
            group.items.map((item) => (
              <ShoppingItem
                key={item.id}
                item={item}
                onToggleBought={onToggleBought}
                onDelete={onDeleteItem}
              />
            ))
          )}
        </div>
      ))}

      {boughtItems.length > 0 && (
        <button className="clear-button" onClick={onClearBought}>
          🗑️ Limpar itens comprados ({boughtItems.length})
        </button>
      )}
    </div>
  );
}

export default ShoppingList;
