function volume_sphere() {
    //Write your code here
   let radius = document.getElementById('radius').value;
	let volume = (4/3) * Math.PI * Math.pow(radius, 3);
	
	document.getElementById('volume').value = volume.toFixed(4);
}
// Get the button element with id 'submit'
let calculateButton = document.getElementById("submit");

// Add an event listener for the click event on the button
calculateButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form submission
  volume_sphere(); // Call the volume_sphere function
});
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
