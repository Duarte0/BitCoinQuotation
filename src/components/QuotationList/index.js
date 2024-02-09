import { Fragment } from "react";
import { TouchableOpacity, View, Text, ScrollView, FlatList } from "react-native";
import styles from "./styles";
import QuotationItems from "./QuotationItems";

export default function QuotationList(props){

    const daysQuery = props.filterDay

    return(
        <Fragment>
        <View style={styles.filters} >
            <TouchableOpacity 
            style={styles.buttonQuerry}
            onPress={() => daysQuery(7) }
            >
                <Text style={styles.textButtonQuerry}>7D</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.buttonQuerry}
            onPress={() => daysQuery(15) }
            >
                <Text style={styles.textButtonQuerry}>15D</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.buttonQuerry}
            onPress={() => daysQuery(30) }
            >
                <Text style={styles.textButtonQuerry}>1M</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.buttonQuerry}
            onPress={() => daysQuery(90) }
            >
                <Text style={styles.textButtonQuerry}>3M</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.buttonQuerry}
            onPress={() => daysQuery(180) }
            >
                <Text style={styles.textButtonQuerry}>6M</Text>
            </TouchableOpacity>
        </View>

        <FlatList
            data={props.listTransactions}
            renderItem={({item}) =>{
                return <QuotationItems valor={item.valor} data={item.data}/>
            }}
        />

        </Fragment>
    )
}