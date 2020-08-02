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

const { ariaShoppingCartLabel, ariaHomaPageLinkLabel } = strings;

const NavbarBase = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1030;
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
    <Nav show={hideNavbarOnScroll}>
      <Box py={3} width={1} as="nav" bg="#cad3d6" style={{background: 'linear-gradient(90deg, rgba(202,211,214,1) 0%, rgba(255,255,255,1) 50%, rgba(202,211,214,1) 100%)',}}>
        <Flex
          style={{ maxWidth: 1300 }}
          justifyContent="center"
          alignItems="center"
          mx="auto"
          px={[3, null, 4]}
        >
          <Box>
            <Menu menu={menu} />
            
          </Box>
          
          {/* <Box style={{margin:'0 2rem'}}>
          <Search width="25px" height="25px" color="primary" />
            
          </Box> */}
          

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
          <div><img src={logo} style={{maxHeight:'60px'}} /></div>
          </Text>

          <Flex ml="auto" width={100}>
            <Box ml="auto">
              <Search width="25px" height="25px" color="primary" />
            </Box>

            <Text
              as={GatsbyLink}
              aria-label={ariaShoppingCartLabel}
              to="/jewelry/cart"
              fontSize={4}
              style={{ textDecoration: 'none' }}
              ml="auto"
            >
              <ShoppingCart width="25px" height="25px" color="primary" />
            </Text>



{/* <div id="rolex-clock" style={{width:'150px', height:'70px', position:'absolute', right:'2vw', top:'10px'}}>
<a href="https://pavandbroome.com/rolex/" style={{position:'absolute', zIndex:'1', top:'0', left:'0', display:'block', height:'70px', width:'150px',  border:'0px solid red',}}>
</a>
 <iframe id="rolex_retailer" src="https://static.rolex.com/retailers/clock/?colour=gold&amp;apiKey=d8039e0fd25ac17bfcc3a0957d0c06bd&amp;lang=en_us"  scrolling="no" frameBorder="no" style={{width:'150px', height:'70px', border:'0', margin:'0', padding:'0', overflow:'hidden', position:'absolute', top:'0', left:'0', scroll:'none', zIndex:'0'}}></iframe>
</div> */}




          </Flex>
        </Flex>
      </Box>
    </Nav>
  );
};

export default Navbar;
