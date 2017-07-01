# MyHash

Simplify encryption with crypto-js

* Author: Thanh Minh
* Current version: 0.0.1

## Install

### NPM

```
npm install crypto-js --save
npm install myhash --save
```
### Yarn

```
yarn add crypto-js --save
yarn add myhash --save
```

## Usage

Import (ES6):
```javascript
import hash from 'myhash';
```
or include: 
```javascript
var hash = require('myhash')
```

Return a list of registered hashing algorithms:

```javascript
hash.getListHash()
```

Encrypt text:

```javascript
hash.setEncryptText('The quick brown fox jumped over the lazy dog.');
var encryptText = hash.encrypt('md5');
// Return string '5c6ffbdd40d9556b73a21e63c3e0e904'
```

Decrypt text (Only support symmetric encryption: AES, Triple DES, RC4, Rabbit, Base64):

```javascript
hash.setDecryptText('U2FsdGVkX1+DV4sNpurscrtNhqmBYQMY+eB0rSF9jNr5mHu0VQO18aQlP0CAF1QIF4DY8+aFr902rCp68g53oA==');
var decryptText = hash.decrypt('aes')
// Return string 'The quick brown fox jumped over the lazy dog.'
```

Default serect key = ``` '' ```

## List of hashing algorithms:
```javascript
'md5','sha1', 'sha224', 'sha256', 'sha384', 'sha512', 'sha3', 'ripemd160',
'hmacmd5', 'hmacsha1','hmacsha224', 'hmacsha256', 'hmacsha384', 'hmacsha512',
'hmacsha3', 'hmacripemd160', 'aes', 'tripledes', 'rc4', 'rabbit', 'base64']
```
# License
MyHash is freely distributable under the terms of the MIT license.
