import homeimage from '../image/home.png'
import Footer from './footer';
import Section from './section';
import Navibar from './navbar';

const Home = () => {

    return ( 
        <div className='App'>
              <Navibar />
        <img src={homeimage} alt=''  className='homeimage'/>
        <div className='section-content'>
       <p className='  text-4xl  flex-col grid mx-80 my-5  text-3xl items-center justify-center max-w-prose'>We believe in transparent financial service.All terms,rates and fees are clearly communicated</p>
       </div>
       <Section />
        <Footer />

        </div>
     );
}
 
export default Home;