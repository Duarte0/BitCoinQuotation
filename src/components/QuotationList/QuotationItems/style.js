import {StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContent: {
        width: "95%",
        height: "auto",
        marginLeft: "3%",
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    contextLeft: {
        width: "40%",
        alignItems: "flex-start"
    },
    dayCotation: {
        fontSize: 16,
        paddingLeft: 2,
        color: "white",
        fontWeight: "bold"
    }, 
    contextRight: {
        width: "60%",
        alignItems: "flex-end"
    },
    logoBtc: {
        width: 50,
        height: 50,
    },
    boxLogo: {
        flexDirection: "row",
        alignItems: "center",
    },
    price: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    }

})

export default styles