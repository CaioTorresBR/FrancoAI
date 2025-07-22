import { useState, useEffect } from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';
import { useAudioRecorder, AudioModule, RecordingPresets, useAudioPlayer, AudioStatus, RecordingStatus } from "expo-audio";
import { icons, CirclePlay, AudioLines } from 'lucide-react-native';
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function VoiceRecording(){
    const audioRecorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
    const [isRecording, setIsRecording] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [voiceRecordingUri, setVoiceRecordingUri] = useState(null);

    // Uses uses audioRecord record() function to start Recording
    // changes setIsRecording state to true
    const record = async() => {
        await audioRecorder.prepareToRecordAsync();
        audioRecorder.record();
        setIsRecording(true);
    };

    // Stops recording 
    const stopRecording = async() => {
        await audioRecorder.stop();
        setIsRecording(false);

        // saves uri locally (destination of audio archive)
        const uri = audioRecorder.uri;  
        setVoiceRecordingUri(uri);  
        console.log("Audio saved on: ", uri);

    };

    useEffect(() => {
        (async() => {
            // asks for permission to record
            const status = await AudioModule.requestRecordingPermissionsAsync();
            if (!status.granted) {
                Alert.alert('Permission to access microphone was denied');
            }
        })();
    }, []);

    // Plays the recording audio
        const audioSource = voiceRecordingUri;
        const player = useAudioPlayer(audioSource);

        const playRecording = async() => {
            if (!voiceRecordingUri) return;
            await player.replace({ uri: voiceRecordingUri });
            await player.play;
            setIsPlaying(true);

        };

        // Pauses the recording
        const pausePlayRecording = async() => {
            await player.pause();
            setIsPlaying(false);
        };

        /*
        // Stores audio
        onsubmit = async() => {
            this.setState({ token: 'abc123' })
            AsyncStorage.
        }
        */


    return (
        <View className="items-center w-full rounded-lg p-3" >
            <View style={styles.container}>
                <Button 
                title={isRecording ? 'Stop Recording' : 'Start Recording'}
                onPress={isRecording ? stopRecording : record}
                />
            </View>
            <View style={styles.container}>
               <Button 
                title={isPlaying ? 'Pause audio' : 'Play audio'}
                onPress={() => isPlaying ? pausePlayRecording : (!isRecording ? player.play() : "null") }
                /> 
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 6,
        margin: 6,
    }
});