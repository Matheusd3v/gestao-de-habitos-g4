import { Carousel } from "antd";
import "antd/dist/antd.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Container } from "./style";
const CarouselBase = ({ children }) => {
  return (
    <>
      <Container>
        <Carousel
          effect="fade"
          autoplay
          arrows
          prevArrow={<IoIosArrowBack />}
          nextArrow={<IoIosArrowForward />}
        >
          {children}
        </Carousel>
      </Container>
    </>
  );
};
export default CarouselBase;
