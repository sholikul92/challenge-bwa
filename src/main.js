const imageInput = document.getElementById("photo");
const imagePreview = document.getElementById("image-preview");
const wrapInputFile = document.getElementById("wrap-input-file");
const btnRemoveImage = document.getElementById("btn-remove-image");
const errorMessage = document.getElementById("error-message");

imageInput.addEventListener("change", (e) => {
  const file = e.target.files[0];

  if (file) {
    if (!file.type.startsWith("image/")) {
      errorMessage.classList.replace("hidden", "block");
      return;
    }
    const reader = new FileReader();

    reader.onload = (e) => {
      imagePreview.src = e.target.result;
      imagePreview.classList.replace("hidden", "block");
    };

    reader.readAsDataURL(file);
    wrapInputFile.classList.add("hidden");
    btnRemoveImage.classList.replace("hidden", "block");
    errorMessage.classList.replace("block", "hidden");
  } else {
    imagePreview.classList.add("hidden");
  }
});

btnRemoveImage.addEventListener("click", () => {
  imageInput.value = "";
  imagePreview.src = "";
  imagePreview.classList.replace("block", "hidden");
  wrapInputFile.classList.replace("hidden", "block");
  btnRemoveImage.classList.replace("block", "hidden");
});
