import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Company/Contact/Contact";
import AboutUs from "./pages/Company/AboutUs/AboutUs";
import DetailBlog from "./pages/DetailBlog";
import Home from "./pages/Home";
import JoinOurTalentPool from "./pages/JoinOurTalentPool/JoinOurTalentPool";
import OffTheShelf from "./pages/OffTheShelf/OffTheShelf";
import Resources from "./pages/Resource/Resources";
import DataAnnotation from "./pages/Services/DataAnnotation";
import DataCollection from "./pages/Services/DataCollection";
import DataTranscription from "./pages/Services/DataTranscription";
import Loading from "./pages/Loading/Loading";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data-transcription" element={<DataTranscription />} />
        <Route path="/data-collection" element={<DataCollection />} />
        <Route path="/data-annotation" element={<DataAnnotation />} />
        <Route path="/off-the-shelf" element={<OffTheShelf />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/join-our-talent-pool" element={<JoinOurTalentPool />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail-blog" element={<DetailBlog />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
