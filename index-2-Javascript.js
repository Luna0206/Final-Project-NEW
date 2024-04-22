<script>
        function submitForm() {
          var title = document.getElementById('recipe-title').value;
          var introduction = document.getElementById('cooking-introduction').value;
          var category = document.getElementById('category').value;
          var tags = document.getElementById('tags').value;
          var isValid = true; 
          var messages = [];

          if (!title || title.length <= 1) {
            messages.push('The recipe title must be more than 1 letter.');
            isValid = false;
          }

          if (!introduction.trim()) {
            messages.push('Cooking introduction cannot be empty.');
            isValid = false;
          }

          if (!category) {
            messages.push('Please select a category.');
            isValid = false;
          }

          if (!tags.trim()) {
            messages.push('Please add at least one tag.');
            isValid = false;
          }

          if (isValid) {
            var modal = document.getElementById('submitModal');
            modal.style.display = 'block';
          } else {
            alert(messages.join('\n'));
          }

          return false;
        }

        function resetForm() {
          document.getElementById('recipe-form').reset();
          var modal = document.getElementById('submitModal');
          modal.style.display = 'none'; // 모달을 닫습니다.
        }

        document.addEventListener('DOMContentLoaded', function () {
          var span = document.getElementsByClassName('close')[0];
          span.onclick = function () {
            var modal = document.getElementById('submitModal');
            modal.style.display = 'none';
          };

          window.onclick = function (event) {
            var modal = document.getElementById('submitModal');
            if (event.target === modal) {
              modal.style.display = 'none';
            }
          };
        });

          
        
//add more.
        document.addEventListener('DOMContentLoaded', function () {
            var addButton = document.querySelector('.add-more'); // 'Add More' 버튼을 선택합니다.
            var container = document.querySelector('.section-ingredients'); // 입력 필드를 담을 컨테이너를 선택합니다.
            var buttonContainer = document.querySelector('.button-container'); // 버튼이 담긴 컨테이너를 선택합니다.

            addButton.addEventListener('click', function () {
              var newIngredient = document.createElement('div');
              newIngredient.classList.add('ingredient-fields');

              var inputIngredient = document.createElement('input');
              inputIngredient.type = 'text';
              inputIngredient.placeholder = 'Ex) Pork mince';
              inputIngredient.name = 'ingredient';

              var inputAmount = document.createElement('input');
              inputAmount.type = 'text';
              inputAmount.placeholder = 'Ex) 500g (Amount)';
              inputAmount.name = 'amount';

              newIngredient.appendChild(inputIngredient);
              newIngredient.appendChild(inputAmount);

              container.insertBefore(newIngredient, buttonContainer);
            });

            // 'Add Step' 
            var addStepButton = document.querySelector('.add-step');
            addStepButton.addEventListener('click', function () {
              var newStepDiv = document.createElement('div');
              newStepDiv.classList.add('step');

              var newTextArea = document.createElement('textarea');
              newTextArea.setAttribute('name', 'step-description');
              newTextArea.setAttribute('placeholder', 'Ex) Please trim the fat from the beef and slice it into 2cm by 2cm pieces, both horizontally and vertically.');

              var newButton = document.createElement('button');
              newButton.setAttribute('type', 'button');
              newButton.classList.add('upload-image');
              newButton.textContent = '+ Upload Image';

              newStepDiv.appendChild(newTextArea);
              newStepDiv.appendChild(newButton);

              var stepContainer = document.querySelector('.step-container');

              stepContainer.insertBefore(newStepDiv, addStepButton);
            });

 //upload image
         
          document.getElementById('file-upload').addEventListener('change', function (event) {
            var files = event.target.files;
            if (files.length > 0) {
              var fileReader = new FileReader();

              fileReader.onload = function (e) {
                var uploadedImage = document.getElementById('uploaded-image');
                uploadedImage.src = e.target.result;
                uploadedImage.style.display = 'block';

                var uploadButton = document.getElementById('upload-button');
                uploadButton.style.display = 'none';
              };

              fileReader.readAsDataURL(files[0]);
            }
          });

 //upload final dish image
          for (let i = 1; i < 7; i++) {
            const prefix = 'upload-final-dish-';
            const inputFile = document.createElement('input');
            inputFile.id = prefix + i;
            inputFile.type = 'file';
            inputFile.style.display = 'none';
            inputFile.addEventListener('change', handleImageUpload);

            const imgTag = document.createElement('img');
            imgTag.id = prefix + i + '-image';
            imgTag.style.display = 'none';

            const uploadFinalImageButton = document.createElement('button');
            uploadFinalImageButton.id = prefix + i + '-button';
            uploadFinalImageButton.classList += 'upload-image';
            uploadFinalImageButton.onclick = function (e) {
              e.preventDefault();
              inputFile.click();
            }
            uploadFinalImageButton.innerHTML = '+ Upload Image';


            const finalImageContainer = document.getElementById('final-image-upload-container');
            finalImageContainer.appendChild(inputFile);
            finalImageContainer.appendChild(imgTag);
            finalImageContainer.appendChild(uploadFinalImageButton)
          }
          function handleImageUpload(event) {
            var files = event.target.files;
            if (files.length > 0) {
              var fileReader = new FileReader();

              fileReader.onload = function (e) {
                var uploadedImage = document.getElementById(event.target.id + '-image');
                uploadedImage.src = e.target.result;
                uploadedImage.style.display = 'block';
                uploadedImage.style.width = '167px';
                uploadedImage.style.height = '200px';

                var uploadButton = document.getElementById(event.target.id + '-button');
                uploadButton.style.display = 'none';
              };

              fileReader.readAsDataURL(files[0]);
            }
          }


//modal
          // 'Submit' 버튼을 클릭했을 때 모달을 보이게 하는 코드
          function submitForm() {

            var modal = document.getElementById('submitModal');
            modal.style.display = 'block';

            var span = document.getElementsByClassName('close')[0];
            span.onclick = function () {
              modal.style.display = 'none';
            };

            return false;
          }

          window.onclick = function (event) {
            var modal = document.getElementById('submitModal');
            if (event.target == modal) {
              modal.style.display = 'none';
            }
          };

          });

          


      </script>