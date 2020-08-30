import React, { Component } from 'react'
import header from '../img/header.png';
import { FaLock, FaUser } from 'react-icons/fa'
import swal from 'sweetalert';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.fetchData = this.fetchData.bind(this)
  }

  fetchData() {
    fetch('/login/submit', {
      method: "POST",
      redirect: "follow",
      dataType: "JSON",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data);
        if (data === "No data") {
          swal("Error!", "Username or password incorrect", "error");
        }
        else {
          swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "Aww yiss!",
          })
            .then(() => {
              window.location.href = "/Home";
            });
        }
        // render(<div><Header />
        //   <Switch>
        //   <Route exact path="/" component={Home} />
        //   </Switch></div>)
      })
      .catch((error) => {
        console.log(error, "catch the hoop")
      })
  }
  handleChange() {
    this.setState({
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    })
  }



  render() {
    return (
      <React.StrictMode>
        <header className="App-header" style={{ backgroundImage: 'url(' + header + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <div>
            {/* <form className="box"> */}
            <div className="field">
              <label htmlFor="" className="label">Username</label>
              <div className="control has-icons-left">
                <input type="text" id="username" name="username" placeholder="XXXXXXX" className="input" onChange={this.handleChange} required />
                <span className="icon is-small is-left">
                  <FaUser />
                </span>
              </div>
            </div>
            <div className="field">
              <label htmlFor="" className="label">Password</label>
              <div className="control has-icons-left">
                <input type="password" id="password" name="password" placeholder="*******" className="input" onChange={this.handleChange} required />
                <span className="icon is-small is-left">
                  <FaLock />
                </span>
              </div>
            </div>
            <div className="field">
              <label htmlFor="" className="checkbox">
                <input type="checkbox" /> Remember me
                        </label>
            </div>
            <div className="field">
              <button type="submit" className="button is-primary" onClick={this.fetchData}>Submit</button>
            </div>
            {/* </form> */}
          </div>
        </header>
      </React.StrictMode >)
  }
}
export default Login