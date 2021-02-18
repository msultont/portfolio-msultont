import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description, keywords } = headData;

  useEffect(() => {
    const scrollRestore = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('beforeunload', scrollRestore);
    return () => window.removeEventListener('beforeunload', scrollRestore);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Gatsby Simplefolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="keywords" content={keywords} />
        <meta
          name="google-site-verification"
          content="tQhencibPXS5AjPXpY4KCm1wzeu6tdu6Vx-tJCIIlxM"
        />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="https://www.msultont.com" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content={lang} />
        <meta
          property="og:image"
          content="https://www.facebook.com/photo/?fbid=10216494010214067&set=a.1344068053054"
        />
        <meta property="og:site_name" content="Sulton | Personal Portfolio" />
        <link rel="canonical" href="https://www.msultont.com" />
      </Helmet>
      <App />
    </>
  );
};
