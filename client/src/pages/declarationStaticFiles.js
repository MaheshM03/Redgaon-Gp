

const toTitleFromFilename = (filename) => {
  return filename
    .replace(/\.pdf$/i, "")
    .replace(/_/g, " ")
    .trim();
};

// NOTE:
// CRA cannot enumerate files from `public/` at runtime.
// Update this array whenever you add/remove PDFs in `client/public/Declaration/`.
export const declarationStaticFiles = [
  "कोणत्याही योजनेचा लाभ न घेतल्याचे स्वयंघोषणापत्र.pdf",
  "विधवा असल्याबाबत स्वयंघोषणापत्र.pdf",
  "रहिवाशी स्वयंघोषणापत्र.pdf",
  "वीज जोडणी स्वयंघोषणापत्र.pdf",
  "परित्यक्त्या असल्याबाबत स्वयंघोषणापत्र.pdf",
  "शौचालय असल्याबाबत स्वयंघोषणापत्र.pdf",
  "विभक्त कुटुंब असल्यास स्वयंघोषणापत्र.pdf",
  "हयात असल्याबाबत स्वयंघोषणापत्र.pdf",
  "वयाबाबत स्वयंघोषणापत्र.pdf",
  "वीज जोडणी स्वयंघोषणापत्र.pdf"
]
  .slice()
  .sort((a, b) => a.localeCompare(b, "mr"));

export const buildStaticDeclarations = () => {
  const today = new Date();

  return declarationStaticFiles.map((filename, index) => ({
    _id: `static-${index}`,
    title: toTitleFromFilename(filename),
    category: "Declaration",
    date: today.toLocaleDateString(),
    pdf: `/Declaration/${encodeURIComponent(filename)}`,
  }));
};

