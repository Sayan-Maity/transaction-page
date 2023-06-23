import Logo from "../assets/logo.png"

const TransactionCard = ({transactionCompany, transactionDate, transactionAmount}) => {
  return (
    <div style={{border: "1px solid #e3e3e3", display: "flex", justifyContent: "space-between", padding: "1rem 0.5rem"}}>
      <div className="left" style={{display: "flex", alignItems: "center", gap: "1rem"}}>
        <div className="company-logo" style={{backgroundColor: "#8bc532", borderRadius: "50%", padding: "0.5rem",}}>
          <img src={Logo} alt="" height="20rem"/>
        </div>
        <div className="description">
          <p style={{fontWeight: "bold", fontSize: "1.1rem"}}>{transactionCompany}</p>
          <p style={{fontSize: "0.9rem"}}>Jan {transactionDate} - Automatic Payment</p>
        </div>
      </div>
      <div className="right"></div>
          <p>-${transactionAmount}</p>
    </div>
  )
}

export default TransactionCard
