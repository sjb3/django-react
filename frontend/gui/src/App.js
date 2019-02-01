import React, { Component } from 'react';
import CustomLayout from './containers/Layout';
import ArticleListView from './containers/ArticleListView';


import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomLayout>
          <ArticleListView />
        </CustomLayout>
      </div>
    );
  }
}

export default App;
