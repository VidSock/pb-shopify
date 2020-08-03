import React, { useState, useEffect } from 'react';
import { Button } from 'rebass';
import { navigate } from 'gatsby';

import useShopifyFunctions from '@gatsbystorefront/gatsby-theme-storefront-shopify/src/hooks/useShopifyFunctions';
import { useCurrentVariantContext } from '@gatsbystorefront/gatsby-theme-storefront-shopify/src/templates/product/CurrentVariantContext';
import strings from '@gatsbystorefront/gatsby-theme-storefront-shopify/src/templates/product/strings.json';

const ProductVariantAddToCart = ({ amount, cartUrl }) => {
  const { addItem } = useShopifyFunctions();
  const { currentVariant } = useCurrentVariantContext();
  const [disabled, setDisabled] = useState(false);

  const { productAddToCartButton, productAddToCartSoldoutButton } = strings;

  async function addToCartHandler(id, amount) {
    await addItem({ variantId: id, quantity: amount });
    navigate(cartUrl);
  }

  useEffect(() => {
    if (currentVariant && currentVariant.hasOwnProperty('availableForSale')) {
      currentVariant.availableForSale ? setDisabled(false) : setDisabled(true);
    }
  }, [currentVariant]);

  return (
   
    <Button
      disabled={disabled}
      width={['80vw', '300px']}
      onClick={() => {
        addToCartHandler(currentVariant.shopifyId, amount);
      }}
      variant={!disabled ? 'primary' : 'disabled'} >
      {!disabled ? productAddToCartButton : productAddToCartSoldoutButton}
    </Button>
    
  );
};

export default ProductVariantAddToCart;
