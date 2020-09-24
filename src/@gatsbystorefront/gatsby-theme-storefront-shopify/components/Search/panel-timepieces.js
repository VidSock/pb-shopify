import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"
const CustomBox = styled.div`
padding:1rem;
`
const PanelTimePieces = () => (
<CustomBox>

<h2>Timepieces</h2>
    <div style={{
            display: `flex`,
            flexDirection: `row`,
            padding: 0,
            border: `1px solid #ccc`,
            borderRadius: 8,
            textAlign:'center',
            justifyContent: "space-around",
            marginBottom:'.5rem',
            height:'',
 
          }}>

            <div style={{width:'60vw', display:'flex', flexDirection: `column`, textAlign:'center', justifyContent: "space-around", }}>
            <h3>The Pav &amp; Broome Signature Collection</h3>
            <Link to="/">View Pav &amp; Broome Watches</Link>
            </div>

            <img src="https://pavandbroome.com/admin/wp-content/uploads/2018/08/a4152ws-wht-2-300x300.jpg" width="100%" alt="earrings-jewelry-search-trans" style={{margin:'0vh auto', width:'auto', maxHeight:'200px'}} />
            <img src="https://pavandbroome.com/admin/wp-content/uploads/2018/07/a9830trs-brn-300x300.jpg" width="100%" alt="earrings-jewelry-search-trans" style={{margin:'0vh auto', width:'auto', maxHeight:'200px'}} />
            
            

          </div>
          
    <section className="presearch"
      style={{
        display: `grid`,
        gridTemplateColumns: `repeat( auto-fit, minmax(200px, 1fr) )`,
        gridGap: 20,
        justifyContent: "space-around",
        width:'65vw',
        height:'auto',
        maxHeight:'60vh',
        
      }}
    >
      
<ul id="jewerlrySelector" style={{
        display: `grid`,
        gridTemplateColumns: `repeat( auto-fit, minmax(140px, 1fr) )`,
        gridGap: 10,
        justifyContent: "space-between",
        width:'100%',
        height:'40vh',
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
            <img src="https://pavandbroome.com/admin/wp-content/uploads/2020/05/rolex-fine-watches-pic-jewelry-search-rolex-watch-collection.png" width="100%" alt="earrings-jewelry-search-trans" style={{margin:'3vh auto', maxWidth:'70%'}} />
    <h4>The Coast's<br /> Rolex Dealer</h4>
    
    <Link to="/">View Rolex Watches</Link>
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
            <img src="https://pavandbroome.com/admin/wp-content/uploads/2020/05/tudor-fine-watches-pic-jewelry-search-tudor-watch-collection.png" width="100%" height="auto" alt="rings-jewelry-search-trans" style={{margin:'2vh auto', maxWidth:'80%'}} />
            <h4>The Coast's<br /> Tudor Dealer</h4>
    
    <Link to="/">View Tudor Watches</Link>
    
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
            <img src="https://pavandbroome.com/admin/wp-content/uploads/2020/05/fine-watches-pic-jewelry-search-tag-heuer.png" width="100%" height="auto" alt="bracelet-jewelry-search-trans" style={{margin:'2vh auto', maxWidth:'70%'}} />
            <h4>The Coast's<br /> Tag Heuer Dealer</h4>  

    
    <Link to="/">View Tag Heuer Watches</Link>


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
            <img src="https://pavandbroome.com/admin/wp-content/uploads/2020/05/fine-watches-pic-jewelry-search-victorinox.png" width="100%" height="auto" alt="necklace-jewelry-search-trans" style={{margin:'0vh auto', maxWidth:'90%'}} />
            <h4>The Coast's<br /> Victorinox Dealer</h4>  

    
    <Link to="/">View Victorinox Watches</Link>
    
    
          </li>
</ul>


</section>


</CustomBox>
)
export default PanelTimePieces