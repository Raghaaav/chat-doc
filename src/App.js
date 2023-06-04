import './App.css';
import { MainComponent } from './component/MainComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PdfComponent } from './component/PdfComponent';
import { WordComponent } from './component/WordComponent';
import { PPTComponent } from './component/PPTComponent';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/pdf" element={<PdfComponent />} />
        <Route path="/word" element={<WordComponent />} />
        <Route path="/ppt" element={<PPTComponent />} />

      </Routes>

    </>
  );
}

export default App;
