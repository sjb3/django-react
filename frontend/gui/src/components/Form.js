import React, { Component } from 'react';
import axios from 'axios';
import {
  Form, Input, Button,
} from 'antd';



class CustomForm extends Component {
  handleFormSubmit = (e, requestType, articleID) => {
    // e.preventDefault();
    const title = e.target.elements.title.value;
    const content = e.target.elements.content.value;

    switch(requestType) {

      case 'post':
        return axios.post(`http://127.0.0.1:8000/api/`, {
          title: title,
          content: content,
        })
        .then(res => console.log(res))
        .catch(err => console.error(err));
        case 'put':
          return axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
            title: title,
            content: content,
          })
          .then(res => console.log(res))
          .catch(err => console.error(err));
    }
  }

  render() {
    return (
      <div>
        <Form onSubmit={e =>
          this.handleFormSubmit(
            e,
            this.props.requestType,
            this.props.articleID)}>
          <Form.Item label="Title">
            <Input name='title' placeholder="Put a title" />
          </Form.Item>
          <Form.Item label="Content">
            <Input name='content' placeholder="Put a content" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType='submit'>{this.props.btnText}</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default CustomForm;