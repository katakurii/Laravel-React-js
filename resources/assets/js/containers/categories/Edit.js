import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: ""
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/category/edit/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name
                });
            })
    }

    onChangeCategoryName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const category = {
            name: this.state.name
        };

        axios.put('http://localhost:8000/api/category/update/'+ this.props.match.params.id, category)
            .then(res => console.log(res.data))
            .catch(error => {
                console.log(error.response)
            });}

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="category_name">Category Name</label>
                        <input type="text"
                               className="form-control"
                               id="category_name"
                               aria-describedby="emailHelp"
                               value={this.state.name}
                               onChange={this.onChangeCategoryName}
                               placeholder="Enter category name" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
