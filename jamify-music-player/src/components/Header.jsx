

export function Header({ pageName, placeholder }) {
  

  return (
    <>
      <header className="top-header">
        <h1>{pageName}</h1>
        <div className="search-box">
          <input type="text" id="searchInput" placeholder={placeholder} />
        </div>
      </header>
    </>
  )
}