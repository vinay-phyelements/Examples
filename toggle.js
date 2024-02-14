const face = document.getElementById('face');

face.addEventListener('click', function() {
    if (face.textContent === "😂") {
        face.textContent = "😭"; 
        console.log("Crying");
    } else {
        face.textContent = "😂"; 
        console.log("Laughing");

    }
});
