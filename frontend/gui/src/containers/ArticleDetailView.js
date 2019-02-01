import React, { Component } from 'react'
import Articles from '../components/Article';
import { Card } from 'antd';

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

  render() {
    return (
      <Card title={this.state.article.title}>
        <p><i>{this.state.article.content}</i></p>
      </Card>
    )
  }
}
