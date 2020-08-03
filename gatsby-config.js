require('dotenv').config({ path: `.env` });
const flattenMenu = require('@gatsbystorefront/gatsby-theme-storefront-shopify/src/utils/flattenMenu');

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: '@gatsbystorefront/gatsby-theme-storefront-shopify',
      options: {
        shopName: process.env.GATSBY_SHOP_NAME,
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        basePath: '/',
        shopifyLite: false,
        enableWebp: true,
        imageQuality: '95',
        manifest: {
          name: 'Pav & Broome',
          short_name: 'Pav & Broome',
          start_url: '/',
          background_color: '#fff',
          theme_color: '#333',
          display: 'standalone',
          icon: 'src/images/shopping_bag.svg',
          cache_busting_mode: 'none',
        },
      },
    },
  ],
  siteMetadata: {
    siteUrl: 'https://pavandbroome.netlify.app',
    gatsbyStorefrontConfig: {
      storeName: 'Pav & Broome Fine Jewlery',
      storeDescription: 'Where the Coast gets engaged',
      email: 'info@gatsbystorefront.com',
      company: 'Pav & Broome',
      location: 'Gulfport, MS',
      address: '1 Centre St.',
      phone: '+1 (800) 123-1234',
      workingDays: 'Mon - Fri',
      workingHours: '8AM - 6PM',
      socialNetworks: [
        'https://facebook.com',
        'https://instagram.com',
        'https://pinterest.com',
        'https://twitter.com',
        'https://youtube.com',
      ],
      payments: ['visa', 'mastercard', 'amex', 'discover', 'shopify', 'paypal'],
      // For available social share buttons see: https://github.com/nygardk/react-share
      shareButtons: [
        'Facebook',
        'Pinterest',
        'Twitter',
        // 'Tumblr',
        // 'Whatsapp',
        // 'Line',
        // 'Viber',
      ],
      googleAnalyticsId: 'UA-141525658-5',
      //
      // carousel, collection, product
      //
      mainPage: [
        {
          type: 'carousel',
          children: [
            {
              name: 'intro',
              type: 'collection',
              handle: 'diamonds',
              textColor: 'white',
              textBgColor: 'black',
            },
            {
              name: 'Memorial Day',
              type: 'product',
              handle: 'gemstone-diamond-fleur-de-lis-ring',
              textColor: 'white',
              textBgColor: 'primary',
            },
            {
              name: 'ship',
              type: 'collection',
              handle: 'frontpage',
              textColor: 'white',
              textBgColor: 'black',
            },
           
          ],
        },
        {
          name: '',
          type: 'collection',
          handle: 'diamonds',
          textColor: 'white',
          textBgColor: 'primary',
        },
        {
          name: 'Photography',
          type: 'collection',
          handle: 'frontpage',
          textColor: 'white',
          textBgColor: 'primary',
        },
        {
          name: 'Test',
          type: 'product',
          handle: 'zombie-bucket',
          textColor: 'black',
          textBgColor: 'white',
        },
        {
          name: 'One product',
          type: 'product',
          handle: 'red-sports-tee',
          textColor: 'black',
          textBgColor: 'white',
        },
        {
          name: 'Anchor Bracelet Mens',
          type: 'product',
          handle: 'leather-anchor',
          textColor: 'black',
          textBgColor: 'white',
        },
        {
          name: 'Yellow Sofa',
          type: 'product',
          handle: 'yellow-sofa',
          textColor: 'black',
          textBgColor: 'white',
        },
        {
          name: '7 Shakra Bracelet',
          type: 'product',
          handle: 'chain-bracelet',
          textColor: 'black',
          textBgColor: 'white',
        },
        {
          name: 'White Cotton Shirt',
          type: 'product',
          handle: 'white-cotton-shirt',
          textColor: 'white',
          textBgColor: 'primary',
        },
      ],
      // Menu types: "header", "collection", "product", "link"
      menu: flattenMenu({
        name: 'Menu',
        type: 'top',
        children: [


          {
            name: "Collections",
            type: 'header',
            handle: '',
            link: '',
            children: [
              {
                name: 'A. Jaffe',
                type: 'link',
                handle: 'apparel',
                link: '/ajaffe'
              },
              {
                name: 'Benchmark',
                type: 'link',
                link: '/benchmark',
              },
              {
                name: 'Facet Barcelona',
                type: 'link',
                link: '/facet',
              },
              {
                name: 'Gabriel Fashion',
                type: 'link',
                link: '/gabriel',
              },
              {
                name: 'AD Collection',
                type: 'link',
                link: '/adcollection',
              },
              {
                name: 'Memoire',
                type: 'link',
                link: '/memoire',
              },
              {
                name: 'Michael M',
                type: 'link',
                link: '/michaelm',
              },
              {
                name: 'Mikimoto',
                type: 'link',
                link: '/mikimoto',
              },
              {
                name: 'Parade',
                type: 'link',
                link: '/parade',
              },
              {
                name: 'Pav & Broome Signature Collection',
                type: 'link',
                link: '/facet',
              },


            ],
          },


          {
            name: "Jewelry",
            type: 'header',
            handle: '',
            link: '',
            children: [
              {
                name: 'Bracelets',
                type: 'link',
                link: '/bracelets',
              },
              {
                name: 'Earrings',
                type: 'link',
                link: '/earrings',
              },
              {
                name: 'Fashion Rings',
                type: 'link',
                link: '/fashion-rings',
              },
              {
                name: 'Mardi Gras Jewelry',
                type: 'link',
                link: '/mardigras',
              },
              {
                name: 'Necklaces/Pendants',
                type: 'link',
                link: '/necklaces',
              },
              {
                name: 'Pearl Jewelry',
                type: 'link',
                link: '/pearl-jewelery',
              },
              {
                name: "Birthstone Buyer's Guide",
                type: 'link',
                link: '/birthstone-buyers-guide',
              },
              {
                name: 'Sweet &amp; Petite',
                type: 'link',
                link: '/sweetandpetite',
              },

            ],
          },



          {
            name: "Watches",
            type: 'header',
            handle: '',
            link: '',
            children: [
              {
                name: 'A. Jaffe',
                type: 'link',
                handle: 'apparel',
                link: '/ajaffe'
              },
              {
                name: 'Benchmark',
                type: 'link',
                link: '/benchmark',
              },
              {
                name: 'Facet Barcelona',
                type: 'link',
                link: '/facet',
              },
            ],
          },


          
          { name: 'Rolex', type: 'header', link: '/rolex' },



          {
            name: "Bridal",
            type: 'header',
            handle: '',
            link: '',
            children: [
              {
                name: 'Engagement Rings',
                type: 'link',
                handle: 'apparel',
                link: '/engagement-rings'
              },
              {
                name: 'Wedding & Anniversary Bands',
                type: 'link',
                link: '/benchmark',
              },
     
            ],
          },




          {
            name: "Gifts",
            type: 'header',
            handle: '',
            link: '',
            children: [
              {
                name: 'A. Jaffe',
                type: 'link',
                handle: 'apparel',
                link: '/ajaffe'
              },
              {
                name: 'Benchmark',
                type: 'link',
                link: '/benchmark',
              },
              {
                name: 'Facet Barcelona',
                type: 'link',
                link: '/facet',
              },
            ],
          },




          {
            name: "Services",
            type: 'header',
            handle: '',
            link: '',
            children: [
              {
                name: 'A. Jaffe',
                type: 'link',
                handle: 'apparel',
                link: '/ajaffe'
              },
              {
                name: 'Benchmark',
                type: 'link',
                link: '/benchmark',
              },
              {
                name: 'Facet Barcelona',
                type: 'link',
                link: '/facet',
              },
            ],
          },



          {
            name: "Education",
            type: 'header',
            handle: '',
            link: '',
            children: [
              {
                name: 'A. Jaffe',
                type: 'link',
                handle: 'apparel',
                link: '/ajaffe'
              },
              {
                name: 'Benchmark',
                type: 'link',
                link: '/benchmark',
              },
              {
                name: 'Facet Barcelona',
                type: 'link',
                link: '/facet',
              },
            ],
          },


       


        ],
      }),
      footerLinks: [
        {
          name: 'About us',
          link: '/pages/about',
        },
        {
          name: 'Terms of Service',
          link: '/policy/termsOfService',
        },
        {
          name: 'Privacy policy',
          link: '/policy/privacyPolicy',
        },
        {
          name: 'Refunds',
          link: '/policy/refundPolicy',
        },
        {
          name: 'External',
          link: 'https://amazon.com',
        },
      ],
      locales: 'en-US',
      currency: 'USD',
      productsPerCollectionPage: '9',
      articlesPerBlogPage: '6',
    },
  },
};
