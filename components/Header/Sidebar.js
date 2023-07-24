import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image  } from 'react-native';



export default function SideBar() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        setIsActive(current => !current);
    };

    return (
        <View>
            <TouchableHighlight  onPress={handleClick}>
                <>
                <View style={styles.sideBar}>
                    <Image source={require('../../assets/menu.png')} style={{width: 25, height: 25}}/>             
                </View>
                <View style={isActive ? styles.menuOpen : styles.menu}>
                    <Text>First Item</Text>
                </View>
                </>
            </TouchableHighlight >

        </View>
        
    );
}

const styles = StyleSheet.create({
    sideBar: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: "#F6F5F8",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 21,
        marginTop: 21
    },
    line: {
        borderRadius: 8,
        backgroundColor: "#504C4C",
        width: 25,
        height: 3,
        marginBottom: 3,
        zIndex: 10
    },
    menu: {
        // display: 'none',
        position: 'absolute',
        top: 0,
        left: -200,
        height: 800,
        width: 200,
        backgroundColor: "#F6F5F8"
    },
    menuOpen: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 800,
        width: 200,
        backgroundColor: "#F6F5F8",
    }
});
