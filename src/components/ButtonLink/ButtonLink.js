/**
 * Copyright (c) /r/AmongUs
 */

import {Link} from 'gatsby';
import React from 'react';
import {colors, media} from 'theme';

const ArrowSvg = ({cssProps = {}}) => (
  <svg
    css={cssProps}
    height="12"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 4.53657 8.69699">
    <path
      d={`
        M.18254,8.697a.18149.18149,0,0,1-.12886-.31034L4.09723,4.34126.05369.29954a.18149.18149,
        0,0,1,.2559-.2559L4.4838,4.21785a.18149.18149,0,0,1,0,.2559L.30958,8.648A.18149.18149,
        0,0,1,.18254,8.697Z
      `}
      fill="currentColor"
    />
  </svg>
);

const ButtonLink = ({children, type, ...rest}) => {
  let typeStyle;
  switch (type) {
    case 'primary':
      typeStyle = primaryStyle;
      break;
    case 'secondary':
      typeStyle = secondaryStyle;
      break;
  }

  return (
    <Link {...rest} css={[style, typeStyle]}>
      {children}
      {type === 'secondary' && <ArrowSvg cssProps={{marginLeft: 10}} />}
    </Link>
  );
};

const style = {
  display: 'inline-block',
  fontSize: 16,

  [media.greaterThan('xlarge')]: {
    fontSize: 20,
  },
};

const primaryStyle = {
  backgroundColor: colors.white,
  color: colors.black,
  padding: '10px 25px',
  whiteSpace: 'nowrap',
  borderRadius: '5px',
  transition: 'background-color 0.2s ease-out',
  border: '1px solid #fff',

  [media.greaterThan('xlarge')]: {
    paddingTop: 15,
    paddingBottom: 15,
  },

  ':hover': {
    color: colors.white,
    backgroundColor: colors.black,
    border: '1px solid #fff',
  },
};

const secondaryStyle = {
  backgroundColor: colors.black,
  color: colors.subtle,
  padding: '10px 25px',
  whiteSpace: 'nowrap',
  borderRadius: '5px',
  transition: 'background-color 0.2s ease-out',
  border: '1px solid #333',
  paddingTop: '15px',
  paddingBottom: '15px',

  ':hover': {
    color: colors.white,
    border: '1px solid #fff',
  },
};

export default ButtonLink;
