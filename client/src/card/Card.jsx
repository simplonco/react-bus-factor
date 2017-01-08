/**
* @desc Ce component permet d'intégrer facilement une card
*/

class Card extends React.Component {

  // Le HTML qui sera incorporé à chaque fois que <Card /> est appelé
  render () {
    return (
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src="http://materializecss.com/images/office.jpg" />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {this.props.content}<i className="material-icons right">more_vert</i>
          </span>
          <p><a href="#">This is a link</a></p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            {this.props.content}<i className="material-icons right">close</i>
          </span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
      </div>
    )
  }

}

// Export section
export default Card;