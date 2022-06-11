import React from "react";
import "react-slideshow-image/dist/styles.css";
import AboutUs from "../components/home/AboutUs";
import Achieverments from "../components/home/Achieverments";
import Management from "../components/home/Management";
import Services from "../components/home/Services";
import SlideHome from "../components/home/SlideHome";
import Solution from "../components/home/Solution";
import WhyChoose from "../components/home/WhyChoose";


const Home = () => {
  return (
    <div>
      <SlideHome />
      <div className="contain">
        <a className="arrowdown" href="#aboutus">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </a>
        <AboutUs />
        <a className="arrowdown" href="#services">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </a>
        <Services />
        <a className="arrowdown" href="#achieverments">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </a>
        <Achieverments />
        <a className="arrowdown" href="#why-choose">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </a>
        <WhyChoose />
        <a className="arrowdown" href="#solutions">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </a>
        <Solution />
        <a className="arrowdown" href="#management">
          <img src="/images/scrollarrow.png" alt="scroll" />
        </a>
        <Management />
      </div>
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