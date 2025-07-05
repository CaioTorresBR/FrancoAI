import { useState, useEffect } from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';
import { useAudioRecorder, AudioModule, RecordingPresets } from "expo-audio";
import { icons, CirclePlay, AudioLines } from 'lucide-react-native';

export default function VoiceRecording(){
    const audioRecorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
    const [isRecording, setIsRecording] = useState(false);

    // uses audioRecord record() function to start Recording
    // changes setIsRecording state to true
    const record = async() => {
        await audioRecorder.prepareToRecordAsync();
        audioRecorder.record();
        setIsRecording(true);
    };

    // stops recording 
    const stopRecording = async() => {
        // the recording will be available on  
        await audioRecorder.stop();
        setIsRecording(false);
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


    return (
        <View style={{backgroundColor: 'lightgray'}} className="items-center w-full rounded-lg p-3" >
            <View style={styles.container}>
                <Button 
                title={isRecording ? 'Stop Recording' : 'Start Recording'}
                onPress={isRecording ? stopRecording : record}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'lightgray',
        padding: 10,
    }
});