import './App.css'
import Header from './components/header/header';
import OurServices from './components/header/ourServices/ourServices';
import Healthcare from './components/leadingHealthcareProviders/healthcare';
import Download from './components/download/download';
import Testimonials from './components/testimonials/testimonials';
import LatestArticles from './components/latestArticles/latest_articles';
import Footer from './components/footer/footer';



function App() {
  

  return (
    
      <div>
       <Header/>
       <OurServices/>
       <Healthcare/>
       <Download/>
       <Testimonials/>
       <LatestArticles/>
       <Footer/>
      </div>
  )
}

export default App
