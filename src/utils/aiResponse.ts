import { GoogleGenerativeAI } from "@google/generative-ai";

export async function aiResponse(message: string) {
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = message;
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        return text;
    } catch (error) {
        console.log('Gemini Error: ', error);
    }
}