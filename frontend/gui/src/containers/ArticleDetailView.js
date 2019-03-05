import React, { Component } from "react";
import axios from "axios";

import Articles from "../components/Article";
import { Card } from "antd";

export default class ArticleDetail extends Component {
  state = {
    article: {} // only 1 article
  };

  componenetDidMount() {
    const articleID = this.props.match.params.articleID;
    axios
      .get(`http://127.0.0.1:8000/api/${articleID}`)
      .then(res => {
        this.setState({
          article: res.data
        });
        // console.log(">>>>>", res.data);
      })
      .catch(err => {
        console.err(err);
      });
  }

  render() {
    return (
      <Card title={this.state.article.title}>
        <p>{this.state.article.content}</p>
      </Card>
    );
  }
}
