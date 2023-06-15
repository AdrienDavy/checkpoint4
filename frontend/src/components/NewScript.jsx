import PropTypes from "prop-types";
// import { Document, Page } from "react-pdf";

function NewScript({ scenarioItem }) {
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }
  return (
    <div className="scripts-page-inputs">
      <h1 className="scripts-page-title">{scenarioItem.title}</h1>
      <h2 className="synopsis">Synopsis</h2>
      <div name="synopsis" id="synopsis">
        {scenarioItem.synopsis}
      </div>
      {/* <div className="file">
        <embed
          src={scenarioItem.scenariofile}
          type="application/pdf"
          width="100%"
          height="200px"
        />
      </div> */}
      {/* <div>
        <Document
          file={scenarioItem.scenariofile}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div> */}
    </div>
  );
}

NewScript.propTypes = {
  scenarioItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    scenariofile: PropTypes.string.isRequired, // Assuming scenariofile is the file path to the PDF
  }).isRequired,
};

export default NewScript;
