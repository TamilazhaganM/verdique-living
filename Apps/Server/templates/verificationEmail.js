const verificationEmailTemplate = (verificationLink) => {
    return `
        <h1>🌿 Welcome to Verdique Living</h1>

        <p>
            Thank you for registering.
            Please verify your email by clicking the button below.
        </p>

        <a href="${verificationLink}">
            Verify Email
        </a>

        <p>
            This link expires in 1 hour.
        </p>
    `;
};

export default verificationEmailTemplate;