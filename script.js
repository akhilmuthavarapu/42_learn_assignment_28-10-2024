function validateJobApplication(form) {
    const name = form.name.value.trim();
    const education = form.education.value;
    const gender = form.gender.value;
    const position = form.position.value;

    let errors = [];

    if (!name) {
        errors.push("Name is required.");
    }

    const validEducation = ["SSC", "Inter", "Degree"];
    if (!validEducation.includes(education)) {
        errors.push("Please select a valid educational qualification.");
    }

    const validGenders = ["Male", "Female"];
    if (!validGenders.includes(gender)) {
        errors.push("Please select a valid gender.");
    }

    const validPositions = ["Analyst", "Developer", "Administrator", "Data Scientist"];
    if (!validPositions.includes(position)) {
        errors.push("Please select a valid position.");
    }

    if (errors.length > 0) {
        return { isValid: false, messages: errors };
    } else {
        return { isValid: true, messages: ["Form is valid."] };
    }
}

document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const validationResult = validateJobApplication(this);
    
    const messageDiv = document.getElementById('message');
    
    if (!validationResult.isValid) {
        messageDiv.innerHTML = validationResult.messages.join('<br>');
        messageDiv.style.color = 'red'; 
        messageDiv.style.fontWeight = 'bold';
        
        
        setTimeout(() => { messageDiv.innerHTML = ''; }, 3000);
        
    } else {
        messageDiv.innerHTML = "Application submitted successfully!";
        messageDiv.style.color = 'green'; 
        messageDiv.style.fontWeight = 'bold';
        
        
        this.reset(); 
        setTimeout(() => { messageDiv.innerHTML = ''; }, 3000); 
   }
});
