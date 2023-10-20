const addTransformation = (url) => {
  const foo = url.split("/");
  const index = foo.findIndex((chunk) => chunk === "upload");
  foo.splice(index + 1, 0, "t_mini");
  return foo.join("/");
};

export const getImages = async () => {
  const rawResult = await fetch(
    "https://api.cloudinary.com/v1_1/dawkfbcvp/resources/image/upload?max_results=100?max_results=250",
    { headers: { Authorization: `Basic ${process.env.CLOUDINARY_AUTH}` } },
  );

  const { resources } = await rawResult.json();
  return resources.map(({ url, folder }) => ({
    url: addTransformation(url),
    id: folder,
  }));
};
