import 'bootstrap/dist/css/bootstrap.css';
import building from './images/building-image.jpg'
import bar from './images/bar-chart.jpg'
import img from './images/img.jpg'
import '../App.css'

function Slides(){
    return(
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={building} class="d-block w-80 h-80" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={bar} class="d-block w-10 sld" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={img} class="d-block w-10 sld" alt="..."/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
    )
}

export default Slides