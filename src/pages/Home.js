import React from "react";
import "react-slideshow-image/dist/styles.css";
import AboutUs from "../components/home/AboutUs";
import Achieverments from "../components/home/Achieverments";
import Management from "../components/home/Management";
import Services from "../components/home/Services";
import SlideHome from "../components/home/SlideHome";
import Solution from "../components/home/Solution";
import WhyChoose from "../components/home/WhyChoose";
import Header from "../components/Layouts/Header/Header";
import Footer from "../components/Layouts/Footer";
import { Container } from "../components/Container";

const Home = () => {
  return (
    <div>
      <Header />
      <SlideHome />
      <div className="contain">
        <Container>
          <AboutUs />
        </Container>

        <Container>
          <Services />
        </Container>

        <Container>
          <Achieverments />
        </Container>

        <Container>
          <WhyChoose />
        </Container>

        <Solution />

        <Container>
          <Management />
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

// import React from "react";
// import ReactPageScroller from "react-page-scroller";
// export default class Scroller extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentPage: 1,
//       isFooterVisble: false
//     };
//     this._pageScroller = null;
//   }

//   goToPage = (eventKey) => {
//     this._pageScroller.goToPage(eventKey);
//   };

//   pageOnChange = (number) => {
//     this.setState({
//       currentPage: number,
//       isFooterVisble: number === 6
//     });
//   };

//   render() {
//     return (
//       <>
//         <ReactPageScroller
//           ref={(c) => (this._pageScroller = c)}
//           pageOnChange={this.pageOnChange}
//         >
//           <SlideHome />
//           <div className="arrowdown">
//             <img src="/images/scrollarrow.png" alt="scroll" />
//           </div>
//           <AboutUs className="contain" />
//           <div className="arrowdown contain">
//             <img src="/images/scrollarrow.png" alt="scroll" />
//           </div>
//           <Services className="contain" />
//           <Achieverments className="contain" />
//           <WhyChoose className="contain" />
//           <Solution className="contain" />
//           <Management className="contain" />
//         </ReactPageScroller>
//       </>
//     );
//   }
// }
