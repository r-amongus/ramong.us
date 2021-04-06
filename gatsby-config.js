/**
 * Copyright (c) /r/AmongUs
 */

'use strict';

module.exports = {
  siteMetadata: {
    title: '/r/AmongUs: The unofficial subreddit for the game Among Us by Innersloth.',
    siteUrl: 'https://ramong.us',
    rssFeedTitle: '/r/AmongUs',
    rssFeedDescription: 'The unofficial subreddit for the game Among Us by Innersloth.',
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorYaml',
  },
  plugins: [
    'gatsby-source-react-error-codes',
    'gatsby-transformer-authors-yaml',
    'gatsby-transformer-home-example-code',
    'gatsby-transformer-versions-yaml',
    'gatsby-plugin-netlify',
    'gatsby-plugin-glamor',
    'gatsby-plugin-twitter',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#fff',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 840,
            },
          },
          'gatsby-remark-external-links',
          'gatsby-remark-header-custom-ids',
          'gatsby-remark-use-jsx',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'gatsby-code-',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-100177232-6',
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
         {
          site {
            siteMetadata {
              title: rssFeedTitle
              description: rssFeedDescription
              siteUrl
              site_url: siteUrl
            }
          }
        }`,
        feeds: [
          {
            serialize: ({query: {site, allMarkdownRemark}}) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign(
                  {},
                  {
                    title: edge.node.frontmatter.title,
                    description: edge.node.html,
                    date: require('moment')(edge.node.fields.date).format(
                      'MMMM DD, YYYY, h:mm A',
                    ),
                    url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                    guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  },
                );
              });
            },
            query: `
              {
                  allMarkdownRemark
                  (limit: 10,
                  filter: {fileAbsolutePath: {regex: "/blog/"}},
                  sort: {fields: [fields___date],
                  order: DESC}) {
                    edges {
                      node {
                        fields {
                          date
                          slug
                        }
                        frontmatter {
                          title
                        }
                        html
                      }
                    }
                  }
                }
            `,
            output: '/feed.xml',
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: '/r/AmongUs Docs',
        short_name: '/r/AmongUs', // eg. /r/AmongUs [%LANG_CODE%]
        // Translators: please change this and two above options (see https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/#feature-configuration---optional)
        lang: 'en',
        start_url: '/',
        background_color: '#20232a',
        theme_color: '#20232a',
        display: 'standalone',
        icon: 'static/logo-512x512.png',
        legacy: true,
      },
    },
  ],
};
