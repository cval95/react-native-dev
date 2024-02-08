import { StyleSheet, Text, View, FlatList } from 'react-native';

type DayListItem ={
    day: number;
}

export default function DayListItem({day}: DayListItem) {
    return(
        <View style={styles.box}>
       <Text style={styles.text}>{day}</Text>
     </View>
    )
}

const styles = StyleSheet.create({
   
    box: {
      backgroundColor: '#F9EDE3',
      flex: 1,
      aspectRatio: 1,
      margin: 10,
  
      borderWith: StyleSheet.hairlineWidth,
      borderColor: '#9b4521',
      borderRadius: 20,
  
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#9b4521',
      fontSize: 70
    }
  });