import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

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
        <meta
          name="keywords"
          content="personal portfolio, sulton, muhammad sulton tauhid, sulton tauhid, muhammad sulton, sulton wibawa, web portfolio, software engineer, web developer, cto, direktur it, entrepreneur, wirausaha, programmer, bisnis, msultont, msulton55, universitas indonesia, ui, itb, its, cara membuat website portfolio, cara membuat website sederhana, belajar pemrograman website, belajar pemrograman dasar"
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
