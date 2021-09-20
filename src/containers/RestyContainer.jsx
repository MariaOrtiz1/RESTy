import React, { Component } from 'react';
import Controls from '../components/RESTy/Controls';
import Display from '../components/RESTy/Display';
import Header from '../components/RESTy/Header';
import { fetchRestyApi } from '../services/resty';

export default class RESTyContainer extends Component {
    state = {
      method: '',
      url: '',
      body: '',
      display: {
        Hewwo: 'Go do some fetching!'
      },
    };

    handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = async (event) => {
      event.preventDefault();
      const { url, method, body } = this.state;
      const response = await fetchRestyApi(url, method, body);
      this.setState({ display: response });
    };

    render() {
      const { url, body, method, display } = this.state;
      return (
        <div>
          <Header />
          <Controls 
            url={url}
            method={method}
            body={body}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
          <Display display={display} />
        </div>
      );
    }
}
