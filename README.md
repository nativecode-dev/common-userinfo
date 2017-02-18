# common-userinfo

[![npm](https://img.shields.io/npm/v/common-userinfo.svg?style=flat-square)](https://www.npmjs.com/package/common-userinfo)
[![Travis](https://img.shields.io/travis/nativecode-dev/common-userinfo.svg?style=flat-square&label=travis)](https://travis-ci.org/nativecode-dev/common-userinfo)
[![TeamCity](https://img.shields.io/teamcity/https/build.nativecode.com/s/commonuserinfo_continuous.svg?style=flat-square&label=teamcity)](https://build.nativecode.com/viewType.html?buildTypeId=commonuserinfo_continuous&guest=1)
[![David](https://img.shields.io/david/nativecode-dev/common-userinfo.svg?style=flat-square&label=deps)](https://www.npmjs.com/package/common-userinfo)
[![David](https://img.shields.io/david/dev/nativecode-dev/common-userinfo.svg?style=flat-square&label=devdeps)](https://www.npmjs.com/package/common-userinfo)

Cross platform `userInfo` properties for `node` v4 and v5 for POSIX and Windows.

NOTE: Performance for v4 and v5 uses several `exec` calls to get info.

# Installation
```
npm install --save common-userinfo
```

# Usage
```javascript
const userinfo = require('common-userinfo')

```

# TODO
- Improve performance for `node` v4 and v5.

# License
Copyright 2017 NativeCode Development <support@nativecode.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without
limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
Software, and to permit persons to whom the Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
