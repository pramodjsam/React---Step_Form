import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormUserDetails extends React.Component{
	continue = function(e){
		e.preventDefault()
		this.props.nextStep()
	}.bind(this)
	render(){
		const {values,handleSubmit}=this.props
		return(
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title='Enter User Details' />
					<TextField 
						hintText='Enter your first name'
						floatingLabelText="First Name"
						onChange={handleSubmit("firstName")}
						defaultValue={values.firstName}
					/>
					<br/>
					<TextField 
						hintText='Enter your last name'
						floatingLabelText="Last Name"
						onChange={handleSubmit("lastName")}
						defaultValue={values.lastName}
					/>
					<br/>
					<TextField 
						hintText='Enter your email'
						floatingLabelText="Email"
						onChange={handleSubmit("email")}
						defaultValue={values.email}
					/>
					<br/>
					<RaisedButton 
						label="Continue"
						primary={true}
						style={styles.button}
						onClick={this.continue}
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

export default FormUserDetails