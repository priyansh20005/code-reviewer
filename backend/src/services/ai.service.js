// import { GoogleGenAI } from "@google/genai";
const { GoogleGenAI } =require("@google/genai") ;


const ai = new GoogleGenAI({apiKey:process.env.GOOGLE_GEMINI_KEY});

async function generateContent(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    systemInstruction:"you are a code reviewer , who have expertise in development , you look for the code and find the problem and suggest the solution to the developer .",
    
    contents: prompt,
  });
  console.log(response.text);
  return  response.candidates?.[0]?.content?.parts?.[0]?.text || "";
} 

module.exports = generateContent ;