var CryptoJS = require('crypto-js');

var encrypt = {
  setText (text) {
    hash.text = text;
  },
  hash (type) {
    switch (type) {
      case 'md5':
        return hash.md5();
      case 'sha1':
        return hash.sha1();
      case 'sha224':
        return hash.sha224();
      case 'sha256':
        return hash.sha256();
      case 'sha384':
        return hash.sha384();
      case 'sha512':
        return hash.sha512();
      case 'sha3':
        return hash.sha3();
      case 'ripemd160':
        return hash.ripemd160();
      case 'hmacmd5':
        return hash.hmacmd5();
      case 'hmacsha1':
        return hash.hmacsha1();
      case 'hmacsha224':
        return hash.hmacsha224();
      case 'hmacsha256':
        return hash.hmacsha256();
      case 'hmacsha384':
        return hash.hmacsha384();
      case 'hmacsha512':
        return hash.hmacsha512();
      case 'hmacsha3':
        return hash.hmacsha3();
      case 'hmacripemd160':
        return hash.hmacripemd160();
      case 'aes':
        return hash.aes();
      case 'tripledes':
        return hash.tripledes();
      case 'rc4':
        return hash.rc4();
      case 'rabbit':
        return hash.rabbit();
      case 'base64':
        return hash.base64();
    }
  }
}

var hash = {
  text: '',
  serect: '',
  md5() {
    return CryptoJS.MD5(this.text).toString();
  },
  sha1() {
    return CryptoJS.SHA1(this.text).toString();
  },
  sha224() {
    return CryptoJS.SHA224(this.text).toString();
  },
  sha256() {
    return CryptoJS.SHA256(this.text).toString();
  },
  sha384() {
    return CryptoJS.SHA384(this.text).toString();
  },
  sha512() {
    return CryptoJS.SHA512(this.text).toString();
  },
  sha3() {
    return CryptoJS.SHA3(this.text).toString();
  },
  ripemd160() {
    return CryptoJS.RIPEMD160(this.text).toString();
  },
  hmacmd5() {
    return CryptoJS.HmacMD5(this.text, this.serect).toString();
  },
  hmacsha1() {
    return CryptoJS.HmacSHA1(this.text, this.serect).toString();
  },
  hmacsha224() {
    return CryptoJS.HmacSHA224(this.text, this.serect).toString();
  },
  hmacsha256() {
    return CryptoJS.HmacSHA256(this.text, this.serect).toString();
  },
  hmacsha384() {
    return CryptoJS.HmacSHA384(this.text, this.serect).toString();
  },
  hmacsha512() {
    return CryptoJS.HmacSHA512(this.text, this.serect).toString();
  },
  hmacsha3() {
    return CryptoJS.HmacSHA3(this.text, this.serect).toString();
  },
  hmacripemd160() {
    return CryptoJS.HmacRIPEMD160(this.text, this.serect).toString();
  },
  aes() {
    return CryptoJS.AES.encrypt(this.text, this.serect).toString();
  },
  tripledes() {
    return CryptoJS.TripleDES.encrypt(this.text, this.serect).toString();
  },
  rc4() {
    return CryptoJS.RC4.encrypt(this.text, this.serect).toString();
  },
  rabbit() {
    return CryptoJS.Rabbit.encrypt(this.text, this.serect).toString();
  },
  rabbitlegacy() {
    return CryptoJS.RabbitLegacy.encrypt(this.text, this.serect).toString();
  },
  base64() {
    let words = CryptoJS.enc.Utf8.parse(this.text);
    return CryptoJS.enc.Base64.stringify(words);
  }
}

exports.encrypt = encrypt;