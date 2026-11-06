

export function Header({ pageName }) {
  return (
    <>
      <header class="top-header">
        <h1>{pageName}</h1>
        <div class="search-box">
          <input type="text" id="searchInput" placeholder="Search artists..." />
        </div>
      </header>
    </>
  )
}