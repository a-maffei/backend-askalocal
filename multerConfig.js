const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "askalocal",
  allowedFormats: ["jpg", "png", "jpeg"],
  transformation: [{ width: 500, height: 500, crop: "limit" }],
});

const upload = multer({ storage: storage });

module.exports = upload;

/* const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    // const extension = path.extname(file.originalname);
    // cb(null, `${file.originalname}-${Date.now()}${extension}`);
    cb(null, Date.now() + "--" + file.originalname);
  },
}); */

/* const fileFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith("image"))
    return cb(new Error("Invalid file type. Please upload an image"));
  const allowedExtensions = [".png", ".jpg", ".jpeg"];
  const extension = path.extname(file.originalname);
  return allowedExtensions.includes(extension)
    ? cb(null, true)
    : cb(new Error("Type of image not accepted!"));
}; */
/* 
const upload = multer({ storage: storage });

module.exports = upload;
 */
