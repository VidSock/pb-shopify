require('dotenv').config({ path: `.env` });
const flattenMenu = require('@gatsbystorefront/gatsby-theme-storefront-shopify/src/utils/flattenMenu');

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-plugin-simong`,
      options: {
        spaceId: "123",
        preview: true,
        cacheResponse: false,
      },
    },
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
              // {
              //   name: 'A. Jaffe',
              //   // type: 'link',
              //   // handle: '/parade',
              //   link: '/ajaffe'
              // },
              // {
              //   name: 'Benchmark',
              //   type: 'link',
              //   link: '/benchmark',
              // },
              // {
              //   name: 'Facet Barcelona',
              //   type: 'link',
              //   link: '/facet',
              // },
              // {
              //   name: 'Gabriel Fashion',
              //   type: 'link',
              //   link: '/gabriel',
              // },
              // {
              //   name: 'AD Collection',
              //   type: 'link',
              //   link: '/adcollection',
              // },
              // {
              //   name: 'Memoire',
              //   type: 'link',
              //   link: '/memoire',
              // },
              // {
              //   name: 'Michael M',
              //   type: 'link',
              //   link: '/michaelm',
              // },
              // {
              //   name: 'Mikimoto',
              //   type: 'link',
              //   link: '/mikimoto',
              // },
              {
                name: 'Parade',
                type: 'external',
                link: 'parade/',
              },
              // {
              //   name: 'Pav & Broome Signature Collection',
              //   type: 'external',
              //   link: 'signatute-collection/',
              // },
              {
                name: 'Simon G',
                type: 'external',
                link: 'simong/',
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
                name: 'Sweet & Petite',
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
                name: 'Rolex Watches - View Collection',
                type: 'link',
                link: '/rolex'
              },
              {
                name: 'TAG Heuer',
                type: 'link',
                link: '/tag-heuer',
              },
              {
                name: 'Tudor',
                type: 'link',
                link: '/tudor',
              },
              {
                name: 'Victorinox',
                type: 'link',
                link: '/victorinox',
              },
              {
                name: 'Pav & Broome Signature Collection',
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
                name: 'Gifts For Him',
                type: 'link',
                link: '/gifts-for-him'
              },
              {
                name: 'Gifts For Her',
                type: 'link',
                link: '/gifts-for-her',
              },
              {
                name: 'Jimmy Crystal',
                type: 'link',
                link: '/jimmy-crystal',
              },
              {
                name: 'M-Clip',
                type: 'link',
                link: '/m-clip',
              },
              {
                name: 'Sweet & Petite',
                type: 'link',
                link: '/sweetandpetite',
              },
              {
                name: 'William Henry',
                type: 'link',
                link: '/william-henry',
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
                name: 'Watch Repair',
                type: 'link',
                link: '/watch-repair'
              },
              {
                name: 'Appraisals',
                type: 'link',
                link: '/appraisals',
              },
              {
                name: 'Custom Design',
                type: 'link',
                link: '/custom-design',
              },
              {
                name: 'Engraving',
                type: 'link',
                link: '/engraving',
              },
              {
                name: 'Pear Restringing',
                type: 'link',
                link: '/pearl-restringing',
              },
              {
                name: 'Jewelry Repair',
                type: 'link',
                link: '/jewelry-repair',
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
                name: "Birthstone Buyer's Guide",
                type: 'link',
                link: '/birthstone-buyers-guide'
              },
              {
                name: "Diamond Buyer's Guide",
                type: 'link',
                link: '/diamond-buyers-guide',
              },
              {
                name: "Engagement Ring Buyer's Guide",
                type: 'link',
                link: '/engagement-ring-buyers-guide',
              },
              {
                name: "Gemstone Buyer's Guide",
                type: 'link',
                link: '/gemstone-buyers-guide',
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
