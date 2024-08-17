// Visit: https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API

const videoElement = document.getElementById("video");
const button = document.getElementById("button");
const refreshButton = document.getElementById("refresh-button");

// Prompt to select media stream, pass to video element, play
async function selectMediaStream() {
  try {
    captureStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = captureStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("ERROR --> ", error);
  }
}

// Once clicked, show picture in picture
button.addEventListener("click", async () => {
  // Disable button
  button.disabled = true;

  // Start picture in picture
  await videoElement.requestPictureInPicture();

  // Reset button
  button.disabled = false;
});

// Once clicked, refresh the page to select new screen (picture)
refreshButton.addEventListener("click", () => {
  window.location.reload();
});

// On Load
selectMediaStream();
