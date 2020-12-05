import React from "react"

class App extends React.Component{
	render(){
		return(
			<div>
				<form action="/submit">
					<div className="form-group">
						<label htmlFor="firstname">First Name:</label>
				      	<input type="text" className="form-control" id="fistname" placeholder="Enter Firstname" name="firstname" />
				        <br/>
				        <label htmlFor="firstname">Last Name:</label>
				      	<input type="text" className="form-control" id="lastname" placeholder="Enter Lastname" name="lastname" />
				        <br/>
				        <label htmlFor="phoneno">Phone Number:</label>
				      	<input type="text" className="form-control" id="phoneno" placeholder="Enter phone no" name="phoneno" />
				        <br/>
						<label htmlFor="exampleInputEmail1">Email address</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
					</div>

					<div className="form-group">
					    <label htmlFor="exampleFormControlFile1">Upload image</label>
					    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		)
	}
}

export default App