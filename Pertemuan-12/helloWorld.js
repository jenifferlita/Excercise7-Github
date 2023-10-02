const helloWorld = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
};
const messages = async () => {
  let msg = await helloWorld();
  console.log(msg);
};
messages();
