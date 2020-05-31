import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import "react-pdf/dist/Page/AnnotationLayer.css";
import Layout from 'components/Layout';
import {graphql} from "gatsby";
import PropTypes from "prop-types";


export const DocsPage = ({ data, location, pageContext }) => {
    const { markdownRemark: doc } = data

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);

    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }


    return (
        <Layout style={{background: '#f8fafc;'}}>
            <div className={`react-component-pdf`}>
                <Document
                    file={doc.frontmatter.link_pdf.publicURL}
                    onLoadSuccess={onDocumentLoadSuccess}
                    options={{
                        cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
                        cMapPacked: true,
                    }}
                    renderMode={`svg`}
                >
                    <Page pageNumber={pageNumber}
                          width={700} height={400}
                          renderMode={`svg`}
                    />
                </Document>
                <div className={`page-controls-pdf`}>
                    <button
                        className={`button-pdf-navi`}
                        type="button"
                        disabled={pageNumber <= 1}
                        onClick={previousPage}
                    >
                        {`<`}
                    </button>
                    <span className={`page-number`}>{pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}</span>
                    <button
                        className={`button-pdf-navi`}
                        type="button"
                        disabled={pageNumber >= numPages}
                        onClick={nextPage}
                    >
                        {`>`}
                    </button>
                </div>
            </div>
        </Layout>
    );

}

DocsPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
}

export default DocsPage

export const docsPageQuery = graphql`
  query DocsByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        title
        description
        author,
        link_pdf {
            name
            publicURL
            relativePath
      }
      }
    }
  }
`

