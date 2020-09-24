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
import PanelDesigners from './panel-designers';
import PanelTimePieces from './panel-timepieces';
import PanelJewelry from './panel-jewelry';
import PanelStyle from './panel-style';
import PanelOccassion from './panel-occassion';
import PanelBridal from './panel-bridal';

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

link{color:#ff0000;}




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
              <Box style={{fontSize:'20px', margin:'20px 0 0 20px'}}>{searchLabel}</Box>
              <Box>
                <Input
                  id="search"
                  type="text"
                  value={query}
                  onChange={search}
                  placeholder={searchInputLabel}
                  style={{fontSize:'80%', width:'90%', margin:'0 auto'}}
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
            <PanelDesigners />
    </TabPanel>
    <TabPanel style={{padding:''}}>
            <PanelJewelry />
    </TabPanel>
    <TabPanel style={{padding:''}}>
           <PanelTimePieces />
    </TabPanel>
    <TabPanel style={{padding:''}}>
          <PanelStyle />
    </TabPanel>
    <TabPanel style={{padding:''}}>
           <PanelOccassion />        
    </TabPanel>
    <TabPanel style={{padding:''}}>
          <PanelBridal />
    </TabPanel>
  </Tabs>



</div>
</div>


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
