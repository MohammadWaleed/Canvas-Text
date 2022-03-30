import React, { useEffect, useState } from 'react';

const Canvas = () => {
  const [name, setName] = useState('asdasd');

  useEffect(() => {

    let bgImg = new Image();
    bgImg.src = '/images/1.jpg';
    bgImg.onload = () => {
        gCtx.drawImage(bgImg, 0, 0, gElCanvas.width, gElCanvas.height);
    }

    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    ctx.reset();
    ctx.font = '30px Arial';
    ctx.fillText(name, 10, 250);
  }, [name]);

  const download_image = () => {
    // Dump the canvas contents to a file.
    var canvas = document.getElementById('myCanvas');
    var image = canvas.toDataURL();
    // Create a link
    var aDownloadLink = document.createElement('a');
    // Add the name of the file to the link
    aDownloadLink.download = `${name}.png`;
    // Attach the data to the link
    aDownloadLink.href = image;
    // Get the code to click the download link
    aDownloadLink.click();
  };

  return (
    <>
      <canvas id="myCanvas" width="500" height="500">
        Your browser does not support the canvas element.
      </canvas>
      <textarea
        type="text"
        onChange={({ target: { value } }) => {
          setName(value);
        }}
      >
        {name}
      </textarea>
      <button onClick={download_image}>Download</button>
    </>
  );
};

export default Canvas;
