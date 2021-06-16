const fs = require("fs").promises;

const targetFolder = process.argv.find((value) => value === "test");

function copyVideos(fileNames) {
  const vidoeNames = fileNames.filter((fileName) => {
    const extention = fileName.split(".")[1];
    const isVideo = extention === "mov" || extention === "mp4";
    return isVideo;
  });

  fs.mkdir(`./${targetFolder}/videos`).then(() => {
    vidoeNames.forEach((fileName) => {
      const oldPath = `./${targetFolder}/${fileName}`;
      const newPath = `./${targetFolder}/videos/${fileName}`;

      fs.rename(oldPath, newPath, function (err) {
        if (err) throw err;
      });
    });
  });
}

fs.readdir(`./${targetFolder}`).then((fileNames) => {
  copyVideos(fileNames);
});

// fs.readdir(`./${targetFolder}`).then((files) => {
//   const duplicates = [];
//   const videos = [];
//   const captures = [];

//   for (const fileName of files) {

//     const captured = extention === "aae" || extention === "png";
//     const edited = fileName.startsWith("IMG_E");

//     if (isVideo) {
//       // video extention
//       videos.push(fileName);
//     } else {
//       // img extention

//       if (!edited) {
//         duplicates.push(fileName);
//       } else {
//         captured.push(fileName);
//       }
//     }
//   }
//   console.log({
//     duplicates,
//     videos,
//     captures,
//   });

// });

// 1. 사진 동영상 분리
// 2. 동영상 video 폴더 mp4 mov
// 3. png aae => captured
// 4. E 붙은 (편집된 사진) 그대로 둠
// 5. 원본사진 => duplicated

//   fs.mkdir(`./${targetFolder}/duplicate`).then(() => {
//     duplicates.forEach((fileName) => {
//       const oldPath = `./${targetFolder}/${fileName}`;
//       const newPath = `./${targetFolder}/duplicate/${fileName}`;

//       fs.rename(oldPath, newPath, function (err) {
//         if (err) throw err;
//       });
//     });
//   });

//   fs.mkdir(`./${targetFolder}/videos`).then(() => {
//     videos.forEach((fileName) => {
//       const oldPath = `./${targetFolder}/${fileName}`;
//       const newPath = `./${targetFolder}/videos/${fileName}`;

//       fs.rename(oldPath, newPath, function (err) {
//         if (err) throw err;
//       });
//     });
//   });

//   fs.mkdir(`./${targetFolder}/captured`).then(() => {
//     captured.forEach((fileName) => {
//       const oldPath = `./${targetFolder}/${fileName}`;
//       const newPath = `./${targetFolder}/captured/${fileName}`;

//       fs.rename(oldPath, newPath, function (err) {
//         if (err) throw err;
//       });
//     });
//   });
