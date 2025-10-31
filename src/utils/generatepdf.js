import domtoimage from 'dom-to-image-more';
import jsPDF from 'jspdf';
/**
 * generatePDF(containerNode, options)
 * - containerNode: DOM node containing child nodes each representing a page.
 * - options: { filename, orientation, a4Unit, scale }
 */
export default async function generatePDF(containerNode, options = {}) {
    const {
        filename = 'document.pdf',
        orientation = 'landscape',
        a4Unit = 'mm',
        scale = 2,
    } = options;
    const pdf = new jsPDF({ unit: a4Unit, format: 'a4', orientation });
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    // Identify child page nodes (direct children of container)
    const pageNodes = Array.from(containerNode.children).filter(
        (n) => n.nodeType === 1
    );
    for (let i = 0; i < pageNodes.length; i++) {
        const node = pageNodes[i];
        // set inline white background to avoid transparent issues

        node.style.background = node.style.background || '#ffffff';
        // Use dom-to-image-more with higher scale for better quality

        node.querySelectorAll('*').forEach((el) => {
            el.style.border = 'none';
            el.style.boxShadow = 'none';
        });

        const dataUrl = await domtoimage.toPng(node, {
            quality: 1,
            multiplier: scale,
            bgcolor: '#ffffff',
        });
        // Create Image to measure natural pixel size
        const img = new Image();
        img.src = dataUrl;
        await new Promise((resolve, reject) => {
            img.onload = () => {
                const imgWidthPx = img.width;
                const imgHeightPx = img.height;
                // scale image to fit pdf width
                const imgDisplayHeight = (imgHeightPx * pdfWidth) / imgWidthPx;
                // If the image height is less than or equal to pdf page height, just put it
                if (imgDisplayHeight <= pdfHeight) {
                    if (i > 0) pdf.addPage();
                    pdf.addImage(
                        dataUrl,
                        'PNG',
                        0,
                        0,
                        pdfWidth,
                        imgDisplayHeight
                    );
                    resolve();
                } else {
                    // Split the tall image into chunks that fit a PDF page
                    // We'll draw portions onto a canvas and add each as separate PDF page
                    const ratio = imgWidthPx / pdfWidth;
                    let renderedHeight = 0;
                    while (renderedHeight < imgHeightPx) {
                        const sliceHeightPx = Math.min(
                            imgHeightPx - renderedHeight,
                            Math.floor(pdfHeight * ratio)
                        );
                        // create cropping canvas
                        const canvas = document.createElement('canvas');
                        canvas.width = imgWidthPx;
                        canvas.height = sliceHeightPx;
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(
                            img,
                            0,
                            renderedHeight,
                            imgWidthPx,
                            sliceHeightPx,
                            0,
                            0,
                            imgWidthPx,
                            sliceHeightPx
                        );
                        const chunkData = canvas.toDataURL('image/png');
                        const chunkDisplayHeight =
                            (sliceHeightPx * pdfWidth) / imgWidthPx;
                        if (i > 0 || renderedHeight > 0) pdf.addPage();
                        pdf.addImage(
                            chunkData,
                            'PNG',
                            0,
                            0,
                            pdfWidth,
                            chunkDisplayHeight
                        );

                        renderedHeight += sliceHeightPx;
                    }
                    resolve();
                }
            };
            img.onerror = (e) => reject(e);
        });
    }
    pdf.save(filename);
}
