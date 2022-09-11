import React,{ Component } from 'react'
import './App.css';

class Form extends Component{
constructor(props){
	super(props)
	this.state = { email:'',name:'', age:null, phoneNo:'', lastname:'', birthday:'', asdress:'', textarea:'', favcolor:''}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
}

// Form submitting logic, prevent default page refresh
handleSubmit(event){
	const { email, name, age, phoneNo, lastname, birthday, asdress, textarea ,favcolor} = this.state
	event.preventDefault()
	alert(`
____Your Details____
Email : ${email} Asdress : ${asdress}
Name : ${name} ${lastname}
Birthday : ${birthday} Age : ${age}
Your Fevorit Color is ${favcolor}
Phone No : ${phoneNo}

more detial
${textarea}
`)
}

// Method causes to store all the values of the
// input field in react state single method handle
// input changes of all the input field using ES6
// javascript feature computed property names
handleChange(event){
	this.setState({
	// Computed property names
	// keys of the objects are computed dynamically
	[event.target.name] : event.target.value
	})
}

// Return a controlled form i.e. values of the
// input field not stored in DOM values are exist
// in react component itself as state
render(){
	return(


	<form onSubmit={this.handleSubmit}>

        <header>
            <h1>Your Profile</h1>
        </header>        
        
           
                <table>
                    <tr>
                        <th>
                            <label htmlFor='email'>Email</label>
                            <div>
                            <input 
                                name='email'
                                type={'email'}
                                placeholder='Email'
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            </div>
                        </th>

                        <th>
                            <label htmlFor='asdress'>Asdress</label>
                            <div>
                            <input
                                name='asdress'
                                type={'text'}
                                placeholder='Asdress'
                                value={this.state.asdress}
                                onChange={this.handleChange}
                            />
                            </div>
                        </th>
                    </tr>
                </table>

                <table>
                    <tr>
                        <th>
                            <div>
                                <label htmlFor='name'>Name </label>
                            </div>
                            <div>
                            <input
                                    name='name'
                                    placeholder='Name'
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </th>
                        <th>
                            <div>
                                <label htmlFor='lastname'>Lastname </label>
                            </div>
                            <div>
                            <input
                                    name='lastname'
                                    placeholder='Lastname'
                                    value={this.state.lastname}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </th>
                        <th>
                            <div>
                                <label htmlFor='age'>Age </label>
                            </div>
                            <div>
                            <input
                                    name='age'
                                    type={'number'}
                                    placeholder='Age'
                                    min={0}
                                    max={100}
                                    value={this.state.age}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </th>
                    </tr>
                </table>

                <table>
                    <tr>
                        <th>
                            <div>
                                <label htmlFor='phoneNo'>Phone Number </label>
                            </div>
                            <div>
                            <input
                                    name='phoneNo'
                                    placeholder='Phone No'
                                    value={this.state.phoneNo}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </th>
                        <th>
                            <label htmlFor='birthday'>Birthday</label>
                            <div>
                                <input
                                    name='birthday'
                                    type={'date'}
                                    value={this.state.birthday}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </th>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th><center>
                            <label htmlFor='favcolor'>your favorite color</label>
                            <div>
                                <input 
                                    type="text" 
                                    id="favcolor" 
                                    name="favcolor" 
                                    value={this.state.favcolor}
                                    onChange={this.handleChange}
                                />
                            </div>
                            
                        </center></th>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td>
                            <label>You can write more detial</label>
                            <div>
                                <textarea  
                                    name='textarea'
                                    type={'text'}
                                    rows="4" 
                                    cols="50"
                                    value={this.state.textarea}
                                    onChange={this.handleChange}
                                ></textarea> 
                            </div>
                        </td>
                    </tr>
                </table>
            
            
            <div>
                <center>
                    <button><b>Submit</b></button>
                </center>
            </div>

            
        
      

        <footer>
            <text><b>ติดต่อผู้จัดทำ</b></text>
            
                <div>
                    <img src="https://thaicam.go.th/wp-content/uploads/2019/07/facebook-icon.png" alt='Facbook'/>
                </div>
            
            <div>
                <a href='https://www.facebook.com/profile.php?id=100009822072930'>Facebook : Tor Lansantad Teeraphat</a>
            </div>
        </footer>



	</form>
	)
}
}

export default Form
