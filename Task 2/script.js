// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    alert("All fields are required.");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email.");
    return;
  }

  alert("Form submitted successfully!");
});

// To-Do List Function
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (!taskText) return;

  const li = document.createElement("li");
  li.textContent = taskText;
  li.onclick = () => li.remove(); // remove on click

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
