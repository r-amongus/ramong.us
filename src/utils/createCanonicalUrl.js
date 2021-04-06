/**
 * Copyright (c) /r/AmongUs
 */

import {urlRoot} from 'site-constants';

export default (slug: string): string | null =>
  slug == null ? null : `${urlRoot}/${slug.replace(/^\//, '')}`;
