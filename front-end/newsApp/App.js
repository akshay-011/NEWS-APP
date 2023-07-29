import {  StyleSheet, Text, View } from 'react-native';
import MainView from './components/MainView';

export default function App() {
  return (
		<View style={{
			flex:1,
			backgroundColor:'black'
		}} >
			<Text style={styles.mainHead} >News Hub</Text>
			<MainView />
		</View>
  );
}

const styles = StyleSheet.create({
	mainHead : {
		fontSize:23,
		textAlign:'center',
		fontWeight:'900',
		color:'lightblue',
		marginTop:35
	}
})