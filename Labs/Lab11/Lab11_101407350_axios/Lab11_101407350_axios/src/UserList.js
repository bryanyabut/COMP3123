import React, { Component } from 'react'
import axios from 'axios'
import UserDetails from './UserDetails'

export default class UserList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             users : [],
             userid: 0,
             persons: [] 
        }
    }

    componentDidMount = () =>{
        this.getUserData();
        this.getRandomPersons(); 
    }
    
    // =============================
    // LAB REQUIREMENT: Random Users
    // =============================
    getRandomPersons = () => {
        axios.get("https://randomuser.me/api/?results=10")
        .then(res => {
            console.log("Random Users API:", res.data);
            this.setState({ persons: res.data.results });
        })
    }

    // =============================
    // Original Functions
    // =============================
    getUserData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res =>  { 
            console.log(res.data)
            this.setState({...this.state, users : res.data})
        })
    }

    createNewUser = () =>{
        const newUser = {
            name:'Pritesh Patel',
            email:"p@p.com"
        }
        axios.post("https://jsonplaceholder.typicode.com/users", { newUser })
        .then(res => console.log(res))
    }

    getUserDataByID = (id) => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res =>  { 
            console.log(res.data)
        })
    }

    readUserID = e =>{
        this.setState({...this.state, userid: e.target.value})
    }

    getUserByID = () => {
        this.getUserDataByID(this.state.userid)
    }

    deleteUserDataByID = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res =>  { 
            console.log(res.data)
            let userList = this.state.users.filter(u => u.id !== id);

            this.setState({...this.state, users: userList})
        })
    }

    render() {
        return (
            <div>

                <h2>JSON Placeholder Users (Your Original)</h2>
                <button onClick={this.createNewUser}>Create New User</button>
                <button onClick={this.getUserData}>Get Users</button>

                {
                    this.state.users.map(u => (
                        <>
                            <UserDetails key={u.id} user = {u}/>
                            <button onClick={() => this.getUserDataByID(u.id)}>Get Users By ID</button>
                            <button onClick={() => this.deleteUserDataByID(u.id)}>Delete</button>
                        </>
                    ))
                }

                <input onChange={this.readUserID} type="text" placeholder="Enter User ID"/>
                <button onClick={ this.getUserByID }>Get By ID</button>

                <hr />

                <h2>Random Persons (Lab Requirement)</h2>
                <button onClick={this.getRandomPersons}>Reload 10 Random Users</button>

                <ul>
                    {this.state.persons.map((p, index) => (
                        <li key={index}>
                            <strong>{p.name.first} {p.name.last}</strong> <br />
                            Email: {p.email} <br />
                            <img src={p.picture.thumbnail} alt="profile" />
                        </li>
                    ))}
                </ul>

            </div>
        )
    }
}
