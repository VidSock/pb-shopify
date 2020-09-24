import React from 'react'
import { Link } from 'gatsby'
import Image from '../Image'
// import logo from '../../../../images/pb-logo-color.png'
import styled from "styled-components"
const CustomBox = styled.div`

padding:1rem;



`
const PanelOccassion = () => (
<CustomBox>

<h2>Occassions</h2>
    
<section className="presearch"
      style={{
        display: `grid`,
        gridTemplateColumns: `repeat( auto-fit, minmax(200px, 1fr) )`,
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




</CustomBox>
)
export default PanelOccassion