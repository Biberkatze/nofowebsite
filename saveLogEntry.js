// functions/saveLogEntry.js

exports.handler = async (event, context) => {
    try {
        const requestBody = JSON.parse(event.body);
        const logEntry = requestBody;

        // Here you can save the log entry to a database or any other storage mechanism
        // For this example, we'll just return the saved log entry
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Log entry saved successfully', logEntry: logEntry })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to save log entry', error: error.message })
        };
    }
};
