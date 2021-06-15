const fs = require("fs").promises;

const folderName = process.argv.find((value) => value === "test");

fs.readdir(`./${folderName}`).then((files) => {
  const duplicates = [];
  const videos = [];
  const captured = [];

  for (const fileName of files) {
    const extention = fileName.split(".")[1];
    const isVideo = extention === "mov" || extention === "mp4";
    const edited = fileName.startsWith("IMG_E");

    if (isVideo) {
      // video extention
      videos.push(fileName);
    } else {
      // img extention
      if (extention === "aae" || extention === "png") {
        captured.push(fileName);
      }
      if (!edited) {
        duplicates.push(fileName);
      }
    }
  }

  console.log({
    duplicates,
    videos,
    captured,
  });
});

// 1. 사진 동영상 분리
// 2. 동영상 video 폴더 mp4 mov
// 3. png aae => captured
// 4. E 붙은 (편집된 사진) 그대로 둠
// 5. 원본사진 => duplicated
