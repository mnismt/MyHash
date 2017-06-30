var listHash = ['md5','sha1', 'sha224', 'sha256', 'sha384', 'sha512', 'sha3', 'ripemd160',
                 'hmacmd5', 'hmacsha1','hmacsha224', 'hmacsha256', 'hmacsha384', 'hmacsha512',
                 'hmacsha3', 'hmacripemd160', 'aes', 'tripledes', 'rc4', 'rabbit', 'base64'];

var encrypt = require('./encrypt').encrypt;
var info = require('./info').get;
var decrypt = require('./decrypt').decrypt;

module.exports = {
  setEncryptText (text) {
    encrypt.setText(text);
  },
  setDecryptText (text) {
    decrypt.setEncryptString(text)
  },
  encrypt (type) {
    return encrypt.hash(type);
  },
  getListHash () {
    return listHash;
  },
  decrypt (type) {
    return decrypt.decrypt(type);
  },
  isSymmetric (type) {
    return info.isSymmetric(type);
  }
};