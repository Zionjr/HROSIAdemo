// JavaScript for basic functionality in the demo app

// Placeholder for posts in the community feed
const feed = document.getElementById("feed");
const postButton = document.querySelector("button");
const textarea = document.querySelector("textarea");

// Function to post in the community feed
postButton.addEventListener("click", () => {
  const text = textarea.value.trim();
  if (text) {
    const post = document.createElement("p");
    post.textContent = text;
    feed.prepend(post);
    textarea.value = "";
  }
});
