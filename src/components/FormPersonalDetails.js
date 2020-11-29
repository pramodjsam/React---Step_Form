import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormPersonalDetails extends React.Component{
	continue = function(e){
		e.preventDefault()
		this.props.nextStep()
	}.bind(this)

	back=function(e){
		e.preventDefault();
		this.props.prevStep()
	}.bind(this)

	render(){
		const {values,handleSubmit}=this.props
		return(
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title='Enter Personal Details' />
					<TextField 
						hintText='Enter your occupation'
						floatingLabelText="Occupation"
						onChange={handleSubmit("occupation")}
						defaultValue={values.occupation}
					/>
					<br/>
					<TextField 
						hintText='Enter your city'
						floatingLabelText="City"
						onChange={handleSubmit("city")}
						defaultValue={values.city}
					/>
					<br/>
					<TextField 
						hintText='Enter your bio'
						floatingLabelText="Bio"
						onChange={handleSubmit("bio")}
						defaultValue={values.bio}
					/>
					<br/>
					<RaisedButton 
						label="Continue"
						primary={true}
						style={styles.button}
						onClick={this.continue}
					/>
					<RaisedButton 
						label="Back"
						primary={false}
						style={styles.button}
						onClick={this.back}
					/>
				</React.Fragment>
			</MuiThemeProvider>
		)
	}
}

const styles={
	button:{
		margin:15
	}
}

export default FormPersonalDetails