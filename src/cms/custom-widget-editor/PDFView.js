import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import { renderToString } from 'react-dom/server'
import samplePDF from './sample.pdf';

function PDFViewContainer(props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    function onDocumentLoadError() {
        console.log('onDocumentLoadError')
    }

    return (
        <div>
            <Document
                file={props.file}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                onItemClick={()=> {}}
                options={{
                    cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
                    cMapPacked: true,
                }}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
    );
}


const PDFView = {
    label: 'PDF View',
    id: 'pdfview',
    fromBlock: match =>
        match && {
            pdf_file: match[2],
    },
    toBlock:({ pdf_file }, getAsset) => {
        console.log(pdf_file)
        return renderToString(<PDFViewContainer file={pdf_file}/>)
    },
    // eslint-disable-next-line react/display-name
    toPreview: ({ pdf_file }, getAsset) => {
        console.log(pdf_file)
        return renderToString(<PDFViewContainer file={pdf_file}/>)
    },
    pattern: /pdfview (\S+)\s/,
    fields: [
        {
            name: 'id',
            label: 'Block ID',
            widget: 'hidden'
        },
        {
            label: 'PDF File',
            name: 'pdf_file',
            widget: 'file',
            media_library: {
                config: {
                    multiple: true
                }
            }
        },
    ],
};


export default PDFView;
