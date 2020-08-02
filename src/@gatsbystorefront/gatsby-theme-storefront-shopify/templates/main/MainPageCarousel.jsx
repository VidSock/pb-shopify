/** @jsx jsx */
/*eslint no-unused-vars: 0*/
import React from 'react';
import { jsx } from 'theme-ui';
import { Box } from 'rebass';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import '@gatsbystorefront/gatsby-theme-storefront-shopify/src/templates/main/carousel.css';

import MainPageCollectionBlock from '@gatsbystorefront/gatsby-theme-storefront-shopify/src/templates/main/MainPageCollectionBlock';
import MainPageProductBlock from '@gatsbystorefront/gatsby-theme-storefront-shopify/src/templates/main/MainPageProductBlock';
import ChevronLeft from '@gatsbystorefront/gatsby-theme-storefront-shopify/src/components/Icons/ChevronLeft';
import ChevronRight from '@gatsbystorefront/gatsby-theme-storefront-shopify/src/components/Icons/ChevronRight';
import strings from '@gatsbystorefront/gatsby-theme-storefront-shopify/src/templates/main/strings.json';

const { ariaNextButtonLabel, ariaBackButtonLabel } = strings;

const MainPageCarousel = (props) => {
  const { carousel, data } = props;
  return (
    <Box width={1} sx={{ position: 'relative' }}>
      <CarouselProvider
        naturalSlideWidth={1300}
        naturalSlideHeight={800}
        totalSlides={carousel.children.length}
        isPlaying={true}
        infinite={true}
      >
        <Slider>
          {carousel.children.map((slide, index) => {
            if (slide.type === 'collection') {
              return (
                <Slide key={index} index={index}>
                  {data.collections.nodes.map((collection, index) => {
                    if (collection.handle === slide.handle) {
                      return (
                        <MainPageCollectionBlock
                          collection={collection}
                          key={index}
                          textColor={slide.textColor}
                          textBgColor={slide.textBgColor}
                        />
                      );
                    } else {
                      return '';
                    }
                  })}
                </Slide>
              );
            } else if (slide.type === 'product') {
              return (
                <Slide key={index} index={index}>
                  {data.products.nodes.map((product, index) => {
                    if (product.handle === slide.handle) {
                      return (
                        <MainPageProductBlock
                          product={product}
                          key={index}
                          textColor={slide.textColor}
                          textBgColor={slide.textBgColor}
                        />
                      );
                    } else {
                      return '';
                    }
                  })}
                </Slide>
              );
            } else {
              return '';
            }
          })}
          {/* <Slide>Damn</Slide> */}
        </Slider>

        <ButtonBack
          aria-label={ariaBackButtonLabel}
          sx={{
            display: ['none', 'block'],
            position: 'absolute',
            bottom: ['36%', '50%'],
            left: 1,
            'z-index': '2',
            border: 0,
            bg: 'transparent',
            color: 'primary',
            py: 2,
            px: [0, 3],
          }}
        >
          <ChevronLeft width="40px" height="40px" />
        </ButtonBack>

        <ButtonNext
          aria-label={ariaNextButtonLabel}
          sx={{
            display: ['none', 'block'],
            position: 'absolute',
            bottom: ['36%', '50%'],
            right: 1,
            'z-index': '2',
            border: 0,
            bg: 'transparent',
            color: 'primary',
            py: 2,
            px: [0, 3],
          }}
        >
          <ChevronRight width="40px" height="40px" />
        </ButtonNext>

        <DotGroup
          sx={{
            display: ['none', 'block'],
            position: 'absolute',
            bottom: '10%',
            left: ['40%', '45%'],
            'z-index': '2',
            border: 0,
            bg: 'transparent',
            color: 'primary',
            py: '2',
            px: '3',
          }}
        />
      </CarouselProvider>
    </Box>
  );
};

export default MainPageCarousel;
