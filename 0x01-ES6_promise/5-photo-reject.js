export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    // if promise has an error and the formatted string
    reject(new Error(`${filename} cannot be processed`));
  });
}
