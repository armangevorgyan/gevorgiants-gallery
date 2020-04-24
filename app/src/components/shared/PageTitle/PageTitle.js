import React from 'react';

import { Helmet } from 'react-helmet';
import translate  from 'helpers/translate';

const PageTitle = ({ title }) => {
  let formattedTitle = translate('PAGE_MAIN_TITLE');
  if (title) {
    formattedTitle += ' | ' + title;
  }

  return (
    <Helmet>
      <title>{formattedTitle}</title>
    </Helmet>
  );
};

export default PageTitle;
