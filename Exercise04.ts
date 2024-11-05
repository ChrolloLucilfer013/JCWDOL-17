//Exercise No.1
const triangle = (h: number) => {
  let counter = 1;
  for (let i = 0; i < h; i++) {
    let result = "";
    for (let j = 0; j <= i; j++) {
      result += counter > 9 ? counter : "0" + counter + " ";
      counter++;
    }
    console.log(result);
  }
};
triangle(4);