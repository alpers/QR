import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Linkifier from 'react-linkifier';
import {
  WhatsappShareButton, WhatsappIcon,
  EmailShareButton, EmailIcon,
  TwitterShareButton, TwitterIcon,
  FacebookShareButton, FacebookIcon
} from 'react-share';
 
class QrScanner extends Component {
  state = {
    title: 'Linqr',
    result: '...',
    copied: false
  }
  handleScan = data => {
    if (data) {
      this.setState({
        result: data,
        copied: false
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  copyToClipboard = () => {
    let textField = document.createElement('textarea');
    textField.innerText = this.state.result;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };
  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        <Linkifier>
          <div className="Content">
            <p>{this.state.result}</p>
          </div>
        </Linkifier>
        <div className="Share">
          <CopyToClipboard text={this.state.result}
            onCopy={() => this.setState({copied: true})}>
            <span>
              <img className="CopyButton" src="https://alperm.com/assets/img/copy.png" />
            </span>
          </CopyToClipboard>
          <div className="ShareButton">
            <WhatsappShareButton
                url={this.state.result}
                className="twitter-share-button">
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
          <div className="ShareButton">
            <EmailShareButton
                subject={this.state.title}
                body={this.state.result}
                className="twitter-share-button">
                <EmailIcon size={32} round />
            </EmailShareButton>
          </div>
          <div className="ShareButton">
            <TwitterShareButton
                url={this.state.result}
                className="twitter-share-button">
                <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
          <div className="ShareButton">
            <FacebookShareButton
                url={this.state.result}
                className="twitter-share-button">
                <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>
        </div>
      </div>
    )
  }
}

export default QrScanner;