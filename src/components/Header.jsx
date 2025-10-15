import './Header.css'

function Header({ totalCount, boughtCount }) {
  return (
    <header className="header">
      <h1>🛒 Lista de Compras</h1>
      <div className="stats">
        <span className="stat">
          Total: <strong>{totalCount}</strong>
        </span>
        <span className="stat">
          Comprados: <strong>{boughtCount}</strong>
        </span>
        <span className="stat">
          Faltam: <strong>{totalCount - boughtCount}</strong>
        </span>
      </div>
    </header>
  )
}

export default Header

