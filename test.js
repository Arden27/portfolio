const key = require("./test_oak.js");
const readline = require("readline");
const OpenAI = require("openai");
const openai = new OpenAI({ apiKey: key });

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const functions = [
    {
        name: "get_tech_info",
        description: "Get technical skills information",
        parameters: {
            type: "object",
            properties: {},
        },
    },
    {
        name: "get_personal_info",
        description: "Get personal information",
        parameters: {
            type: "object",
            properties: {},
        },
    },
    {
        name: "get_hobby_info",
        description: "Get information about hobbies",
        parameters: {
            type: "object",
            properties: {},
        },
    },
    {
        name: "get_sports_info",
        description: "Get information about sports activities",
        parameters: {
            type: "object",
            properties: {},
        },
    },
];

const systemPrompt = `You are John Smith. Respond in the first person as if you are John Smith, a real person, a programmer and a musician, who seeks for a job as a Frontend Developer. You are expecting to chat with an IT recruiter. You should never mention that you are an AI. Answer concisely, no more than 40 words, if detail isn't required.`;
let enrichedSystemPrompt = systemPrompt;

const availableFunctions = {
    get_tech_info: () => "Tech: JS, React/Next, Tailwind, Python",
    get_personal_info: () =>
        "Age: 33. Personal: Married, 2 kids: boy and a girl",
    get_hobby_info: () => "Hobby: Writing poems",
    get_sports_info: () => "Sports: Yoga",
};

async function getAIResponse(messages, detectFunctions = true) {
    console.log("messages sending to AI");
    console.log(messages);

    try {
        return await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: messages,
            functions: functions,
            function_call: detectFunctions ? "auto" : "none",
        });
    } catch (error) {
        if (error.code === "rate_limit_exceeded") {
            // Parse the remaining time from the error message
            const regex = /Please try again in (\d+)s\./;
            const matches = error.error.message.match(regex);

            if (matches && matches[1]) {
                const waitTimeSeconds = parseInt(matches[1]);

                console.error(
                    "Rate limit reached. Waiting for",
                    waitTimeSeconds,
                    "seconds...",
                );
                console.log("Let me think...");

                // Wait for the required time
                await new Promise((resolve) =>
                    setTimeout(resolve, (waitTimeSeconds + 5) * 1000),
                ); // +5 seconds for safety

                // Retry the request
                return await getAIResponse(messages, detectFunctions);
            }
        } else {
            throw error; // For other errors, throw them to be caught by the caller
        }
    }
}

function askQuestion() {
    rl.question("Enter something: ", async (userInput) => {
        const messages = [
            { role: "system", content: enrichedSystemPrompt },
            { role: "user", content: userInput },
        ];

        let response = await getAIResponse(messages);
        let responseMessage = response.choices[0].message;
        console.log("OpenAI Initial Response:", responseMessage.content);
        console.log("full responseMessage object:")
        console.log(responseMessage)

        if (responseMessage.function_call) {
            const functionName = responseMessage.function_call.name;
            console.log(`OpenAI decided to call function: ${functionName}`);

            const functionResponse = availableFunctions[functionName]();
            console.log(`Function Response: ${functionResponse}`);

            enrichedSystemPrompt += " " + functionResponse;

            // Update messages with enriched system prompt
            messages[0].content = enrichedSystemPrompt;

            // Call the API again without function detection
            response = await getAIResponse(messages, false);
            responseMessage = response.choices[0].message;

            console.log(
                `AI Final Response after function execution: ${responseMessage.content}`,
            );
        } else {
            console.log(`AI: ${responseMessage.content}`);
        }

        askQuestion();
    });
}

askQuestion();
