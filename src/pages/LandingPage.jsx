import Navbar from "../components/Navbar.jsx"
import TransactionCard from "../components/TransactionCard.jsx"
import '../App.css'
import { useState } from "react"
import { BiDownload } from "react-icons/bi"
import { BsSearch } from "react-icons/bs"

const LandingPage = () => {
  const [transactionCompany, setTransactionCompany] = useState("")
  const [transactionAmount, setTransactionAmount] = useState(0)
  const [transactionDate, setTransactionDate] = useState(0)
  return (
    <div>
      <Navbar />
      <div style={{width: "40rem", margin: "auto"}}>
        <div className="searchbar-div" style={{display: "flex", gap: "2rem", alignItems:"center", margin: "1rem 0"}}>
          <div className="searchbar"style={{width: "100%", display: "flex", alignItems: "center", border: "1px solid #e3e3e3", padding: "0.5rem 1rem", borderRadius: "20px", gap: "1rem"}}>
            <div ><BsSearch/></div>
            <input type="text" placeholder="Search by name or email" style={{border: "none", outline: "none", width: "100%"}}/>
          </div>
          <div className="download" style={{color: "#142c90"}}><BiDownload/></div>
        </div>
        <div>
          <p>Filter by</p>
          <div style={{display: "flex", gap: "0.5rem", marginTop: "1rem", color: "#142c90"}}>
            <p style={{backgroundColor: "#d2feff", borderRadius: "20px", padding: "0.2rem 1rem", border: "1px solid #e3e3e3"}}>Date Last  90 days</p>
            <p style={{backgroundColor: "#d2feff", borderRadius: "20px", padding: "0.2rem 1rem", border: "1px solid #e3e3e3"}}>Type</p>
            <p style={{backgroundColor: "#d2feff", borderRadius: "20px", padding: "0.2rem 1rem", border: "1px solid #e3e3e3"}}>Status</p>
          </div>
        </div>
        <div className="card-components" style={{display: "flex", flexDirection: "column", padding: "1rem", gap: "1rem"}}>
          <div>
            <TransactionCard transactionCompany={"Name.com Inc."} transactionDate={22} transactionAmount={8.89} />
          </div>
          <div>
            <TransactionCard transactionCompany={"Name.com Inc."} transactionDate={21} transactionAmount={8.99} />
          </div>
          <div>
            <TransactionCard transactionCompany={"Name.com Inc."} transactionDate={20} transactionAmount={9.99} />
          </div>
          <div>
            <TransactionCard transactionCompany={"Name.com Inc."} transactionDate={19} transactionAmount={9.99} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
