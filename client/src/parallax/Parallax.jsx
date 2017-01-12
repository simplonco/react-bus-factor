/**
* @desc Ce component permet d'intégrer facilement une image avec l'effet parallax de materialize
*/
class Parallax extends React.Component {

  // S'execute quand le HTML du component est entièrement chargé dans la page
  componentDidMount() {
    //materialize initie le parallax
    
    $('.parallax').parallax();
  }

  // Le HTML qui sera incorporé à chaque fois que <Parallax /> est appelé
  render () {
    //this.props.imgSrc a la valeur de l'attribut imgSrc dans <Parallax imgSrc="value" />
    return (
      <div className="parallax-container">
        <div className="parallax"><img src={this.props.imgSrc} /></div>
      

      </div>
    )
  }


}

// Export parallax
export default Parallax;