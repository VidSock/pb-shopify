import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyLink from 'gatsby-link';
import { Index } from 'elasticlunr';
import { Flex, Box, Text } from 'rebass';
import { Input } from '@rebass/forms';
import styled from '@emotion/styled';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { Link } from 'gatsby'
import { useSearchContext } from './context';
import SearchIcon from '../Icons/SearchIcon';
import Close from '../Icons/Close';
import strings from './strings.json';

const { searchLabel, searchInputLabel } = strings;

const CustomBox = styled.div`
@media (max-width: 48rem) {
 #sidebarr{
    padding-top:200px !important;
 }
}

.presearch{text-align:center;}
.presearch img{
  max-width:100%;
  // max-height:20vh;
  background-attachment: fixed;
  background-size: cover;
border-radius:12px;
}
.presearch div{max-height:200px}






.react-tabs__tab{
	display: inline-block;
	margin-bottom: -1px;
	padding: 12px 15px;
	border: 0px solid #ccc;
	background: #eee;
	color: #666;
	font-size: 12px; 
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 1px;
	cursor: pointer;	
  transition: all 0.3s;
  border-radius:0;
}
.react-tabs__tab:hover {
	// border-top-color: #333;
	color: #333;
}

.react-tabs__tab-list {
  border-bottom: 1px solid #aaa;
  margin: 0 0;
  padding: 0;
  }

  .react-tabs__tab--selected{
    background: #ccc;
  }




`;

const Sidebar = styled(Box)`
  position: fixed;
  overflow: auto;
  z-index: 3;
  top: 0;
  right: 0;
  height: 100vh;
    padding-top:100px;

`;

const DisabledArea = styled(Box)`
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1 ;
  overflow: 'hidden';
   display:block;
   margin:0 auto;
  padding:0;
  cursor:default;
   transition: all 0.15s;
  animation:fade .8s forwards;
  overflow-y:auto;
  background: rgba(0,0,0,0.50);
  backdrop-filter: blur(10px);
  width:100%;
  height:100vh;


  @keyframes fade {
    0%{
          opacity: 0;
       }
       20%{
        opacity: 0;
     }
       100% {
          opacity:1;
       }
    
    }

`;

const SearchItem = styled(Box)`
  &: hover {
    opacity: 0.4;
    background: #eee;
  }
`;

const Search = () => {
  const data = useStaticQuery(graphql`
    query searchIndexQueryAndSearchIndexQuery {
      siteSearchIndex {
        index
      }
    }
  `);

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showSidebar, setShowsidebar] = useState(false);
  const { searchShowed, setSearchShowed } = useSearchContext();
  let index;

  const getOrCreateIndex = () =>
    index ? index : Index.load(data.siteSearchIndex.index);

  const search = evt => {
    const query = evt.target.value;
    index = getOrCreateIndex();
    setQuery(query);
    setResults(
      index
        .search(query, {})
        // Map over each ID and return the full document
        .map(({ ref }) => index.documentStore.getDoc(ref))
    );
  };

  const toggleSidebar = () => {
    setShowsidebar(!showSidebar);
    setSearchShowed(!searchShowed);
  };




  return (
    <CustomBox> 
    <React.Fragment>
      <SearchIcon
        width="34px"
        height="34px"
        onClick={toggleSidebar}
        sx={{ cursor: 'pointer', }}
      />
      {showSidebar ? (
        <React.Fragment>
          <Sidebar id="sidebarr" width={[1, 1 / 3, 1 / 4]} sx={{ bg: 'white' }}>

          <div onClick={toggleSidebar} style={{position:'absolute', top:'20px', right:'104px' }}>
          <Flex
                onClick={toggleSidebar}
                justifyContent="space-between"
                alignItems="center"
                mb={2}
                width={1}
              >
                
                <Box ml="auto">
                  <Close
                    width="30px"
                    height="30px"
                    color=""
                    sx={{ cursor: 'pointer' }}
                  />
                </Box>
              </Flex> 
                  </div>

            <Flex flexDirection="column" m={[1, 2]} style={{marginTop:'-50px'}}>
              {/* <Flex
                onClick={toggleSidebar}
                justifyContent="space-between"
                alignItems="center"
                mb={2}
                width={1}
              >
                <Box>{searchLabel}</Box>
                <Box ml="auto">
                  <Close
                    width="30px"
                    height="30px"
                    color=""
                    sx={{ cursor: 'pointer' }}
                  />
                </Box>
              </Flex> */}
              <Box style={{fontSize:'20px', margin:'20px 0 0 0'}}>{searchLabel}</Box>
              <Box>
                <Input
                  id="search"
                  type="text"
                  value={query}
                  onChange={search}
                  placeholder={searchInputLabel}
                  style={{fontSize:'80%'}}
                />
              </Box>
            
              <Box>
                {results.map(page => (
                  <SearchItem key={page.id} m={2}>
                    <Text
                      as={GatsbyLink}
                      variant="searchLink"
                      to={page.shopifyThemePath}
                    >
                      <Box>{page.title}</Box>
                    </Text>
                  </SearchItem>
                ))}
              </Box>
            </Flex>
          </Sidebar>
          
          <DisabledArea>







<div style={{display:'block', width:'100vw', height:'100vh', border:'0px solid red', position:'absolute', zIndex:'1', borderRadius:'12px', position:'absolute'}}></div>


            <div style={{display:'flex',  alignItems:'center', justifyContent:'center', border:'0px solid red', marginTop:'14vh', height:'75vh', width:'75vw', position:'absolute', zIndex:'2', top:'0' }}>
              <div style={{background:'#fff', padding:'0', border:'0px solid red', boxShadow:'0 2px 3px 3px #999', borderRadius:'12px', position:'absolute', top:'0' }}>








              <Tabs style={{minWidth:'40vw', width:'68vw', minHeight:'40vh', border:'1px solid #222', borderRadius:'12px', overflow:'hidden',}}>
    <TabList>
      <Tab>Designers</Tab>
      <Tab>Jewelry</Tab>
      <Tab>Timepieces</Tab>
      <Tab>Style</Tab>
      <Tab>Occasion</Tab>
      <Tab>Bridal</Tab>
    </TabList>
 
    <TabPanel style={{padding:'.5rem 1rem', color:'#333'}}>
      <h4>Browse Our World Renown Jewelry Designers</h4>


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
      
        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `space-between`,
            padding: 0,
            border: `1px solid #ccc`,
            borderRadius: 8,
          }}
        >
          <a href="https://pavandbroome.com/designers-collections/pav-broome-signature-collection-2/"><span><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/04/pav-and-broome-sig-collection-jewelry-search.png" width="260" height="188" alt="pav-and-broome-sig-collection-jewelry-search" /></span></a>

        </div>


        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `space-between`,
            padding: 0,
            border: `1px solid #ccc`,
            borderRadius: 8,
          }}
        >
          <a href="https://pavandbroome.com/designers-jewelry/a-jaffe/"><span><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/04/ajaffe-logo-and-pic-jewelry-search.png" width="260" height="188" alt="AJaffe designer jewelry engagement rings" /></span></a>

        </div>


        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `space-between`,
            padding: 0,
            border: `1px solid #ccc`,
            borderRadius: 8,
          }}
        >
          <a href="https://pavandbroome.com/designers-jewelry/benchmark/"><span><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/04/benchmark-jewelry-search.png" width="260" height="188" alt="benchmark--jewelry-search" /></span></a>

        </div>


        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `space-between`,
            padding: 0,
            border: `1px solid #ccc`,
            borderRadius: 8,
          }}
        >
          <a href="https://pavandbroome.com/designers-jewelry/gabriel-co/"><span><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/04/gabriel-co-jewelry-search.png" width="260" height="188" alt="gabriel-co-jewelry-search"/></span></a>

        </div>


        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `space-between`,
            padding: 0,
            border: `1px solid #ccc`,
            borderRadius: 8,
          }}
        >
          <a href="/designers-collections/facet-barcelona/"><span><img  src="https://pavandbroome.com/admin/wp-content/uploads/2020/04/facet-barcelona-jewelry-search.png" width="260" height="188" alt="facet-barcelona-jewelry-search" /></span></a>

        </div>




        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `space-between`,
            padding: 0,
            border: `1px solid #ccc`,
            borderRadius: 8,
          }}
        >
          <a href="https://pavandbroome.com/ashi/"><span><img  src="https://pavandbroome.com/admin/wp-content/uploads/2020/04/ashi-jewelry-search.png" width="260" height="188" alt="ashi-jewelry-search" /></span></a>

        </div>

        



        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `space-between`,
            padding: 0,
            border: `1px solid #ccc`,
            borderRadius: 8,
          }}
        >
<a href="https://pavandbroome.com/designers-collections/memoire/"><span><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/04/memoire-jewelry-search.png" width="260" height="188" alt="memoire-jewelry-search" /></span></a>

        </div>


        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `space-between`,
            padding: 0,
            border: `1px solid #ccc`,
            borderRadius: 8,
          }}
        >
<a href="https://pavandbroome.com/designers-collections/michael-m/"><span><img  src="https://pavandbroome.com/admin/wp-content/uploads/2020/04/michael-m-jewelry-search.png" width="260" height="188" alt="michael-m-jewelry-search" /></span></a>


        </div>



        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `space-between`,
            padding: 0,
            border: `1px solid #ccc`,
            borderRadius: 8,
          }}
        >

<a href="https://pavandbroome.com/designers-collections/mikimoto/"><span><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/04/mikimoto-jewelry-search.png" width="260" height="188" alt="mikimoto-jewelry-search" /></span></a>
        </div>



        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `space-between`,
            padding: 0,
            border: `1px solid #ccc`,
            borderRadius: 8,
          }}
        >
<a href="/simon-g/"><span><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/04/simon-g-jewelry-search.png"  width="260" height="188" alt="mikimoto-jewelry-search" /></span></a>

        </div>




        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `space-between`,
            padding: 0,
            border: `1px solid #ccc`,
            borderRadius: 8,
          }}
        >
<a href="https://pavandbroome.com/engagement-rings/parade/"><span><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/04/parade-jewelry-search.png" width="260" height="188" alt="mikimoto-jewelry-search" /></span></a>

        </div>




        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `space-between`,
            padding: 0,
            border: `1px solid #ccc`,
            borderRadius: 8,
          }}
        >

<a href="/engagement-rings/zeghani/"><span><img src="https://pavandbroome.com/admin/wp-content/uploads/2020/04/zeghani-jewelry-search.png"  width="260" height="188" alt="zeghani-jewelry-search" /></span></a>

        </div>
    </section>
    </TabPanel>

    {/* JEWELRY */}
    <TabPanel style={{padding:'1rem'}}>
      <h2>Jewelry</h2>
<ul id="jewerlrySelector" style={{
        display: `grid`,
        gridTemplateColumns: `repeat( auto-fit, minmax(140px, 1fr) )`,
        gridGap: 10,
        justifyContent: "space-between",
        width:'100%',
        height:'70vh',
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
    <Link>Vintage</Link>
    <Link>Contemporary</Link>
    <Link>Stud</Link>
    <Link>Hoop</Link>
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
    <Link>Vintage</Link>
    <Link>Contemporary</Link>
    <Link>Stackable</Link>

    
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
    <Link>Tennis</Link>
    <Link>Bangle</Link>
    <Link>Cuff</Link>

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
    <Link>Vintage</Link>
    <Link>Contemporary</Link>
    <Link>Layered</Link>
    <Link>Bar</Link>
    <Link>Cross</Link>
    
    
          </li>
</ul>



















    </TabPanel>
    {/* TIMEPIECES */}
    <TabPanel style={{padding:'1rem'}}>
    <h2>Timepieces</h2>
    <p>Da bomb ipsizzle dolizzle sit amizzle, consectetuer adipiscing fo shizzle. Nullam yo velizzle, aliquet volutpizzle, fo shizzle yippiyo, for sure vizzle, arcu. Black eget fo shizzle. Sizzle erizzle. Rizzle at dolizzle dapibizzle turpis tempizzle izzle. Maurizzle crackalackin nibh et check out this. Cool check it out tortizzle. Break it down bling bling rhoncizzle my shizz. Fo hizzle rizzle platea boom shackalack. Gangsta dapibus. Owned tellus urna, pretizzle black, mattizzle ac, eleifend for sure, nunc. Owned suscipizzle. Integizzle sempizzle shiz sed purizzle.</p>

      <p>Da bomb ipsizzle dolizzle sit amizzle, consectetuer adipiscing fo shizzle. Nullam yo velizzle, aliquet volutpizzle, fo shizzle yippiyo, for sure vizzle, arcu. Black eget fo shizzle. Sizzle erizzle. Rizzle at dolizzle dapibizzle turpis tempizzle izzle. Maurizzle crackalackin nibh et check out this. Cool check it out tortizzle. Break it down bling bling rhoncizzle my shizz. Fo hizzle rizzle platea boom shackalack. Gangsta dapibus. Owned tellus urna, pretizzle black, mattizzle ac, eleifend for sure, nunc. Owned suscipizzle. Integizzle sempizzle shiz sed purizzle.</p>
    </TabPanel>
    <TabPanel style={{padding:'1rem'}}>
      <h2>Style</h2>
    </TabPanel>
    <TabPanel style={{padding:'1rem'}}>
      <h2>Occasion</h2>
    </TabPanel>
    <TabPanel style={{padding:'1rem'}}>
      <h2>Bridal</h2>
    </TabPanel>
  </Tabs>





</div>
</div>
              {/* end white area */}

          </DisabledArea>
        </React.Fragment>
      ) : (
        ''
      )}
    </React.Fragment>
    </CustomBox> 
  );
};

export default Search;
