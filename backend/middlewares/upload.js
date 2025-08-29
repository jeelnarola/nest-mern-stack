import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // relative folder
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  const imageTypes = [".jpg", ".jpeg", ".png"];
  const videoTypes = [".mp4", ".mov", ".avi", ".webm"];

  if (imageTypes.includes(ext)) {
    cb(null, true);
  } else if (videoTypes.includes(ext)) {
    if (req.videoUploaded) {
      return cb(new Error("Only one video file is allowed"), false);
    }
    req.videoUploaded = true;
    cb(null, true);
  } else {
    cb(new Error("Only .jpg, .jpeg, .png images and 1 video are allowed"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // ✅ 10 MB max per file
});

export default upload;
