const fs = require("fs").promises;

const targetFolder = process.argv.find((value) => value === "test");

function copyFiles(fileNames, folderName) {
  fs.mkdir(`./${targetFolder}/${folderName}`).then(() => {
    fileNames.forEach((fileName) => {
      const oldPath = `./${targetFolder}/${fileName}`;
      const newPath = `./${targetFolder}/${folderName}/${fileName}`;

      fs.rename(oldPath, newPath, function (err) {
        if (err) throw err;
        else console.log(`move ${filename} to ${folderName}`);
      });
    });
  });
}

fs.readdir(`./${targetFolder}`).then((fileNames) => {
  const videoNames = fileNames.filter((fileName) => {
    const extention = fileName.split(".")[1];
    const isVideo = extention === "mov" || extention === "mp4";
    return isVideo;
  });

  const capturedNames = fileNames.filter((fileName) => {
    const extention = fileName.split(".")[1];
    const isCaptured = extention === "aae" || extention === "png";
    return isCaptured;
  });

  const duplicatedNames = fileNames.filter((fileName) => {
    const extention = fileName.split(".")[1];
    const edited = !fileName.startsWith("IMG_E") && extention === "jpg";
    return edited;
  });

  copyFiles(videoNames, "video");
  copyFiles(capturedNames, "captured");
  copyFiles(duplicatedNames, "duplicated");
});
