const { readFile, writeFile } = require("fs");
readFile("./NewFol/Test/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./NewFol/Test/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./NewFol/Test/newResult.txt",
      `write on file using async ${first} , ${second} `,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
