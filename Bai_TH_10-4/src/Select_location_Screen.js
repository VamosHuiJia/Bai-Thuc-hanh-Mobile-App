import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, Text, View, Image, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SelectLocation({ navigation }) {
    const [zoneOpen, setZoneOpen] = useState(false);
    const [selectedZone, setSelectedZone] = useState(null);
    const [zones, setZones] = useState([
        { label: 'Hà Nội', value: 'hanoi' },
        { label: 'TP. Hồ Chí Minh', value: 'hcm' },
        { label: 'Đà Nẵng', value: 'danang' },
        { label: 'Hải Phòng', value: 'haiphong' },
        { label: 'Cần Thơ', value: 'cantho' },
    ]);

    const [areaOpen, setAreaOpen] = useState(false);
    const [selectedArea, setSelectedArea] = useState(null);
    const [areas, setAreas] = useState([
        { label: 'Quận Ba Đình', value: 'badinh' },
        { label: 'Quận Hoàn Kiếm', value: 'hoankiem' },
        { label: 'Quận Cầu Giấy', value: 'caugiay' },
        { label: 'Quận Đống Đa', value: 'dongda' },
        { label: 'Quận Hai Bà Trưng', value: 'haibatrung' },
    ]);

    const handleSubmit = () => {
        navigation.navigate("Login")
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Verification") }}>
                    <Ionicons name="chevron-back" size={30} color="black" />
                </TouchableOpacity>

                <View style={styles.containerLocation}>
                    <Image source={require('../assets/Images/Address_point.png')} style={styles.image} />
                    <Text style={styles.title}>Select your location</Text>
                    <Text style={styles.description}>
                        Switch on your location to stay in tune with what's happening in your area
                    </Text>
                </View>

                <View style={styles.inputContainer}>
                    {/* Zone Dropdown */}
                    <View style={styles.dropdownWrapper}>
                        <Text style={styles.label}>Your Zone</Text>
                        <DropDownPicker
                            open={zoneOpen}
                            value={selectedZone}
                            items={zones}
                            setOpen={setZoneOpen}
                            setValue={setSelectedZone}
                            setItems={setZones}
                            placeholder="Select your zone"
                            style={styles.dropdown}
                            dropDownContainerStyle={styles.dropdownContainer}
                            zIndex={zoneOpen ? 3000 : 0} // Chỉ tăng zIndex khi mở
                            listMode="SCROLLVIEW" // Sử dụng SCROLLVIEW để đảm bảo cuộn
                            dropDownDirection="BOTTOM"
                            scrollViewProps={{
                                nestedScrollEnabled: true, // Cho phép cuộn trong ScrollView cha
                            }}
                        />
                    </View>

                    {/* Area Dropdown */}
                    <View style={styles.dropdownWrapper}>
                        <Text style={styles.label}>Your Area</Text>
                        <DropDownPicker
                            open={areaOpen}
                            value={selectedArea}
                            items={areas}
                            setOpen={setAreaOpen}
                            setValue={setSelectedArea}
                            setItems={setAreas}
                            placeholder="Select your area"
                            style={styles.dropdown}
                            dropDownContainerStyle={styles.dropdownContainer}
                            zIndex={areaOpen ? 2000 : 0} // Chỉ tăng zIndex khi mở
                            listMode="SCROLLVIEW" // Sử dụng SCROLLVIEW để đảm bảo cuộn
                            dropDownDirection="BOTTOM"
                            scrollViewProps={{
                                nestedScrollEnabled: true, // Cho phép cuộn trong ScrollView cha
                            }}
                        />
                    </View>

                    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                        <Text style={styles.submitText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#FCFCFC99' 
    },
    scrollContent: { 
        paddingTop: 20, 
        paddingBottom: 20 
    },
    button: { 
        position: 'absolute', 
        top: 50, 
        left: 10, 
        zIndex: 10 
    },
    containerLocation: { 
        alignItems: 'center', 
        marginTop: 50 
    },
    image: { 
        marginTop: 10 
    },
    title: { 
        fontSize: 25, 
        fontWeight: 'bold', 
        marginTop: 20 
    },
    description: {
        testedScrollEnabled: true, 
        fontSize: 15,
        textAlign: 'center',
        paddingHorizontal: 20,
        marginVertical: 10,
        color: 'gray',
        maxWidth: '90%',
    },
    inputContainer: { padding: 20, marginTop: 50 },
    dropdownWrapper: { marginBottom: 20 }, // Khoảng cách giữa các dropdown
    label: { fontSize: 16, color: 'gray', fontWeight: '500', marginBottom: 5 },
    dropdown: {
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
    },
    dropdownContainer: {
        borderColor: 'gray',
        borderRadius: 10,
        maxHeight: 150, // Giới hạn chiều cao nhưng vẫn cuộn được
    },
    submitButton: {
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    submitText: { color: 'white', fontSize: 20, fontWeight: '500' },
});