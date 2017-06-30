# MyHash

### Simplify encryption with crypto-js

# MyHash Start

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

Import:
```
import hash from 'myhash';
```

Return a list of registered hashing algorithms:

```
hash.getListHash()
```

Encrypt text:

```
hash.setEncryptText('The quick brown fox jumped over the lazy dog.');
var encryptText = hash.encrypt('md5');
// Return string '5c6ffbdd40d9556b73a21e63c3e0e904'
```
Decrypt text (Only support symmetric encryption: AES, Triple DES, RC4, Rabbit, Base64):

```
hash.setDecryptText('U2FsdGVkX1+DV4sNpurscrtNhqmBYQMY+eB0rSF9jNr5mHu0VQO18aQlP0CAF1QIF4DY8+aFr902rCp68g53oA==');
var decryptText = hash.decrypt('aes')
// Return string 'The quick brown fox jumped over the lazy dog.'
```
# License
MyHash is freely distributable under the terms of the MIT license.
