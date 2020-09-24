import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"
const CustomBox = styled.div`
padding:1rem;
`
const PanelJewelry = () => (
<CustomBox>

<h2>Jewelry</h2>
    <section className="presearch"
      style={{
        display: `grid`,
        gridTemplateColumns: `repeat( auto-fit, minmax(200px, 1fr) )`,
        gridGap: 20,
        justifyContent: "space-around",
        width:'65vw',
        height:'auto',
        maxHeight:'60vh',
        overflow:'scroll',
        
      }}
    >
      
<ul id="jewerlrySelector" style={{
        display: `grid`,
        gridTemplateColumns: `repeat( auto-fit, minmax(140px, 1fr) )`,
        gridGap: 10,
        justifyContent: "space-between",
        width:'100%',
        height:'50vh',
        overflow:'scroll',
        margin:'0',
        padding:'0',
        listStyleType:'none'
        
      }}>
<li style={{
            display: `flex`,
            flexDirection: `column`,
            padding: 5,
            border: `1px solid #ccc`,
            borderRadius: 8,
            textAlign:'center',
            justifyContent: "space-around",
          }}>
    <h4>Browse<br /> All Earrings</h4>
    <img src="https://pavandbroome.com/admin/wp-content/uploads/2020/04/earrings-jewelry-search-trans.png" width="100%" alt="earrings-jewelry-search-trans" />
    <Link to="/">Vintage</Link>
    <Link to="/">Contemporary</Link>
    <Link to="/">Stud</Link>
    <Link to="/">Hoop</Link>
          </li>
          <li style={{
            display: `flex`,
            flexDirection: `column`,
            padding: 5,
            border: `1px solid #ccc`,
            borderRadius: 8,
            textAlign:'center',
            justifyContent: "space-around",
          }}>
    <h4>Browse<br /> All Rings</h4> 
    <img src="https://pavandbroome.com/admin/wp-content/uploads/2020/04/ring-jewelry-search-2.png" width="100%" height="auto" alt="rings-jewelry-search-trans" style={{margin:'2vh auto', maxWidth:'70%'}} />
    <Link to="/">Vintage</Link>
    <Link to="/">Contemporary</Link>
    <Link to="/">Stackable</Link>

    
          </li>
          <li style={{
            display: `flex`,
            flexDirection: `column`,
            padding: 5,
            border: `1px solid #ccc`,
            borderRadius: 8,
            textAlign:'center',
            justifyContent: "space-around",
          }}>
    <h4>Browse<br /> All Bracelets</h4>    

    <img src="https://pavandbroome.com/admin/wp-content/uploads/2020/04/bracelet-pic-jewelry-search-trans.png " width="100%" height="auto" alt="bracelet-jewelry-search-trans" style={{margin:'0vh auto', maxWidth:'90%'}} />
    <Link to="/">Tennis</Link>
    <Link to="/">Bangle</Link>
    <Link to="/">Cuff</Link>

          </li>
          <li style={{
            display: `flex`,
            flexDirection: `column`,
            padding: 5,
            border: `1px solid #ccc`,
            borderRadius: 8,
            textAlign:'center',
            justifyContent: "space-around",
          }}>
    <h4>Browse<br /> All Necklaces</h4>   

    <img src="https://pavandbroome.com/admin/wp-content/uploads/2020/04/necklace-pic-jewelry-search-trans.png" width="100%" height="auto" alt="necklace-jewelry-search-trans" style={{margin:'0vh auto', maxWidth:'90%'}} />
    <Link to="/">Vintage</Link>
    <Link to="/">Contemporary</Link>
    <Link to="/">Layered</Link>
    <Link to="/">Bar</Link>
    <Link to="/">Cross</Link>
    
    
          </li>
</ul>


</section>


</CustomBox>
)
export default PanelJewelry