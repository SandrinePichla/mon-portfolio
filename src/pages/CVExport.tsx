// src/pages/CVExport.tsx
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import CVpdf from "@/CVpdf";

const CVExport = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div>
        <PDFDownloadLink document={<CVpdf />} fileName="CV_Sandrine_Pichla.pdf">
          {({ loading }) => (
            <button className="px-4 py-2 rounded-md border">
              {loading ? "Préparation…" : "Télécharger le PDF"}
            </button>
          )}
        </PDFDownloadLink>
      </div>

      <div className="h-[80vh] border rounded-md overflow-hidden">
        <PDFViewer width="100%" height="100%">
          <CVpdf />
        </PDFViewer>
      </div>
    </div>
  );
};

export default CVExport;
