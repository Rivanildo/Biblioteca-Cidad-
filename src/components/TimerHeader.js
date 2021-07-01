import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

class TimerHeader extends React.Component {

	// handles the display of timer header
	handleDisplay = () => {
		if(this.props.intervalType === "Working")
		{
			if(this.props.running === true) {
				return "Continue em foco!"
			}
			else {
				return "Hora de voltar!"
			}	
		}
		else {
			if(this.props.running === true) {
				return "Momento para uma pausa! Aproveite"
			}
			else {
				return "Relaxe :)"
			}	
		}

	}
	render() {
	
		let texttoshow = this.handleDisplay()
		return(
			<Text style={styles.textStyle}>{texttoshow}</Text>
		)				
	}
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    fontWeight: "500",
    letterSpacing: 1.5,
    fontFamily: Platform.OS == "android" ? "notoserif" : "system",
    marginTop: 40,
    padding: 20
  }
});

export default TimerHeader;