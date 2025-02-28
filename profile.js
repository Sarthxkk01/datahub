// DOM Elements
const profilePic = document.getElementById('profile-pic');
const uploadPic = document.getElementById('upload-pic');
const uploadBtn = document.getElementById('upload-btn');
const removeBtn = document.getElementById('remove-btn');
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const gmailInput = document.getElementById('gmail');
const saveBtn = document.getElementById('save-btn');

// Default profile picture
const defaultPic = 'default-avatar.png';

// Event Listener for Upload Button
uploadBtn.addEventListener('click', () => {
  uploadPic.click();
});

// Event Listener for File Input
uploadPic.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profilePic.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Event Listener for Remove Button
removeBtn.addEventListener('click', () => {
  profilePic.src = defaultPic;
  uploadPic.value = ''; // Clear the file input
});

// Event Listener for Save Button
saveBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  const surname = surnameInput.value.trim();
  const gmail = gmailInput.value.trim();

  if (name && surname && gmail) {
    alert('Profile updated successfully!');
    console.log('Name:', name);
    console.log('Surname:', surname);
    console.log('Gmail:', gmail);
    console.log('Profile Picture:', profilePic.src);
  } else {
    alert('Please fill in all fields.');
  }
});