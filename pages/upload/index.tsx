import * as React from "react";
// const loadImage = require("/static/load-image.all.min.js");
import loadImage from "static/load-image.all.min.js";

const Upload = () => {
  const [imgFile, setImgFile] = React.useState(null);

  const fileSelectedHandler = (e) => {
    const imgFile = e.target.files[0];
    console.log("imgFile", imgFile);
    setImgFile(imgFile);
  };

  const handleImgInfo = () => {
    loadImage(
      imgFile,
      function(img, data) {
        console.log("Original image head: ", data.imageHead);
        console.log("Exif data: ", data.exif); // requires exif extension
        console.log("IPTC data: ", data.iptc); // requires iptc extension
      },
      { meta: true }
    );
  };

  return (
    <>
      <div>Hi, I'm Input</div>
      <input type="file" onChange={(e) => fileSelectedHandler(e)} />

      <button onClick={() => handleImgInfo()}>readInfo</button>
    </>
  );
};

export default Upload;
