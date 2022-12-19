const randomImage = async () => {
  try {
    let showsPromise = await fetch(
      "http://api.random-avatars.holmista.tech/info/available-resources"
    );
    let showsBody = await showsPromise.json();
    let randomShow =
      showsBody.resources[
        Math.round(Math.random() * showsBody.resources.length)
      ];

    let imagePromise = await fetch(
      `http://api.random-avatars.holmista.tech/images/${randomShow}/random/small`
    );
    let imageBody = await imagePromise.json();
    let randomImage = imageBody.path;

    return randomImage;
  } catch (err) {
    console.log(err);
    return "http://127.0.0.1:8005/default";
  }
};

module.exports = randomImage;
