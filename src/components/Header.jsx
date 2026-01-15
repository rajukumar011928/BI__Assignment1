import { useNavigate, useLocation, NavLink } from "react-router-dom";
const Header = ({ setSearchTerm }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if(location.pathname !== "/"){
      navigate("/")
    }
  }
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid py-2">
    <NavLink to="/" className="navbar-brand">𝓜𝓮𝓮𝓽𝓾𝓹</NavLink>
    <div className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" 
      onChange={handleSearch}/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </div>
  </div>
</nav>
    </div>
    )
}
export default Header;