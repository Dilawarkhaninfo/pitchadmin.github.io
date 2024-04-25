ClassicEditor
    .create(document.querySelector('#editor'))
    .catch(error => {
        console.error(error);
    });

ClassicEditor
    .create(document.querySelector('#editor2'))
    .catch(error => {
        console.error(error);
    });




// Function to handle file drop event
function handleDrop(event) {
    event.preventDefault();
    var files = event.dataTransfer.files;
    if (files.length > 0) {
        var uploadedImage = document.getElementById("uploadedImage");
        var uploadContent = document.getElementById("uploadContent");

        var file = files[0];
        var reader = new FileReader();

        reader.onload = function (e) {
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = "block"; // Show the uploaded image
            uploadContent.style.display = "none"; // Hide the upload content
        };

        reader.readAsDataURL(file);
    }
}

// Function to prevent default behavior of drag events
function preventDefaults(event) {
    event.preventDefault();
    event.stopPropagation();
}

// Function to handle file selection event
function handleFileUpload(event) {
    var files = event.target.files;
    if (files.length > 0) {
        var uploadedImage = document.getElementById("uploadedImage");
        var uploadContent = document.getElementById("uploadContent");

        var file = files[0];
        var reader = new FileReader();

        reader.onload = function (e) {
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = "block"; // Show the uploaded image
            uploadContent.style.display = "none"; // Hide the upload content
        };

        reader.readAsDataURL(file);
    }
}

function triggerUpload() {
    document.getElementById("uploadInput").click();
}

// Event listeners for drag events
document.addEventListener("dragover", preventDefaults, false);
document.addEventListener("dragenter", preventDefaults, false);
document.addEventListener("dragleave", preventDefaults, false);
document.addEventListener("drop", handleDrop, false);




function triggerUpload2() {
    document.getElementById("uploadInput2").click();
}

function handleFileUpload2(event) {
    var files = event.target.files;
    var uploadedImage = document.getElementById("uploadedImage2");
    var uploadContent = document.getElementById("uploadContent2");

    if (files.length > 0) {
        var file = files[0];
        var reader = new FileReader();

        reader.onload = function (e) {
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = "block"; // Show the uploaded image
            uploadContent.style.display = "none"; // Hide the upload content
        };

        reader.readAsDataURL(file);
    }
}


function triggerUpload3() {
    document.getElementById("uploadInput3").click();
}

function handleFileUpload3(event) {
    var files = event.target.files;
    var uploadedImage = document.getElementById("uploadedImage3");
    var uploadContent = document.getElementById("uploadContent3");

    if (files.length > 0) {
        var file = files[0];
        var reader = new FileReader();

        reader.onload = function (e) {
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = "block"; // Show the uploaded image
            uploadContent.style.display = "none"; // Hide the upload content
        };

        reader.readAsDataURL(file);
    }
}



function triggerUpload4() {
    document.getElementById("uploadInput4").click();
}

function handleFileUpload4(event) {
    var files = event.target.files;
    var uploadedImage = document.getElementById("uploadedImage4");
    var uploadContent = document.getElementById("uploadContent4");

    if (files.length > 0) {
        var file = files[0];
        var reader = new FileReader();

        reader.onload = function (e) {
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = "block"; // Show the uploaded image
            uploadContent.style.display = "none"; // Hide the upload content
        };

        reader.readAsDataURL(file);
    }
}


var activeElement = null;

function toggleCustomClass(element) {
    var imgElement = element.querySelector('img');
    var overlayElement = element.nextElementSibling;

    if (activeElement !== null && activeElement !== element) {
        var activeImgElement = activeElement.querySelector('img');
        var activeOverlayElement = activeElement.nextElementSibling;

        activeImgElement.classList.remove('cus_select');
        activeOverlayElement.classList.remove('active');
    }

    if (imgElement.classList.contains('cus_select')) {
        imgElement.classList.remove('cus_select');
        overlayElement.classList.remove('active');
        activeElement = null;
    } else {
        imgElement.classList.add('cus_select');
        overlayElement.classList.add('active');
        activeElement = element;
    }
}

