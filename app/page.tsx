import Hero from '../components/Hero';
import EngineeringSnapshot from '../components/EngineeringSnapshot';
import ProjectGrid from '../components/ProjectGrid';
import ExperienceTimeline from '../components/ExperienceTimeline';
import SkillGroup from '../components/SkillGroup';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Process from '../components/Process';
import About from '../components/About';

export default function Home() {
  return (
    <>
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
