/**
* @desc Ce component permet d'intégrer facilement une navbar
*/

class Nav extends React.Component {

  // Le HTML qui sera incorporé à chaque fois que <Nav /> est appelé
  render () {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
    )
  }

}

// Export navbar
export default Nav;