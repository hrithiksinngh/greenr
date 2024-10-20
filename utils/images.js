const getImageUrl = ({
  fileName = "def",
  folderName = "",
  extension = "png",
}) => {
  fileName = fileName.length === 0 ? "def" : fileName;
  folderName = folderName.length === 0 ? "" : folderName + "/";

  return require(`../assets/Images/${folderName}${fileName}.${extension}`)
    .default.src;
};

module.exports = { getImageUrl };
