import { GoogleGenAI, createUserContent, createPartFromUri,  } from "@google/genai";
import * as fs from "node:fs";
import { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage'; 

// client gets api key from environment variable 'GEMINI_API_KEY'
const ai = new GoogleGenAI({ apiKey : `${process.env.GEMINI_API_KEY}` })
// we're passing the inline audio, instead of uploading an audio file
const base64AudioFile = fs.readFileSync("path/to/small-sample.mp3", {
    encoding: "base64",
});


function Correction() {
    const generateResponse = async () => {
        try {
            const result = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [
                { text: `You're suppose to help an newcomer to the province of Quebec, usually adults between 18 to 60 years old, learning the french language.
                    In canadian french (quebecois): 
                    Correct this phrase spoken in quebecois french, check for the correct grammar, concordance and correct use of the vocabulary. Give it a score from 0 to 10.
                    Be nice and encouraging, while keeping a simple tone. Maximum of 36 words.`
                },
                {
                    inlineData: {
                        mimeType: "audio/mp3",
                        data: base64AudioFile,
                    },
                },
            ],
        }); 
         return result.text ?? "No response generated.";
         
        } catch (error){
            console.error("Error generating AI response: ", error);
            return "Oops, problem with response generation."
        }
    }
}

export default Correction;