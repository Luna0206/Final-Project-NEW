document.addEventListener('DOMContentLoaded', function () {
    // Elements
    var modal = document.getElementById('submitModal');
    var spanClose = document.getElementsByClassName('close')[0];
    var addButton = document.querySelector('.add-more');
    var addStepButton = document.querySelector('.add-step');
    var container = document.querySelector('.section-ingredients');
    var stepContainer = document.querySelector('.step-container');
    var buttonContainer = document.querySelector('.button-container');
    var finalImageContainer = document.getElementById('final-image-upload-container');

    // Modal close handlers
    spanClose.onclick = function () {
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

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
        newStepDiv.innerHTML = `<textarea name="step-description" placeholder="Ex) Please trim the fat from the beef and slice it into 2cm by 2cm pieces, both horizontally and vertically."></textarea>
                                <button type="button" class="upload-image">+ Upload Image</button>`;
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
                    imgTag.style.width = '167px';
                    imgTag.style.height = '200px';
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


//햄버거 메뉴//
const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});