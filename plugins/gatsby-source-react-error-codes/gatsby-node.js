/**
 * Copyright (c) /r/AmongUs
 */

const request = require('request-promise');

const errorCodesUrl =
  'https://gist.githubusercontent.com/ElijahPepe/d35438bff3e2864e668984ed4671270f/raw/1faf025b0ef7889b0d0262306f96f7157fc95b69/codes.json';

exports.sourceNodes = async ({actions}) => {
  const {createNode} = actions;

  try {
    const jsonString = await request(errorCodesUrl);

    createNode({
      id: 'error-codes',
      children: [],
      parent: 'ERRORS',
      internal: {
        type: 'ErrorCodesJson',
        contentDigest: jsonString,
      },
    });
  } catch (error) {
    console.error(
      `The gatsby-source-react-error-codes plugin has failed:\n${error.message}`,
    );

    process.exit(1);
  }
};
