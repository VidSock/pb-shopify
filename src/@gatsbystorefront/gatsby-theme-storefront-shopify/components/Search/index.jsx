import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyLink from 'gatsby-link';
import { Index } from 'elasticlunr';
import { Flex, Box, Text } from 'rebass';
import { Input } from '@rebass/forms';
import styled from '@emotion/styled';

import { useSearchContext } from './context';
import SearchIcon from '../Icons/SearchIcon';
import Close from '../Icons/Close';
import strings from './strings.json';

const { searchLabel, searchInputLabel } = strings;

const Sidebar = styled(Box)`
  position: fixed;
  overflow: auto;
  z-index: 1;
  top: 0;
  right: 0;
  height: 100%;
  padding-top:100px;
`;

const DisabledArea = styled(Box)`
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  opacity: 1 ;

  overflow: 'hidden';


   display:block;

   margin:0 auto;

  cursor:default;

   transition: all 0.15s;

  animation:fade 1s forwards;
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
    <React.Fragment>
      <SearchIcon
        width="34px"
        height="34px"
        onClick={toggleSidebar}
        sx={{ cursor: 'pointer', }}
      />
      {showSidebar ? (
        <React.Fragment>
          <Sidebar width={[1, 1 / 3, 1 / 4]} sx={{ bg: 'white' }}>

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
              <Box>{searchLabel}</Box>
              <Box>
                <Input
                  id="search"
                  type="text"
                  value={query}
                  onChange={search}
                  placeholder={searchInputLabel}
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
          <DisabledArea onClick={toggleSidebar} />
        </React.Fragment>
      ) : (
        ''
      )}
    </React.Fragment>
  );
};

export default Search;
