// import React, { useCallback, useState } from "react";
// import "./PhotoReview.css";
// import Location from "./Location";
// import Buttons from "./Buttons";
// import Caption from "./Caption";
// import Recallcheck from "./Recallcheck";
// // import Sbuttons from "./Sbuttons";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";

// const PhotoReview = () => {
//   const rectangles = [1, 2, 3, 4];
//   const [uploadedFile, setUploadedFile] = useState(null);

//   const handleFileSelect = (file) => {
//     setUploadedFile(file);
//   };

//   const handleDrop = useCallback((event) => {
//     event.preventDefault();

//     const files = event.dataTransfer.files;
//     // Assuming you are handling only one file, update state with the file
//     if (files.length > 0) {
//       setUploadedFile(files[0]);
//     }

//     // Handle other dropped files or actions as needed
//   }, []);

//   const handleDragOver = useCallback((event) => {
//     event.preventDefault();
//   }, []);

//   const handleDragEnter = useCallback((event) => {
//     event.preventDefault();
//     // Add any visual indication when a file is dragged over (e.g., change the background color).
//     event.currentTarget.classList.add("drag-over");
//   }, []);

//   const handleDragLeave = useCallback((event) => {
//     event.preventDefault();

//     event.currentTarget.classList.remove("drag-over");
//   }, []);

//   return (
//     <>
//       <Header></Header>
//       <p className="PhotoReview-Main-Para">
//         The photo added to the top left box will appear on the cover of the
//         report <br />
//         the drop-down boxes are automatically preloaded with the sectors from
//         the current template. The photo will print in the location specified
//         using both drop-down boxes, unless you check "Print At End" for a photo.
//         <br />
//         The caption will be placed under each photo unless you check the 'Use
//         Location As Caption' button check the 'Summary' box to include the photo
//         in the Report Summary in addition to the report body.
//       </p>
//       <div className="PhotoReview-rectangular-container">
//         {rectangles.map((index) => (
//           <div
//             key={index}
//             className="PhotoReview-rectangle"
//             onDrop={handleDrop}
//             onDragOver={handleDragOver}
//             onDragEnter={handleDragEnter}
//             onDragLeave={handleDragLeave}
//           >
//             <Location />
//             {/* <Recallcheck /> */}

//             {/* Drag and drop file upload section */}
//             <div className="PhotoReview-Drag-Drop-Box">
//               {uploadedFile && (
//                 <>
//                   {uploadedFile.type.startsWith("image/") && (
//                     <img
//                       src={URL.createObjectURL(uploadedFile)}
//                       alt="Uploaded Image"
//                       style={{
//                         width: "100%",
//                         height: "100%",
//                         objectFit: "cover",
//                       }}
//                     />
//                   )}

//                   {uploadedFile.type === "application/pdf" && (
//                     <embed
//                       src={URL.createObjectURL(uploadedFile)}
//                       type="application/pdf"
//                       width="100%"
//                       height="100%"
//                     />
//                   )}

//                   {uploadedFile.type.startsWith("video/") && (
//                     <video
//                       controls
//                       width="100%"
//                       height="100%"
//                       src={URL.createObjectURL(uploadedFile)}
//                     />
//                   )}
//                 </>
//               )}

//               {!uploadedFile && (
//                 <p className="Drag-Drop-Box-Para">
//                   You can directly drag & drop a file here to add
//                 </p>
//               )}
//             </div>

//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "Center",
//               }}
//             >
//               <Buttons onFileSelect={handleFileSelect} />
//               {/* <Sbuttons /> */}
//             </div>
//             <Caption />
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default PhotoReview;
import React, { useCallback, useState } from "react";
import "./PhotoReview.css";
import Location from "./Location";
import Buttons from "./Buttons";
import Caption from "./Caption";
import Recallcheck from "./Recallcheck";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const PhotoReview = () => {
  const rectanglesData = [
    { id: 1, label: "Rectangle 1" },
    { id: 2, label: "Rectangle 2" },
    { id: 3, label: "Rectangle 3" },
    { id: 4, label: "Rectangle 4" },
  ];

  const [uploadedFiles, setUploadedFiles] = useState(
    Array(rectanglesData.length).fill(null)
  );

  const handleFileSelect = (file, rectangleIndex) => {
    console.log("File selected:", file);
    console.log("Rectangle Index:", rectangleIndex);

    const updatedFiles = [...uploadedFiles];
    updatedFiles[rectangleIndex] = file;
    setUploadedFiles(updatedFiles);
  };

  const handleDrop = useCallback(
    (event, rectangleIndex) => {
      event.preventDefault();
      const files = event.dataTransfer.files;
      console.log("Files dropped:", files);
      console.log("Rectangle Index:", rectangleIndex);

      if (files.length > 0) {
        const updatedFiles = [...uploadedFiles];
        updatedFiles[rectangleIndex] = files[0];
        setUploadedFiles(updatedFiles);
      }
    },
    [uploadedFiles]
  );

  const handleDragOver = useCallback((event) => {
    event.preventDefault();
  }, []);

  const handleDragEnter = useCallback((event) => {
    event.preventDefault();
    event.currentTarget.classList.add("drag-over");
  }, []);

  const handleDragLeave = useCallback((event) => {
    event.preventDefault();
    event.currentTarget.classList.remove("drag-over");
  }, []);

  return (
    <>
      <Header></Header>
      <p className="PhotoReview-Main-Para">{/* Your existing content */}</p>
      <div className="PhotoReview-rectangular-container">
        {rectanglesData.map((rectangle, index) => (
          <div
            key={rectangle.id}
            className="PhotoReview-rectangle"
            onDrop={(event) => handleDrop(event, index)}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
          >
            <Location />
            <div className="PhotoReview-Drag-Drop-Box">
              {uploadedFiles[index] && (
                <>
                  {uploadedFiles[index].type.startsWith("image/") && (
                    <img
                      src={URL.createObjectURL(uploadedFiles[index])}
                      alt={`Uploaded Image for ${rectangle.label}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  )}
                  {uploadedFiles[index].type === "application/pdf" && (
                    <embed
                      src={URL.createObjectURL(uploadedFiles[index])}
                      type="application/pdf"
                      width="100%"
                      height="100%"
                    />
                  )}
                  {uploadedFiles[index].type.startsWith("video/") && (
                    <video
                      controls
                      width="100%"
                      height="100%"
                      src={URL.createObjectURL(uploadedFiles[index])}
                    />
                  )}
                </>
              )}
              {!uploadedFiles[index] && (
                <p className="Drag-Drop-Box-Para">
                  You can directly drag & drop a file here to add
                </p>
              )}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "Center",
              }}
            >
              <Buttons onFileSelect={(file) => handleFileSelect(file, index)} />
              {/* Include other buttons or components related to each rectangle */}
            </div>
            <Caption />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default PhotoReview;
