import React from 'react'
import { Link } from 'gatsby'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import styled from "styled-components"
const CustomBox = styled.div`
background:#fff;
// a img{width:52px; height:48px; border:0px solid; }
.selover:hover{background:#eee;}
a{text-decoration:none; color:#264C5A;}
.presearch img{
  margin:5px 2px; border:1px solid #eee; border-radius:100%;
  width:52px; height:48px;}

  .presearch div{padding:5px}



  .masonry { /* Masonry container */
    column-count: 4;
    column-gap: 1em;
    width:100%;
}

.item { /* Masonry bricks or child elements */
    background-color: #eee;
    display: inline-block;
    margin: 0 0 1em;
    width: 100%;
    text-align:center;
}
.wrapper {
    width: 95%;
    margin: 3em auto;
}

.masonry {
    margin: 1.5em 0;
    padding: 0;
    -moz-column-gap: 1.5em;
    -webkit-column-gap: 1.5em;
    column-gap: 1.5em;
    font-size: .85em;
}

.item {
    display: inline-block;
    background: #fff;
    padding: 1em;
    margin: 0 0 1.5em;
    width: 100%;
	-webkit-transition:1s ease all;
    box-sizing: border-box;
    // -moz-box-sizing: border-box;
    // -webkit-box-sizing: border-box;
    // box-shadow: 2px 2px 4px 0 #ccc;
}
.item img{max-width:100%;}

@media only screen and (min-width: 400px) {
    .masonry {
        -moz-column-count: 2;
        -webkit-column-count: 2;
        column-count: 2;
    }
}

@media only screen and (min-width: 700px) {
    .masonry {
        -moz-column-count: 3;
        -webkit-column-count: 3;
        column-count: 3;
    }
}

@media only screen and (min-width: 900px) {
    .masonry {
        -moz-column-count: 4;
        -webkit-column-count: 4;
        column-count: 4;
    }
}

@media only screen and (min-width: 1100px) {
    .masonry {
        -moz-column-count: 5;
        -webkit-column-count: 5;
        column-count: 5;
    }
}

@media only screen and (min-width: 1280px) {
    .wrapper {
        width: 1260px;
    }
}



`
const PanelStyle = () => (
<CustomBox>


   

<Tabs style={{border:'0px solid #222', borderRadius:'0', overflow:'scroll-y',display:'flex', flexDirection:'row', padding:'1rem'}}>
    <TabList style={{display:'flex', flexDirection:'column', paddingTop:'.7rem'}}>
    <h4>Choose Style:</h4>
      <Tab>Metal Type</Tab>
      <Tab>Gemstone</Tab>
      <Tab>Shapes</Tab>
      <Tab>Birthstone</Tab>
    </TabList>
 
    <TabPanel style={{padding:'.5rem 1rem', color:'#333'}}>
    <h1>Metal Types</h1>
    
    <div style={{}}>
(Click to view available items)
    </div>


    <section className="presearch"
      style={{
        display: `grid`,
        gridTemplateColumns: `repeat( auto-fit, minmax(100px, 1fr) )`,
        gridGap: 10,
        justifyContent: "space-around",
        width:'auto',
        height:'auto',
        maxHeight:'80vh',
        overflow:'scroll-y',
        
      }}
    >

    <div style={{display:'flex', flexDirection:'row', justifyContent: `space-between`, width:'100%'}}>
      <div>
        <div className="selover"
          style={{
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `space-evenly`,
            alignItems:'center',
            padding: 10,
            marginBottom:10,
            border: `1px solid #eee`,
            borderRadius: 8,
          }}
        >
           <Link to=""><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/05/white-gold-jewelry-search.png"  alt="pav-and-broome-" /></Link>
           <Link to="">White<br />Gold</Link>
        </div>

        <div className="selover"
          style={{
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `space-between`,
            alignItems:'center',
            padding: 10,
            border: `1px solid #eee`,
            borderRadius: 8,
          }}
        >
           <Link to=""><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/05/tricolor-jewelry-search.png"  alt="pav-and-broome-" /></Link>
           <Link to="">Tri-<br />Color</Link>
        </div>
    </div>



    <div>
        <div className="selover"
          style={{
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `space-between`,
            alignItems:'center',
            padding: 10,
            marginBottom:10,
            border: `1px solid #eee`,
            borderRadius: 8,
          }}
        >
           <Link to=""><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/05/yellow-gold-jewelry-search.png"  alt="pav-and-broome-" /></Link>
           <Link to="">Yellow<br />Gold</Link>
        </div>

        <div className="selover"
          style={{
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `space-between`,
            alignItems:'center',
            padding: 10,
            border: `1px solid #eee`,
            borderRadius: 8,
          }}
        >
           <Link to=""><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/05/white-yellow-gold-jewelry-search.png"  alt="pav-and-broome-" /></Link>
          <Link to="">White w/<br /> Yellow Gold</Link>

          
        </div>
    </div>

<div>
    <div className="selover"
          style={{
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `space-between`,
            alignItems:'center',
            padding: 10,
            marginBottom:10,
            border: `1px solid #eee`,
            borderRadius: 8,
          }}
        >
           <Link to=""><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/05/rose-gold-jewelry-search.png"  alt="pav-and-broome-" /></Link>
           <Link to="">Rose<br />Gold</Link>
        </div>

        <div className="selover"
          style={{
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `space-between`,
            alignItems:'center',
            padding: 10,
            border: `1px solid #eee`,
            borderRadius: 8,
          }}
        >
           <Link to=""><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/05/rose-white-gold-jewelry-search.png"  alt="pav-and-broome-" /></Link>
           <Link to="">White w/<br />Rose Gold</Link>
        </div>
    </div>



    <div>
    <div className="selover"
          style={{
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `space-between`,
            alignItems:'center',
            padding: 10,
            border: `1px solid #eee`,
            borderRadius: 8,
          }}
        >
           <Link to=""><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/05/silver-jewelry-search.png"  alt="pav-and-broome-" /></Link>
           <Link to="">Silver</Link>
        </div>
    </div>



</div>

        </section>

    </TabPanel>

    <TabPanel style={{padding:'.5rem 1rem', color:'#333'}}>
    <h1>Gemstone</h1>
    
    <section className="presearch"
      style={{
        display: `grid`,
        gridTemplateColumns: `repeat( auto-fit, minmax(100px, 1fr) )`,
        gridGap: 20,
        justifyContent: "space-around",
        width:'65vw',
        height:'auto',
        maxHeight:'68vh',
        overflow:'scroll',
        
      }}
    >

<div className="item"><Link to=""><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/05/amethyst-jewelry-search.png" alt="" />
<br />Amethyst</Link>
</div>

<div className="item"><Link to=""><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/05/aquamarine-jewelry-search.png" alt="" />
<br />Aquamarine</Link>
</div>

<div className="item"><Link to=""><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/05/citrine-jewelry-search.png" alt="" />
<br />Citrine</Link>
</div>

<div className="item"><Link to=""><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/05/diamond-jewelry-search.png" alt="" />
<br />Diamond</Link>
</div>

<div className="item"><Link to=""><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/05/emerald-jewelry-search.png" alt="" />
<br />Emerald</Link>
</div>

<div className="item"><Link to=""><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/05/garnet-jewelry-search.png" alt="" />
<br />Garnet</Link>
</div>

<div className="item"><Link to=""><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/05/opal-jewelry-search.png" alt="" />
<br />Opal</Link>
</div>

<div className="item"><Link to=""><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/05/onyx-jewelry-search.png" alt="" />
<br />Onyx</Link>
</div>

<div className="item"><Link to=""><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/05/pearl-jewelry-search.png" alt="" />
<br />Pearl</Link>
</div>

<div className="item"><Link to=""><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/05/peridot-jewelry-search.png" alt="" />
<br />Peridot</Link>
</div>

<div className="item"><Link to=""><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/05/ruby-jewelry-search.png" alt="" />
<br />Ruby</Link>
</div>

<div className="item"><Link to=""><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/05/sapphire-jewelry-search.png" alt="" />
<br />Sapphire</Link>
</div>

<div className="item"><Link to=""><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/05/spinel-jewelry-search.png" alt="" />
<br />Spinel</Link>
</div>

<div className="item"><Link to=""><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/05/tanzanite-jewelry-search.png" alt="" />
<br />Tanzanite</Link>
</div>

<div className="item"><Link to=""><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/05/topaz-jewelry-search.png" alt="" />
<br />Topaz</Link>
</div>

<div className="item"><Link to=""><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/05/tourmaline-jewelry-search.png" alt="" />
<br />Tourmaline</Link>
</div>

<div className="item"><Link to=""><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/05/turquoise-jewelry-search.png" alt="" />
<br />Turquoise</Link>
</div>

<div className="item"><Link to=""><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/05/zircon-jewelry-search.png" alt="" />
<br />Zircon</Link>
</div>


</section>

    </TabPanel>



    <TabPanel style={{padding:'.5rem 1rem', color:'#333'}}>
    <h1>Shapes</h1>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
    </TabPanel>


    <TabPanel style={{padding:'.5rem 1rem', color:'#333'}}>
      <h1>Birthstones</h1>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
    </TabPanel>

    </Tabs>


</CustomBox>
)
export default PanelStyle