import { Fragment } from "react";
import { ScrollView, TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";

export default function QuotationList(){
    return(
        <Fragment>
        <View style={styles.filters} >
            <TouchableOpacity 
            style={styles.buttonQuerry}
            onPress={() => {} }
            >
                <Text style={styles.textButtonQuerry}>7D</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.buttonQuerry}
            onPress={() => {} }
            >
                <Text style={styles.textButtonQuerry}>15D</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.buttonQuerry}
            onPress={() => {} }
            >
                <Text style={styles.textButtonQuerry}>1M</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.buttonQuerry}
            onPress={() => {} }
            >
                <Text style={styles.textButtonQuerry}>3M</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.buttonQuerry}
            onPress={() => {} }
            >
                <Text style={styles.textButtonQuerry}>6M</Text>
            </TouchableOpacity>
        </View>

        </Fragment>
    )
}