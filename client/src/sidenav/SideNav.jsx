/**
* @desc Ce component permet d'intégrer facilement le module sidenav de materialize
*/
import "./sideNav.scss"
class SideNav extends React.Component {

  // S'execute quand le HTML du component est entièrement chargé dans la page
  componentDidMount() {
    // Materialize initie la sidenav

    $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
  }

  // Le HTML qui sera incorporé à chaque fois que <SideNav /> est appelé
  render () {
    return (
      <div>
        <ul id="slide-out" className="side-nav">
          <li><div className="userView">
            <div className="background">
              <img src="http://materializecss.com/images/office.jpg" />
            </div>
            <a href="#!user"><img className="circle" src="http://materializecss.com/images/yuna.jpg" /></a>
            <a href="#!name"><span className="white-text name">John Doe</span></a>
            <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a>
          </div></li>
          <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
          <li><a href="#!">Second Link</a></li>
          <li><div className="divider"></div></li>
          <li><a className="subheader">Subheader</a></li>
          <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
        </ul>
        <a href="#" data-activates="slide-out" className="right button-collapse"><i className="material-icons">menu</i></a>
      </div>
    )
  }


}

// Export sidenav
export default SideNav;
