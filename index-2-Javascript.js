document.addEventListener('DOMContentLoaded', function () {

// Elements
var addButton = document.querySelector('.add-more');
var addStepButton = document.querySelector('.add-step');
var container = document.querySelector('.section-ingredients');
var stepContainer = document.querySelector('.step-container');
var buttonContainer = document.querySelector('.button-container');
var finalImageContainer = document.getElementById('final-image-upload-container');

//hamburger menu//
const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

 // Add ingredient fields
addButton.addEventListener('click', function () {
var newIngredient = document.createElement('div');
newIngredient.classList.add('ingredient-fields');
newIngredient.innerHTML = `<input type="text" placeholder="Ex) Pork mince" name="ingredient">
                                   <input type="text" placeholder="Ex) 500g (Amount)" name="amount">`;
container.insertBefore(newIngredient, buttonContainer);
    });

// Add cooking step fields

addStepButton.addEventListener('click', function () {
var newStepDiv = document.createElement('div');
newStepDiv.classList.add('step');
newStepDiv.innerHTML = `<textarea id="step-description" name="step-description" 
            placeholder="Ex) Please trim the fat from the beef and slice it into 2cm by 2cm pieces, both horizontally and vertically."></textarea>
            <div class="image-upload-container">
              <input type="file" id="file-upload" style="display: none;" />
              <img id="uploaded-image" style="display: none;" />
              <button type="button" id="upload-button" onclick="document.getElementById('file-upload').click();">+ Upload
                Image</button>
            </div>`;
stepContainer.insertBefore(newStepDiv, addStepButton);
    });

    

// File upload handlers
function setupImageUpload(prefix) {
    const inputFile = document.createElement('input');
    inputFile.type = 'file';
    inputFile.id = prefix + 'input';
    inputFile.style.display = 'none';

    const imgTag = document.createElement('img');
    imgTag.id = prefix + 'image';
    imgTag.style.display = 'none';

    const uploadButton = document.createElement('button');
    uploadButton.classList.add('upload-image');
    uploadButton.textContent = '+ Upload Image';
    uploadButton.onclick = function (e) {
            e.preventDefault();
            inputFile.click();
        };

inputFile.addEventListener('change', function handleImageUpload(event) {
    var files = event.target.files;
    if (files.length > 0) {
    var fileReader = new FileReader();
    fileReader.onload = function (e) {
        imgTag.src = e.target.result;
        imgTag.style.display = 'block';
        imgTag.style.width = '150px';
        imgTag.style.height = '180px';
        uploadButton.style.display = 'none';
                };
        fileReader.onerror = function () {
                    alert('Error reading file!');
                };
        fileReader.readAsDataURL(files[0]);
            }
        });

        finalImageContainer.appendChild(inputFile);
        finalImageContainer.appendChild(imgTag);
        finalImageContainer.appendChild(uploadButton);
    }

// Setup multiple image uploads
    for (let i = 1; i <= 6; i++) {
        setupImageUpload('upload-final-dish-' + i);
    }
});


//submit//
 function logSubmit(event) {
  event.preventDefault(); 

  let isValid = true; 
  const requiredFields = document.querySelectorAll('#recipe-form input[required], #recipe-form textarea[required]');

  requiredFields.forEach(field => {
    if (field.value.trim() === "") {
      isValid = false;
    }
  });

  if (!isValid) {
    alert("Please fill out all required fields.");
    return false;
  }

  log.textContent = 'Thanks for submitting your recipe';
  log.classList.add('show'); 

}

const form = document.getElementById("recipe-form");
const log = document.getElementById("log");
form.addEventListener("submit", logSubmit);

document.querySelector('.cancel').addEventListener('click', function() {
  form.reset(); 
  log.textContent = ''; 
  log.classList.remove('show'); 
});






   