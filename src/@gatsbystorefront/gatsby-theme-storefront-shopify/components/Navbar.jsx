import React, { useState } from 'react';
import { Flex, Text, Box } from 'rebass';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyLink from 'gatsby-link';
import styled from '@emotion/styled';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import logo from '../../../images/pb-logo-color.png'
import Menu from './Menu';
import Search from './Search';
import ShoppingBag from './Icons/ShoppingBag';
import ShoppingCart from './Icons/ShoppingCart';
import strings from './strings.json';
import { Link } from 'gatsby'

const CustomBox = styled.div`
}


.header1 {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    box-shadow: none;
    // background-color: #FC466B;
    position: fixed;
    height: 60px!important;
    overflow: hidden;
    z-index: 10;
}
#sidebarMenu {
    height: 100%;
    position: fixed;
    z-index:3;
    right: 0;
    bottom:0;
    top:0;
    width: 250px;
    // margin-top: 60px;
    transform: translateX(250px);
    transition: transform 250ms ease-in-out;
    // background: linear-gradient(180deg, #FC466B 0%, #3F5EFB 100%);
      // background: rgba(196,22,37,.9);
      background: rgba(20,20,20,.99);
      border-left:1px solid rgba(255, 255, 255, 0.10);
}
.sidebarMenuInner{
    margin:60px 0 0 0;
    padding:0;
    border-top: 1px solid rgba(255, 255, 255, 0.10);
}
.sidebarMenuInner li{
    list-style: none;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    padding: 20px;
    // cursor: pointer;
    border-bottom: 1px solid rgba(255, 255, 255, 0.10);
}
.sidebarMenuInner li span{
    display: block;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.70);
}
.sidebarMenuInner li a{
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
}
input[type="checkbox"]:checked ~ #sidebarMenu {
    transform: translateX(0);
}
input[type=checkbox] {
    transition: all 0.3s;
    box-sizing: border-box;
    display: none;
}
.sidebarIconToggle {
    transition: all 0.3s;
    box-sizing: border-box;
    cursor: pointer;
    position: fixed;
    z-index: 4;
    height: 100%;
    width: 100%;
    top: 22px;
    right: 22px;
    height: 42px;
    width: 42px;
}


.spinner {
    transition: all 0.3s;
    box-sizing: border-box;
    position: absolute;
    height: 5px;
    width: 100%;
    background-color: #333;
}

input[type="checkbox"]:checked ~ #menupop .spinner{
  background-color: #fff !important;
}



.horizontal {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 5px;
    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.5);
}
.diagonal.part-1 {
    position: relative;
    transition: all 0.3s;
    box-sizing: border-box;
    float: left;
    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.5);
}
.diagonal.part-2 {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 5px;
    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.5);
}
input[type=checkbox]:checked ~ .sidebarIconToggle > .horizontal {
    transition: all 0.3s;
    box-sizing: border-box;
    opacity: 0;
    box-shadow: 0px 1px 1px 1px rgba(255, 255, 255, 0.5);
}
input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-1 {
    transition: all 0.3s;
    box-sizing: border-box;
    transform: rotate(135deg);
    margin-top: 8px;
    box-shadow: 0px 1px 1px 1px rgba(255, 255, 255, 0.5);
}
input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-2 {
    transition: all 0.3s;
    box-sizing: border-box;
    transform: rotate(-135deg);
    margin-top: -14px;
    box-shadow: 0px 1px 1px 1px rgba(255, 255, 255, 0.5);
}
.header{background:transparent !important; width:auto;}
.modal-btn{box-shadow:none;}
.modal-btn:hover{background:#222;}

@media (max-width: 48rem) {
  #rolex-clock-mobile{display:block !important;}
}
@media (min-width: 48rem) {
  #rolex-clock-desk{display:block !important;}
}
`


const { ariaShoppingCartLabel, ariaHomaPageLinkLabel } = strings;

const NavbarBase = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Nav = styled(NavbarBase)`
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.2);
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  transition: all 200ms ${(props) => (props.show ? 'ease-in' : 'ease-out')};
  transform: ${(props) => (props.show ? 'none' : 'translate(0, -100%)')};
`;

const Navbar = (props) => {
  const [hideNavbarOnScroll, setHideNavbarOnScroll] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      // Note: prevPos.y > -12 is here to fix Nav component disappearing bug
      // due to elastic scrolling/bounce effect in mobile Safari.
      const isShow = currPos.y > prevPos.y || prevPos.y > -12;
      if (isShow !== hideNavbarOnScroll) setHideNavbarOnScroll(isShow);
    },
    [hideNavbarOnScroll],
    null,
    false,
    100
  );

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          gatsbyStorefrontConfig {
            storeName
            logoUrl
            menu {
              handle
              id
              link
              name
              parentId
              type
            }
          }
        }
      }
    }
  `);

  const {
    storeName,
    logoUrl,
    menu,
  } = data.site.siteMetadata.gatsbyStorefrontConfig;

  return (
    <CustomBox> 
    <Nav show={hideNavbarOnScroll}>
      <Box py={3} width={1} as="nav" style={{background: 'linear-gradient(90deg, rgba(202,211,214,1) 0%, rgba(255,255,255,1) 10%, rgba(202,211,214,1) 100%)'}}>

        {/* <div id="rolex-clock" style={{width:'150px', height:'70px', position:'absolute', left:'2vw', top:'10px'}}>
<a href="https://pavandbroome.com/rolex/" style={{position:'absolute', zIndex:'1', top:'0', left:'0', display:'block', height:'70px', width:'150px',  border:'0px solid red',}}>
</a>
 <iframe id="rolex_retailer" src="https://static.rolex.com/retailers/clock/?colour=gold&amp;apiKey=d8039e0fd25ac17bfcc3a0957d0c06bd&amp;lang=en_us"  scrolling="no" frameBorder="no" style={{width:'150px', height:'70px', border:'0', margin:'0', padding:'0', overflow:'hidden', position:'absolute', top:'0', left:'0', scroll:'none', zIndex:'0'}}></iframe>
</div> */}


          

          <Text
            as={GatsbyLink}
            to="/"
            aria-label={ariaHomaPageLinkLabel}
            style={{ textDecoration: 'none' }}
            ml="auto"
          >
            {/* {logoUrl ? (
              <img src={logoUrl} alt={storeName} />
            ) : (
              <>
                <ShoppingBag
                  m="auto"
                  width={['25px', '30px']}
                  height={['25px', '30px']}
                  color="secondary"
                />

                <Text
                  color="primary"
                  fontSize={[2, 3]}
                  sx={{ display: ['none', 'block'] }}
                >
                  {storeName}
                </Text>
              </>
            )} */}
            
          <div style={{display:'inline-block', zIndex:'1', position:'relative' }}><img src={logo} style={{maxHeight:'60px', marginLeft:'3vw'}} /></div>


<div style={{position:'absolute', top:'20px', right:'170px'}}>
<Text
              as={GatsbyLink}
              aria-label={ariaShoppingCartLabel}
              to="/cart"
              fontSize={3}
              style={{ textDecoration: 'none', color:'#fff' }}
              ml="auto"
            >
              
              <ShoppingCart width="30px" height="30px" />
             
            </Text>
</div>

          <div id="rolex-clock-desk" style={{width:'150px', height:'70px', position:'absolute', top:'10px', right:'240px', display:'none' }}>
<a href="https://pavandbroome.com/rolex/" style={{position:'absolute', zIndex:'1', top:'0', left:'0', display:'block', height:'70px', width:'150px',  border:'0px solid red',}}>
</a>
 <iframe id="rolex_retailer" src="https://static.rolex.com/retailers/clock/?colour=gold&amp;apiKey=d8039e0fd25ac17bfcc3a0957d0c06bd&amp;lang=en_us"  scrolling="no" frameBorder="no" style={{width:'150px', height:'70px', border:'0', margin:'0', padding:'0', overflow:'hidden', position:'absolute', top:'0', left:'0', scroll:'none', zIndex:'0'}}></iframe>
</div>
          
          </Text>


          <Box ml="auto" style={{marginRight:'0'}} >
              
            </Box>
            
            {/* <Box style={{marginRight:'10vw'}}>
            <Menu menu={menu} />
          </Box> */}
          
          <div style={{position:'absolute', top:'20px', right:'100px'}}><Search width="25px" height="25px" color="secondary" /></div>
          
</Box>
    </Nav>
          <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
  <label htmlFor="openSidebarMenu" className="sidebarIconToggle" id="menupop">
 
    <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
    {/* <div className="txtshadow" style={{textShadow:'2px', color:'#ff0000', margin:'28px 0 0 -4px'}}>MENU</div> */}
  </label>



  

   <div id="sidebarMenu">

   

    <ul className="sidebarMenuInner">
   {/* <li><Search width="25px" height="25px" color="secondary" /></li>  */}
      {/* <li>Todd Lambert <span>Web Developer</span></li> */}



      <li>
              <Link className="navbar-item txtshadow" to="/simong/">
                Simon G
                {/* <span>Learn more about us</span> */}
              </Link>
      </li>
      <li>
              <Link className="navbar-item txtshadow" to="/parade/">
                Parade
                {/* <span>Learn more about us</span> */}
              </Link>
      </li>



    </ul>

    <div id="rolex-clock-mobile" style={{width:'150px', height:'70px', position:'absolute', bottom:'5vh', left:'20%', display:'none' }}>
<a href="https://pavandbroome.com/rolex/" style={{position:'absolute', zIndex:'1', top:'0', left:'0', display:'block', height:'70px', width:'150px',  border:'0px solid red',}}>
</a>
 <iframe id="rolex_retailer" src="https://static.rolex.com/retailers/clock/?colour=gold&amp;apiKey=d8039e0fd25ac17bfcc3a0957d0c06bd&amp;lang=en_us"  scrolling="no" frameBorder="no" style={{width:'150px', height:'70px', border:'0', margin:'0', padding:'0', overflow:'hidden', position:'absolute', top:'0', left:'0', scroll:'none', zIndex:'0'}}></iframe>
</div>


  </div>



  


            


      
    </CustomBox> 
  );
};

export default Navbar;
