import React from 'react';
import axios from 'axios';

class Axios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [],
            name: ""
        }
    }

    hundleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    hundleSubmit = event => {
        event.preventDefault();

        const name = this.state.name
        
        axios.post('https://jsonplaceholder.typicode.com/users', { name })
            .then(res => {
                
                console.log(res.data);
                this.setState({persons: [...this.state.persons,res.data]}, () => {console.log(this.state.persons);})
            })

    }
    //// 1) get запит після рендера
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response =>

                this.setState({
                    persons: response.data
                }, ()=>{
                    localStorage.setItem('test', JSON.stringify(this.state.persons))

                }))
                
    }    
    
    
    render() {
        return (
            <>
            {/* // 1) get запит */}
            
                <ul>
                    {this.state.persons.map((person, index) => (
                        <li key={person.id} > { person.name}</li>
                    ))}
                </ul>
                    


                {/* // 2 form запит (post)*/}
                <form onSubmit={this.hundleSubmit}>
                    <label htmlFor="">
                        Person Name:
                    <input type="text" name="name" onChange={this.hundleChange} />

                    </label>
                    <button type="submit">Axios Post</button>
                </form>
            </>
        )
    }
}

export default Axios;