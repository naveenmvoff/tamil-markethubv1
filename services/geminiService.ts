
import { GoogleGenAI } from "@google/genai";

// IMPORTANT: API key should be handled via environment variables and not hardcoded.
// Assuming process.env.API_KEY is configured in the deployment environment.
const API_KEY = process.env.API_KEY;

let ai: GoogleGenAI | null = null;
if (API_KEY) {
    ai = new GoogleGenAI({ apiKey: API_KEY });
} else {
    console.warn("Gemini API key not found. AI features will be disabled.");
}

/**
 * Generates a short summary for a given article content.
 * @param content The full content of the article.
 * @returns A promise that resolves to a concise summary string.
 */
export const generateArticleSummary = async (content: string): Promise<string> => {
    if (!ai) {
        return "AI summary is currently unavailable.";
    }

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Summarize the following marketing article in one compelling sentence for a social media post:\n\n---\n\n${content}`,
            config: {
                temperature: 0.7,
                maxOutputTokens: 60,
            }
        });
        return response.text;
    } catch (error) {
        console.error("Error generating summary with Gemini API:", error);
        return "Could not generate AI summary.";
    }
};

/**
 * Placeholder function for generating campaign ideas.
 * @param topic The topic for which to generate ideas.
 * @returns A promise that resolves to an array of campaign ideas.
 */
export const generateCampaignIdeas = async (topic: string): Promise<string[]> => {
    if (!ai) {
        return ["AI service is unavailable."];
    }
    // This is a placeholder for a more complex implementation.
    // In a real app, you would use a structured prompt and parse the JSON response.
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Generate 3 innovative marketing campaign ideas for a product related to: ${topic}`,
        });
        return response.text.split('\n').filter(idea => idea.trim() !== '');
    } catch (error) {
        console.error("Error generating campaign ideas:", error);
        return ["Failed to generate ideas."];
    }
};
