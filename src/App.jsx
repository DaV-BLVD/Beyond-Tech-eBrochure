import React, { useRef } from 'react';
import Navbar from './components/Global/Navbar';
import Pages from './components/pages/Pages';
import Footer from './components/Global/Footer';
import AllPages from './components/pages/AllPages';
import generatePDF from './utils/generatePDF';
const App = () => {
    // ref for the visible carousel (if you need it)
    const pagesVisibleRef = useRef();
    // ref for the hidden container that renders ALL headers stacked
    const allPagesRef = useRef();
    const handleDownloadPDF = async () => {
        if (!allPagesRef.current) return;
        try {
            await generatePDF(allPagesRef.current, {
                filename: 'BeyondTechNepal.pdf',
                orientation: 'landscape',
                a4Unit: 'mm',
                scale: 2.5, // increase for higher quality (adjust as needed)
            });
        } catch (err) {
            console.error('PDF generation failed', err);
            alert('PDF generation failed — see console for details');
        }
    };
    return (
        <div>
            <Navbar onDownloadPDF={handleDownloadPDF} />
            {/* Visible carousel */}
            <div ref={pagesVisibleRef}>
                <Pages />
            </div>
            {/* Hidden all-pages container used solely for PDF generation */}
            <div
                style={{
                    position: 'absolute',
                    left: -9999,
                    top: 0,
                    width: '210mm' /* A4 width in mm for layout */,
                }}
            >
                <AllPages ref={allPagesRef} />
            </div>
            <Footer />
        </div>
    );
};
export default App;
