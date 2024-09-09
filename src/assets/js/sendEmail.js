// document.getElementById('contact-form').addEventListener('submit', function (event) {
//     event.preventDefault();
//     const formData = new FormData(this);
//     console.log(formData, "---formData")
//     fetch('https://pyroshield-api.onrender.com/send', {
//         method: 'POST',
//         body: formData
//     })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.text();
//         })
//         .then(data => {
//             // Hide the contact form
//             document.getElementById('contact').classList.add('hidden');
//             // Show the thank you message
//             document.getElementById('thank-you').classList.remove('hidden');
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             alert('Failed to send email.');
//         });
// });
function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Fetch API endpoint
    fetch('https://pyroshield-api.onrender.com/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        })
    })
        .then(response => {
            // Hide the contact form
            document.getElementById('contact').classList.add('hidden');
            // Show the thank you message
            document.getElementById('thank-you').classList.remove('hidden');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
}
