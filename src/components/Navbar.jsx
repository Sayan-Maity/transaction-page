import { Link } from "react-router-dom"
import { AiFillBell, AiFillSetting } from "react-icons/ai"
import Logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div style={{width: "100%", background: "#142c90", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", gap: "8rem", padding: "1rem", color: "#fff"}}>
      <div style={{display: "flex",alignItems: "center", gap: "2rem"}}>
        <div className="logo">
          <img src={Logo} alt="paypal-logo" height="25rem"/>
        </div>
        <div className="links" style={{display: "flex", color: "#fff"}}>
          <Link to="/" style={{color: "#fff", padding: "0.5rem 1rem", textDecoration: "none"}}>Home</Link>
          <Link to="/" style={{color: "#fff", padding: "0.5rem 1rem", textDecoration: "none"}}>Finance</Link>
          <Link to="/" style={{color: "#fff", padding: "0.5rem 1rem", textDecoration: "none"}}>Send and Request</Link>
          <Link to="/" style={{color: "#fff", padding: "0.5rem 1rem", textDecoration: "none"}}>Deals</Link>
          <Link to="/" style={{color: "#fff", padding: "0.5rem 1rem", textDecoration: "none"}}>Wallet</Link>
          <Link to="/" style={{color: "#fff", padding: "0.5rem 1rem", backgroundColor: "#24409a", borderRadius: "20px", textDecoration: "none"}}>Activity</Link>
          <Link to="/" style={{color: "#fff", padding: "0.5rem 1rem", textDecoration: "none"}}>Help</Link>
        </div>
      </div>
      <div className="profile" style={{display: "flex", alignItems: "center", gap: "0.5rem"}}>
        <div className="bell"><AiFillBell /></div>
        <div className="setting"><AiFillSetting/></div>
        <div className="logout"><span>LOG OUT</span></div>
      </div>
    </div>
  )
}

export default Navbar
