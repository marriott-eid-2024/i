function saveImage() {
  const image = document.getElementById("image");
  const text = document.getElementById("text").value;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = image.width;
  canvas.height = image.height;

  ctx.drawImage(image, 0, 0);
  ctx.font = "80px tahoma";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  // Adjust position based on image and text length
  //   ctx.fillText(text, canvas.width / 2.5 - text.length * 2, canvas.height / 1.4);

  let wd = canvas.width / 3.75;
  let ht = canvas.height / 1.4;

  ctx.fillText(text, wd, ht);

  const link = document.createElement("a");
  link.href = canvas.toDataURL();
  link.download = "new-image.png";
  link.click();
}
