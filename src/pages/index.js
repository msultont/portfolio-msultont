import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const PageMain = () => {
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
          content="https://scontent.fcgk29-1.fna.fbcdn.net/v/t1.0-9/122988051_10216494010254068_4424970493396844455_o.jpg?_nc_cat=106&ccb=3&_nc_sid=09cbfe&_nc_ohc=ae9HaUHApxIAX-liZTc&_nc_ht=scontent.fcgk29-1.fna&oh=2a3ff144fc0fdee1b1742633de371d39&oe=6056C556"
        />
        <meta property="og:site_name" content="Muhammad Sulton Tauhid" />
        <link rel="canonical" href="https://www.msultont.com" />
      </Helmet>
      <App />
    </>
  );
};
export default PageMain;
