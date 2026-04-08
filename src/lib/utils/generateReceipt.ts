import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function generateReceiptPdf(
  receiptElement: HTMLElement,
  donationId: string,
): Promise<void> {
  const canvas = await html2canvas(receiptElement, {
    scale: 2,
    backgroundColor: "#faf8f3",
    useCORS: true,
  });

  const imageData = canvas.toDataURL("image/png");
  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "pt",
    format: "a4",
  });

  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  const imgWidth = canvas.width;
  const imgHeight = canvas.height;
  const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

  const renderWidth = imgWidth * ratio;
  const renderHeight = imgHeight * ratio;
  const x = (pdfWidth - renderWidth) / 2;
  const y = (pdfHeight - renderHeight) / 2;

  pdf.addImage(imageData, "PNG", x, y, renderWidth, renderHeight);
  pdf.save(`BACE-Donation-Receipt-${donationId}.pdf`);
}
