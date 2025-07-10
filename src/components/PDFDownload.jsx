import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useReactToPrint } from 'react-to-print';

function PDFDownload({ contentRef }) {
  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
    documentTitle: 'Jass-Khinda-Resume',
    pageStyle: `
      @media print {
        body { margin: 0; padding: 20px; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
        .no-print { display: none !important; }
        .print-only { display: block !important; }
        .bg-gradient-to-r { background: linear-gradient(to right, #3b82f6, #0ea5e9) !important; }
        .text-white { color: white !important; }
        .dark\\:bg-gray-800 { background: white !important; }
        .dark\\:text-white { color: black !important; }
        .dark\\:text-gray-300 { color: #4a5568 !important; }
        .shadow-lg { box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important; }
        .rounded-2xl { border-radius: 8px !important; }
        .mb-8 { margin-bottom: 24px !important; }
        .p-8 { padding: 16px !important; }
      }
    `,
  });

  return (
    <motion.button
      onClick={handlePrint}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group no-print"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <Download className="w-6 h-6 group-hover:animate-bounce" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Download PDF
      </span>
    </motion.button>
  );
}

export default PDFDownload;