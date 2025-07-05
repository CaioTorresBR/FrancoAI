import { GoogleGenAI } from "@google/genai";
import { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import {Ionicons} from "@expo/vector-icons";

// client gets api key from environment variable 'GEMINI_API_KEY'
const ai = new GoogleGenAI({ apiKey : `${process.env.GEMINI_API_KEY}` })

//const text_audio = "Je me appele Pedro y je suis 15 ans."

export default async function Correction(phrase: string) {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
            { text: `You're suppose to help an newcomer to the province of Quebec, usually adults between 18 to 60 years old.
                In canadian french (quebecois): 
                Correct this phrase spoken in quebecois french, check for the correct grammar, concordance and correct use of the vocabulary. Give it a score from 0 to 10.
                Be nice and encouraging, while keeping a simple tone. Maximum of 36 words.`
            },
            { text : phrase}
        ],
    });

    console.log(response.text);
}

//Correction({phrase: text_audio});
//export default function Correction({Recording}){}