class Carousel extends React.Component{
componentDidMount(){
	$('.carousel').carousel();
}
render () {
	return (
	<div className="carousel">
    <a className="carousel-item" href="#one!"><img src={"http://lorempixel.com/250/250/nature/1"}/></a>
    <a className="carousel-item" href="#two!"><img src={"http://lorempixel.com/250/250/nature/2"}/></a>
    <a className="carousel-item" href="#three!"><img src={"http://lorempixel.com/250/250/nature/3"}/></a>
    <a className="carousel-item" href="#four!"><img src={"http://lorempixel.com/250/250/nature/4"}/></a>
    <a className="carousel-item" href="#five!"><img src={"http://lorempixel.com/250/250/nature/5"}/></a>
  </div>
  )

}
}
export default Carousel;