import { Nav, Navbar,NavDropdown } from 'react-bootstrap';
import { Link ,useNavigate} from 'react-router-dom'
function Header() {
    let navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user_info"));
  function logout() {
    localStorage.clear();
    navigate("/login");

  }
    
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto nav_bar_wraper">
                    {
                        localStorage.getItem('user_info')?
                            <>
                                <Link to="/"> Product List</Link>

                                <Link to="/add">Add Product</Link>
                                <Link to="/update">Update Product</Link>
                            </> :
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </>
                    }


                </Nav>
                <Nav>
                    {
                         localStorage.getItem('user_info')?
                         <NavDropdown title="user name">
                         <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                         <NavDropdown.Item>{user && user.first_name}</NavDropdown.Item>
 
                     </NavDropdown>:null
                    }
                   
                   

                </Nav>
            </Navbar>
        </div>
    )
}

export default Header