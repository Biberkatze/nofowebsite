// functions/getPastBattles.js

exports.handler = async (event, context) => {
    try {
        // Here you would fetch past battles from your database or any other storage mechanism
        // For this example, let's assume we have a predefined list of past battles
        const pastBattles = [
            {
                squadron: 'Alpha',
                airCount: 3,
                groundCount: 2,
                spaaCount: 1,
                content: 'Past battle content 1...'
            },
            {
                squadron: 'Bravo',
                airCount: 2,
                groundCount: 1,
                spaaCount: 0,
                content: 'Past battle content 2...'
            },
            // Add more past battles here if needed
        ];

        return {
            statusCode: 200,
            body: JSON.stringify(pastBattles)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to fetch past battles', error: error.message })
        };
    }
};
