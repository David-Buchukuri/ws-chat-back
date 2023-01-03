const randomImage = async () => {
  try {
    let showsPromise = await fetch(
      "https://api.random-avatars.holmista.tech/resource/available-resources"
    );
    let showsBody = await showsPromise.json();
    let randomShow =
      showsBody.resources[
        Math.round(Math.random() * showsBody.resources.length)
      ];

    let imagePromise = await fetch(
      `https://api.random-avatars.holmista.tech/images/${randomShow}/random/small`
    );
    let imageBody = await imagePromise.json();
    let randomImage = imageBody.path;

    return randomImage;
  } catch (err) {
    return null;
  }
};

module.exports = randomImage;
