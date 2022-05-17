import '../../App.scss';
import Featured from './Featured/Featured';
import Footer from './footer/Footer';
import Navbar from './header/Navbar';
import Last from './LastSection/Last';
import Banner from './main-banner/Banner';
import Main from './MainBanner/Main';
import Popular from './Popular/Popular';
import Recently from './Recently/Recently';
import Top from './Top-Sellers/Top';


function Landing() {
  
  return (
    <>
      <Navbar />
      <Main />
      <Banner />
      <Top />
      <Popular />
      <Featured />
      <Recently />
      <Last />
      <Footer />
    </>
  );
}

export default Landing;