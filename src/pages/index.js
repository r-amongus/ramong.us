import ButtonLink from 'components/ButtonLink';
import Container from 'components/Container';
import Flex from 'components/Flex';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {graphql} from 'gatsby';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import Layout from 'components/Layout';
import {colors, media, sharedStyles} from 'theme';
import loadScript from 'utils/loadScript';
import createCanonicalUrl from 'utils/createCanonicalUrl';
import {babelURL} from 'site-constants';

class Home extends Component {
  state = {
    babelLoaded: false,
  };

  componentDidMount() {
    loadScript(babelURL).then(
      () => {
        this.setState({
          babelLoaded: true,
        });
      },
      error => {
        console.error('Babel failed to load.');
      },
    );
  }

  render() {
    const {babelLoaded} = this.state;
    const {data, location} = this.props;
    const {marketing} = data;

    return (
      <Layout location={location}>
        <TitleAndMetaTags
          title="/r/AmongUs &ndash; Unofficial subreddit for the game Among Us by Innersloth."
          canonicalUrl={createCanonicalUrl('/')}
        />
        <div
          css={{
            width: '100%',
            marginTop: 'var(--banner-height-normal)',

            [media.lessThan('small')]: {
              marginTop: 'var(--banner-height-small)',
            },
          }}>
          <header
            css={{
              backgroundColor: colors.dark,
              color: colors.subtle,
            }}>
            <div
              css={{
                paddingTop: 45,
                paddingBottom: 10,

                [media.greaterThan('small')]: {
                  paddingTop: 60,
                  paddingBottom: 70,
                },
              }}>
              <div
                css={{
                  // Content should be above absolutely-positioned hero image
                  position: 'relative',
                }}>
                <Container>
                  <h1
                    css={{
                      color: colors.white,
                      textAlign: 'center',
                      margin: 0,
                      fontSize: 45,
                      letterSpacing: '0.01em',
                      [media.size('xsmall')]: {
                        fontSize: 30,
                      },
                      [media.greaterThan('xlarge')]: {
                        fontSize: 60,
                      },
                    }}>
                    /r/AmongUs
                  </h1>
                  <p
                    css={{
                      paddingTop: 15,
                      textAlign: 'center',
                      fontSize: 24,
                      letterSpacing: '0.01em',
                      fontWeight: 200,

                      [media.size('xsmall')]: {
                        fontSize: 16,
                        maxWidth: '12em',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      },

                      [media.greaterThan('xlarge')]: {
                        paddingTop: 20,
                        fontSize: 30,
                      },
                    }}>
                    Unofficial subreddit for the game Among Us by Innersloth.
                  </p>
                  <Flex
                    valign="center"
                    halign="center"
                    css={{
                      paddingTop: 40,
                      flexWrap: 'wrap',
                      justifyContent: 'center',

                      [media.greaterThan('xlarge')]: {
                        paddingTop: 65,
                      },
                    }}>
                    <CtaItem>
                      <ButtonLink
                        to="/docs/getting-started.html"
                        type="primary">
                        Get Started
                      </ButtonLink>
                    </CtaItem>
                    <CtaItem>
                      <ButtonLink to="/tutorial/tutorial.html" type="secondary">
                        Take the Tutorial
                      </ButtonLink>
                    </CtaItem>
                  </Flex>
                </Container>
              </div>
            </div>
          </header>

          <Container>
            <div css={sharedStyles.markdown}>
              <section
                css={[
                  sectionStyles,
                  {
                    [media.lessThan('medium')]: {
                      marginTop: 0,
                      marginBottom: 0,
                      overflowX: 'auto',
                      paddingTop: 30,
                      WebkitOverflowScrolling: 'touch',
                      position: 'relative',
                      maskImage:
                        'linear-gradient(to right, transparent, white 10px, white 90%, transparent)',
                    },
                  },
                ]}>
                <div
                  css={{
                    display: 'flex',
                    flexDirection: 'row',

                    [media.lessThan('medium')]: {
                      display: 'block',
                      whiteSpace: 'nowrap',
                    },
                  }}>
                  {marketing.edges.map(({node: column}, index) => (
                    <div
                      key={index}
                      css={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: '0 1 33%',
                        marginLeft: 40,

                        '&:first-of-type': {
                          marginLeft: 0,

                          [media.lessThan('medium')]: {
                            marginLeft: 10,
                          },
                        },

                        [media.lessThan('medium')]: {
                          display: 'inline-block',
                          verticalAlign: 'top',
                          marginLeft: 0,
                          whiteSpace: 'normal',
                          width: '75%',
                          marginRight: 20,
                          paddingBottom: 40,

                          '&:first-of-type': {
                            marginTop: 0,
                          },
                        },
                      }}>
                      <h3
                        css={[
                          headingStyles,
                          {
                            '&&': {
                              // Make specificity higher than the site-wide h3 styles.
                              color: colors.subtle,
                              paddingTop: 0,
                              fontWeight: 300,
                              fontSize: 20,

                              [media.greaterThan('xlarge')]: {
                                fontSize: 24,
                              },
                            },
                          },
                        ]}>
                        {column.frontmatter.title}
                      </h3>
                      <div dangerouslySetInnerHTML={{__html: column.html}} />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </Container>
        </div>
      </Layout>
    );
  }
}

Home.propTypes = {
  data: PropTypes.shape({
    marketing: PropTypes.object.isRequired,
  }).isRequired,
};

const CtaItem = ({children, primary = false}) => (
  <div
    css={{
      [media.between('small', 'large')]: {
        paddingLeft: 20,
      },

      [media.greaterThan('xlarge')]: {
        paddingLeft: 40,
      },

      '&:first-child': {
        textAlign: 'right',
        paddingRight: 7,
        paddingLeft: 7,
        [media.lessThan('small')]: {
          marginBottom: 10,
        },
      },

      '&:nth-child(2)': {
        paddingRight: 7,
        paddingLeft: 7,
        [media.greaterThan('small')]: {
          paddingLeft: 15,
        },
        [media.lessThan('small')]: {
          marginBottom: 10,
        },
      },
    }}>
    {children}
  </div>
);

export const pageQuery = graphql`
  query IndexMarkdown {
    marketing: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "//home/marketing//"}}
      sort: {fields: [frontmatter___order], order: ASC}
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;

export default Home;

const sectionStyles = {
  marginTop: 20,
  marginBottom: 15,

  [media.greaterThan('medium')]: {
    marginTop: 60,
    marginBottom: 65,
  },
};

const headingStyles = {
  '&&': {
    marginBottom: 20,
  },
};
