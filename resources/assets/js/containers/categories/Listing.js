import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Listing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories : []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/category')
            .then(response => {
                this.setState({categories: response.data});
            })
    }

    onDelete(category_id) {
        axios.delete('http://localhost:8000/api/category/delete/' + category_id)
            .then(response => {
                let categories = this.state.categories;
                for (let i = 0; i < categories.length; i++) {
                    if (categories[i].id === category_id) {
                        categories.splice(i, 1);
                        this.setState({
                            categories: categories
                        });
                    }
                }
            });
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Category Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Updated At</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.categories.map(category => {
                            return(
                                <tr key={category.id}>
                                    <th scope="row">{category.id}</th>
                                    <td>{category.name}</td>
                                    <td>{category.active}</td>
                                    <td>{category.created_at}</td>
                                    <td>{category.updated_at}</td>
                                    <td>
                                        <Link to={`/category/edit/${category.id}`}>Edit | </Link>
                                        <a href="#" onClick={this.onDelete.bind(this, category.id)}>Delete</a>
                                    </td>
                                </tr>
                            )
                        })
                    }

                    </tbody>
                </table>
            </div>
        );
    }
}
