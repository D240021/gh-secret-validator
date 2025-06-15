const core = require('@actions/core');

try {
    const secretsList = core.getInput('secrets').split(',').map(s => s.trim());

    let allOk = true;

    secretsList.forEach(secret => {
        const secretValue = process.env[secret];

        if (!secretValue || secretValue === '') {
            core.setFailed(`Missing required secret: ${secret}`);
            allOk = false;
        }
    });

    if (allOk) {
        core.info('✅ All required secrets are present.');
    }
} catch (error) {
    core.setFailed(`Error while validating secrets: ${error.message}`);
}
