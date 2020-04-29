import React from 'react';

import {Helmet}  from 'react-helmet';
import {asset}   from 'helpers/apiEndpoint';
import translate from 'helpers/translate';


const FacebookMetaTags = ({
                            url,
                            title,
                            description,
                            imgUrl,
                            type
                          }) => {
  return <Helmet>
    <meta property="og:url" content={url || 'http://www.gevorgiants.com'} />
    <meta property="og:type" content={type || 'article'} />
    <meta property="og:title" content={title || translate('PAGE_MAIN_TITLE')} />
    <meta property="og:description" content={description || 'Armen Gevorinats\'s Gallery'} />
    <meta property="og:image" content={imgUrl || asset('images/aniv.png')} />
  </Helmet>;

};

export default FacebookMetaTags;
