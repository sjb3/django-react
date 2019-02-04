import React, { Component } from 'react'
// import Articles from '../components/Article';
import CustomForm from '../components/Form';
import { Button, Card } from 'antd';

import axios from 'axios';

export default class ArticleDetail extends Component {
  state = {
    article : {}
  }

  componentDidMount() {
    const articleID = this.props.match.params.articleID;

    axios.get(`http://127.0.0.1:8000/api/${articleID}`)
      .then(res => {
        this.setState({
          article: res.data
        })
        console.log(res.data);
      })
      .catch(err => {
        console.error(err)
      })
  }

  handleDelete = () => {
    const articleID = this.props.match.params.articleID;
    axios.delete(`http://127.0.0.1:8000/api/${articleID}`);
    this.props.history.push('/');
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <Card title={this.state.article.title}>
          <p><i>{this.state.article.content}</i></p>
        </Card>
        <CustomForm
          requestType='put'
          articleID={this.props.match.params.articleID}
          btnText='Update'
          />
          <form onSubmit={this.handleDelete}>
            <Button type='danger' htmlFor='submit'>Delete</Button>
          </form>
      </div>
    )
  }
}
