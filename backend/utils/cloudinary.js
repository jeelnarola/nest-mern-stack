import {v2 as cloudinary} from 'cloudinary'; // load full package
import {config} from 'dotenv'
config()

 cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});
console.log("Done cloudinary.");

export default cloudinary