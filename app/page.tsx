import Hero from '../components/Hero';
import EngineeringSnapshot from '../components/EngineeringSnapshot';
import ProjectGrid from '../components/ProjectGrid';
import ExperienceTimeline from '../components/ExperienceTimeline';
import SkillGroup from '../components/SkillGroup';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Process from '../components/Process';
import About from '../components/About';
import { portfolioData } from '../data/portfolio';

export default function Home() {
  const personId = `${portfolioData.personal.url}#person`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: portfolioData.personal.name,
        jobTitle: portfolioData.personal.role,
        url: portfolioData.personal.url,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Jakarta',
          addressCountry: 'ID',
        },
        knowsAbout: [
          'Software Engineering',
          'React',
          'Django',
          'Python',
          'PostgreSQL',
          'WebGIS',
          'Data-driven web applications',
        ],
        sameAs: [portfolioData.personal.contact.linkedin],
      },
      {
        '@type': 'WebSite',
        '@id': `${portfolioData.personal.url}#website`,
        url: portfolioData.personal.url,
        name: `${portfolioData.personal.name} — Software Engineer`,
        inLanguage: 'en',
        publisher: { '@id': personId },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${portfolioData.personal.url}#profile`,
        url: portfolioData.personal.url,
        name: `${portfolioData.personal.name} | Software Engineer & Full-Stack Web Developer`,
        mainEntity: { '@id': personId },
        isPartOf: { '@id': `${portfolioData.personal.url}#website` },
        inLanguage: 'en',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <Hero />
      <EngineeringSnapshot />
      <About />
      <ProjectGrid />
      <Process />
      <ExperienceTimeline />
      <SkillGroup />
      <Education />
      <Contact />
    </>
  );
}
