import React from 'react';
import { Flex, Box, Heading, Text } from 'rebass';


import IndividualProduct from '@gatsbystorefront/gatsby-theme-storefront-shopify/src/templates/catalog/IndividualProduct.jsx';
import Pagination from '@gatsbystorefront/gatsby-theme-storefront-shopify/src/components/Pagination';
import CollectionStats from '@gatsbystorefront/gatsby-theme-storefront-shopify/src/components/CollectionStats';

// lovedlaura/node_modules/@gatsbystorefront/gatsby-theme-storefront-shopify/src/templates/catalog/CatalogPage.jsx


function CatalogPage(props) {
  const { limit, skip, cartUrl } = props.pageContext;

  const { title, description } = props.data.collection.nodes[0];
  let products = [];

  props.data.collection.nodes.forEach(node => {
    products = [...products, ...node.products];
  });

  return (
    <Flex flexWrap="wrap" px={2} pt={3} mx="auto" style={{ maxWidth: 1300 }}>
      <Flex
        width={1}
        px={4}
        py={2}
        flexWrap={['wrap', 'nowrap']}
        justifyContent="space-between"
        alignItems="flex-end"
      >
        
        <Text
          textAlign={['center', 'right']}
          width={['100%', 'auto']}
          pt={1}
          fontSize={[1, 2, 3]}
        >
          <CollectionStats
            limit={limit}
            skip={skip}
            productsNum={products.length}
          />
        </Text>
      </Flex>
      {products.map((product, index) => {
        product['cartUrl'] = cartUrl;
        if (index + 1 > skip && index + 1 <= skip + limit) {
          return (
            <IndividualProduct key={product.shopifyId} product={product} />
          );
        } else {
          return '';
        }
      })}
      <Box width={1} px={4} py={2} key="pagination">
        <Text textAlign="center">
          <Pagination {...props.pageContext} />
        </Text>
      </Box>
    </Flex>
  );
}

export default CatalogPage;
