import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar} from 'react-native';
import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationList from './src/components/QuotationList';
import QuotationItems from './src/components/QuotationList/QuotationItems';

function addZero(number){
  if(number <= 9){
    return "0" + number
  }
  return number
}

function url(qtdDays) {
  const date = new Date();
  const listLastDay = qtdDays
  const start_date = `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`;
  date.setDate(date.getDate() - listLastDay)
  const end_date = `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`;
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&$end=${end_date}`
}

async function getListCoins(url) {
  let response = await fetch(url);
  let returnApi = await response.json()
  let selectListQuotation = returnApi.bpi
  const queryCoinList = Object.keys(selectListQuotation).map((key) => {
    return {
      data: key.split("-").reverse().join("/"),
      valor: selectListQuotation[key]
    };
  });
  let data = queryCoinList.reverse();
  return data;
}
async function getPriceCoinsGraphic(url) {
  let responseG = await fetch(url);
  let returnApiG = await responseG.json()
  let selectListQuotationG = returnApiG.bpi
  const queryCoinList = Object.keys(selectListQuotationG).map((key) => {
    selectListQuotationG[key]
  });
  let dataG = queryCoinList;
  return dataG;
}

export default function App() {

  const [coinList, setCoinList] = useState([]);
  const [coinsGraphicList, setCoinGraphicList] = useState([0]);
  const [days, setDays] = useState(30);
  const [updateData, setUpdateData] = useState(true);

  function updateDay(number){
    setDays(number)
    setUpdateData(true)
  }

  useEffect(() =>{
    getListCoins(url(days)).then((data) =>{
      setCoinList(data)
    });
    getPriceCoinsGraphic(url(days)).then((dataG) =>{
      setCoinGraphicList(dataG)
    });
    if(updateData) {
      setUpdateData(false)
    }
  },[updateData]);


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#b89e14"
        barStyle="dark-content"
      />
      
      <CurrentPrice/>
      <HistoryGraphic/>
      <QuotationList filterDay={updateDay} listTransactions={coinList}/>
      <QuotationItems/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40 : 0
  },
});
