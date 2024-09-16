document.addEventListener('DOMContentLoaded', function () {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phone');
    var addressInput = document.getElementById('address');
    var summaryInput = document.getElementById('summary');
    var profilePicInput = document.getElementById('profilePic');
    var projectsInput = document.getElementById('projects');
    var skillsInput = document.getElementById('skills');
    var generateButton = document.getElementById('generateResume');
    var resumeOutput = document.getElementById('resumeOutput');
    generateButton.addEventListener('click', function () {
        var name = nameInput.value;
        var email = emailInput.value;
        var phone = phoneInput.value;
        var address = addressInput.value;
        var summary = summaryInput.value;
        var profilePic = profilePicInput.value;
        var projects = projectsInput.value;
        var skills = skillsInput.value;
        var resumeHTML = "\n            <div style=\"text-align: center;\">\n                <img src=\"".concat(profilePic, "\" alt=\"Profile Picture\" style=\"max-width: 150px; border-radius: 50%; border: 4px solid #007bff; margin-bottom: 15px;\">\n            </div>\n            <h1>").concat(name, "</h1>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <p><strong>Address:</strong> ").concat(address, "</p>\n            <h2>Summary</h2>\n            <p>").concat(summary, "</p>\n            <h2>Projects</h2>\n            <p>").concat(projects, "</p>\n            <h2>Skills</h2>\n            <p>").concat(skills, "</p>\n        ");
        resumeOutput.innerHTML = resumeHTML;
        // Apply animation
        resumeOutput.classList.remove('visible');
        // Trigger reflow to restart animation
        void resumeOutput.offsetWidth;
        resumeOutput.classList.add('visible');
    });
});
