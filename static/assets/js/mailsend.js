const emailButton = document.getElementById('email-me');

emailButton.addEventListener('click', async () => {
    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    const signatureInput = document.getElementById("signature");
    const signature = signatureInput.innerHTML;

    try {
        const response = await fetch(`http://127.0.0.1:3000/send-message?email=${email}&signature=${signature}`, {
            method: 'GET',
            mode: 'no-cors'
        });

        if (!response.ok) {
            throw new Error(`Failed to send email: ${response.statusText}`);
        }

        const { message: responseMessage } = await response.json();

        console.log(responseMessage);
        alert(`Message sent to: ${email}`);
    } catch (error) {
        console.error(error);
        alert(`Failed to send message to: ${email}`);
    }
});
