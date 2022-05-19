import { Carousel } from "react-bootstrap";

const CarouselHome = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.gigabyte.com/FileUpload/Global/WebPage/897/assets/Images/hero-v4-tc.jpg"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://tw.aorus.com/upload/Admin/images/1600x600(5).jpg"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.gaminghk.com/wp-content/uploads/2022/05/2022-05-03-AORUS-15P-banner_%E5%B7%A5%E4%BD%9C%E5%8D%80%E5%9F%9F-1.jpg"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.gaminghk.com/wp-content/uploads/2022/01/2022-01-03-web-banner-XPG-JunmaxGIGIBYTEHKGaminghk_%E5%B7%A5%E4%BD%9C%E5%8D%80%E5%9F%9F-1.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.centralfield.com/wp-content/uploads/2022/03/BANNER_ASUS_VGA_33th_WB_1800x942_CTF-1200x628.jpg.webp"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHome;
