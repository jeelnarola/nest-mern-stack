export function getBase64Size(base64String) {
  // Remove data URL prefix if exists
  let stringLength = base64String.length - (base64String.indexOf(",") + 1);
  let sizeInBytes = 4 * Math.ceil(stringLength / 3) * 0.5624896334383812;
  return sizeInBytes; // in bytes
}