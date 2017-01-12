/**
* @desc Ce component permet de créer la class App qui contiendra toutes notre app
* @import Les components qui constituent notre app
*/

import Parallax from '../parallax/Parallax.jsx';
import SideNav from '../sidenav/SideNav.jsx';
import Section from '../section/Section.jsx';
import Nav from '../nav/Nav.jsx';
import Footer from '../footer/Footer.jsx';
import Grid from '../grid/Grid.jsx';
import Carousel from '../carousel/Carousel.jsx';

class App extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <SideNav />
        <Parallax imgSrc="http://materializecss.com/images/parallax1.jpg" />
        <Nav />
        <Section>
          <Carousel />
          <Grid />
        </Section>
        <Parallax imgSrc="http://materializecss.com/images/parallax2.jpg" />
        <Footer />
      </div>
    )
  }
}

export default App;