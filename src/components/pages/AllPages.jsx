import React, { forwardRef } from 'react';
import pages from '../../data/data.jsx';
const AllPages = forwardRef((props, ref) => {
    return (
        <div ref={ref} style={{ background: '#ffffff' }}>
            {pages.map(({ id, Component }, idx) => (
                <div
                    key={id}
                    className="pdf-page"
                    style={{
                        width: '297mm', // A4 landscape width
                        minHeight: '210mm',
                        boxSizing: 'border-box',
                        pageBreakAfter: 'always',
                        WebkitPrintColorAdjust: 'exact',
                    }}
                >
                    <Component />
                </div>
            ))}
        </div>
    );
});
export default AllPages;
