import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PDFList = () => {
  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/s3-pdfs/')
      .then(response => setPdfs(response.data.pdfs))
      .catch(error => console.error("Error fetching PDFs:", error));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">📚 Available PDFs</h2>
      <ul className="space-y-3">
        {pdfs.map((pdf, index) => (
          <li key={index} className="bg-white shadow p-4 rounded flex justify-between items-center">
            <span>{pdf.name}</span>
            <div className="space-x-2">
              <a href={pdf.url} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-3 py-1 rounded">View</a>
              <a href={pdf.url} download className="bg-green-600 text-white px-3 py-1 rounded">Download</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PDFList;
