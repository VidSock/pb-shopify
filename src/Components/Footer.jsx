import React from 'react'
import { Link } from 'gatsby'








const Footer = class extends React.Component {
  render() {
    return (
	    
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          



 





<div style={{textAlign: 'center', margin: '2rem 0 1rem 0', justifyContent: 'center', fontSize: '90%'}}><Link to="/disclaimer/">Disclaimer</Link>  |  <Link to="/privacy/">Privacy Policy</Link>  |  <Link to="/terms/">Terms of Service</Link></div>



<div style={{textAlign: 'center', margin: '0 0 1rem 0', justifyContent: 'center', fontSize: '70%'}}>Copyright &copy; {(new Date().getFullYear())} Dress Up CHef</div>
        </div>
      </footer>
      
    )
  }
}

export default Footer

