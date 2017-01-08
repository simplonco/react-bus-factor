/**
* @desc Ce component permet d'intégrer facilement une section avec un contenu modifiable
*/

class Section extends React.Component {

  // Le HTML qui sera incorporé à chaque fois que <Section /> est appelé
  render () {
    return (
      <div className="section white">
        <div className="row container">
          <h2 className="header">This section holds a grid</h2>
          {this.props.children}
        </div>
      </div>
    )
  }

}

// Export section
export default Section;