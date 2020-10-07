const videoElement = document.getElementById('video');
const buttonCapture = document.getElementById('button-capture')
const buttonLaunch = document.getElementById('button-launch')

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try { 
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (err) {
    console.log('Fail!', err)
  }
}

buttonCapture.addEventListener('click', () => {
  selectMediaStream();
})

buttonLaunch.addEventListener('click', async () => {
  // Disable Button
  buttonLaunch.disabled = true;

  // Start picture in picture
  await videoElement.requestPictureInPicture();

  // Reset Button
  buttonLaunch.disabled = false;
})

// On load
