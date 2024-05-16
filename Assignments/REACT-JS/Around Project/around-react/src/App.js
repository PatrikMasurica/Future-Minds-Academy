import './css/fma-general.css';
import './css/fma-responsive.css';
import './css/homeStyle.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Stats from './components/Stats';


function App() {
  return (
    <div className='App'>
      <Nav activePage='active' />
      <Hero
        title='The effective solutions for your business'
        subtitle='We are a team who creates marketing strategies for B2B and B2C companies'
      />
      <Stats
        happyClients='540'
        projectsCompleted='1240'
        ftSpecialists='30'
        awards='15' />
    </div>
  );
}

export default App;
