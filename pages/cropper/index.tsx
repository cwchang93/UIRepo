import * as React from "react";
import { useState, useCallback } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

function getCroppedImg(image, crop) {
  console.log("image", image);
  const canvas = document.createElement("canvas");
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = crop.width;
  canvas.height = crop.height;
  const ctx = canvas.getContext("2d");

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height
  );

  // As Base64 string
  const base64Image = canvas.toDataURL("image/jpeg");

  console.log("base64Image", base64Image);
  return base64Image;
}

const Cropper = () => {
  const [crop, setCrop] = useState({
    x: 10,
    y: 10,
    width: 80,
    height: 80,
  });
  const [src, setSrc] = useState(null);

  const [cropImgBase64, setCropImgBase64] = useState(null);

  const imgInput = React.useRef(null);

  const onSelectFile = (e) => {
    const file = e.target.files[0];
    if (e.target.files && e.target.files.length > 0) {
      setSrc(URL.createObjectURL(file));
    }
  };

  const onImageLoaded = () => console.log("loaded");
  const onCropChange = (crop) => {
    console.log("hichange");
    setCrop(crop);
  };

  const onCropComplete = (crop) => {
    console.log("completed", crop);
    console.log("type", typeof crop);

    const img = document.querySelector(".ReactCrop__image");
    console.log("imgInput", imgInput);
    setCropImgBase64(getCroppedImg(img, crop));
  };

  React.useEffect(() => {
    console.log("hiSrc", src);
  }, [src]);

  return (
    <div className="App">
      <div>
        <input
          type="file"
          onChange={(e) => {
            console.log("readytoSelect");
            onSelectFile(e);
          }}
        />
      </div>
      {src && (
        <ReactCrop
          className="react_crop"
          ref={imgInput}
          src={src}
          crop={crop}
          onImageLoaded={() => onImageLoaded}
          onComplete={(e) => onCropComplete(e)}
          onChange={(e) => onCropChange(e)}
        />
      )}

      {/* <button onClick={}>確認</button> */}

      <div className="previewWrap">
        <img src={cropImgBase64} />
      </div>
    </div>
  );
};

export default Cropper;
