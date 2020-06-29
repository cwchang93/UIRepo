import * as React from "react";
import { useState, useCallback } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

// Base64 Image to Canvas with a Crop
export function image64toCanvasRef(canvasRef, image64, pixelCrop) {
  const canvas = canvasRef; // document.createElement('canvas');
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;
  const ctx = canvas.getContext("2d");
  const image = new Image();
  image.src = image64;
  image.onload = function() {
    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );
  };
}

const Cropper = () => {
  const [crop, setCrop] = useState({
    x: 10,
    y: 10,
    width: 80,
    height: 80,
  });
  const [zoom, setZoom] = useState(1);

  const [src, setSrc] = useState(null);

  const onSelectFile = (e) => {
    const file = e.target.files[0];
    if (e.target.files && e.target.files.length > 0) {
      setSrc(URL.createObjectURL(file));
    }
  };

  const onImageLoaded = () => console.log("loaded");
  const onCropChange = (crop) => {
    console.log("cp", crop);
    setCrop(crop);
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);

    const canvasRef = this.imagePreviewCanvasRef.current;
    image64toCanvasRef(canvasRef, src, croppedAreaPixels);
  }, []);

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
          src={src}
          // src={"/static/tempsnip.png"}
          crop={crop}
          onImageLoaded={() => onImageLoaded}
          onComplete={() => onCropComplete}
          onChange={(e) => onCropChange(e)}
        />
      )}

      {/* <button onClick={}>確認</button> */}

      <div className="previewWrap">
        <img src={src} />
      </div>
    </div>
  );
};

export default Cropper;
