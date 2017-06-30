var CryptoJS = require('crypto-js');

var decrypt = {
  string: '',
  serect: '',
  setEncryptString (string) {
    this.string = string;
  },
  decrypt (type) {
    switch (type) {
      case 'aes':
        return CryptoJS.AES.decrypt(this.string, this.serect).toString(CryptoJS.enc.Utf8);
      case 'tripledes':
        return CryptoJS.TripleDES.decrypt(this.string, this.serect).toString(CryptoJS.enc.Utf8);
      case 'rc4':
        return CryptoJS.RC4.decrypt(this.string, this.serect).toString(CryptoJS.enc.Utf8);
      case 'rabbit':
        return CryptoJS.Rabbit.decrypt(this.string, this.serect).toString(CryptoJS.enc.Utf8);
      case 'base64':
        let word = CryptoJS.enc.Base64.parse(this.string);
        return CryptoJS.enc.Utf8.stringify(word);
    }
  }
}

exports.decrypt = decrypt;