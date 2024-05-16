// import NavBar from "./NavBar";
import BannerInfo from "./BannerInfo";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemDetail from "./ItemDetail";

const Home = () => {

    return (
        <div className='colorBody'>
        {/* <NavBar /> */}
        <div className='mb-3'>
          <img className='img-fluid' src="public\carrusel-main.jpg" alt="" />
        </div>
        <BannerInfo />
        <ItemDetailContainer />
      </div>
    )
}

export default Home;