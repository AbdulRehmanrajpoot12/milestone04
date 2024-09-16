document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const phoneInput = document.getElementById('phone') as HTMLInputElement;
    const addressInput = document.getElementById('address') as HTMLInputElement;
    const summaryInput = document.getElementById('summary') as HTMLTextAreaElement;
    const profilePicInput = document.getElementById('profilePic') as HTMLInputElement;
    const projectsInput = document.getElementById('projects') as HTMLTextAreaElement;
    const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;
    const generateButton = document.getElementById('generateResume') as HTMLButtonElement;
    const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;

    generateButton.addEventListener('click', () => {
        const name = nameInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;
        const address = addressInput.value;
        const summary = summaryInput.value;
        const profilePic = profilePicInput.value;
        const projects = projectsInput.value;
        const skills = skillsInput.value;

        const resumeHTML = `
            <div style="text-align: center;">
                <img src="${profilePic}" alt="Profile Picture" style="max-width: 150px; border-radius: 50%; border: 4px solid #007bff; margin-bottom: 15px;">
            </div>
            <h1>${name}</h1>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
            <h2>Summary</h2>
            <p>${summary}</p>
            <h2>Projects</h2>
            <p>${projects}</p>
            <h2>Skills</h2>
            <p>${skills}</p>
        `;

        resumeOutput.innerHTML = resumeHTML;

        // Apply animation
        resumeOutput.classList.remove('visible');
        // Trigger reflow to restart animation
        void resumeOutput.offsetWidth;
        resumeOutput.classList.add('visible');
    });
});

