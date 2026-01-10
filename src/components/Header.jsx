
const Header = ({ setSearchTerm }) => {
    return(
        <div>
            <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand">𝓜𝓮𝓮𝓽𝓾𝓹</a>
    <div className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" 
      onChange={(event) => setSearchTerm(event.target.value)}/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </div>
  </div>
</nav>
    </div>
    )
}
export default Header;