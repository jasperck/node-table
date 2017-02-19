# node-table

Simply generate table with multi-columns and column width auto adjust supported.

## Usage
```js
const table = require('node-table');

const header = [
  'status',
  'uid',
  'progress',
  'time'
];

const data = [
  { "status": "online", "uid": "124897", "progress": 30, "timestamp": 1479743379468, "time": "2016-11-21T15:49:39.468Z" },
  { "status": "offline", "uid": "52649553", "progress": 0, "timestamp": 1487148221725, "time": "2017-02-15T08:43:41.725Z" }
];

const output = table(data, header);
```

```
+----------------------------------------------------------+
| status  | uid      | progress | time                     |
------------------------------------------------------------
| online  | 124897   | 30       | 2016-11-21T15:49:39.468Z |
| offline | 52649553 | 0        | 2017-02-15T08:43:41.725Z |
+----------------------------------------------------------+
```

you could also generate table with all properties by simply passing data only

```js
const output = table(data);
```

```
+--------------------------------------------------------------------------+
| status  | uid      | progress | timestamp     | time                     |
----------------------------------------------------------------------------
| online  | 124897   | 30       | 1479743379468 | 2016-11-21T15:49:39.468Z |
| offline | 52649553 | 0        | 1487148221725 | 2017-02-15T08:43:41.725Z |
+--------------------------------------------------------------------------+
```

## License
[MIT](https://github.com/jasperck/node-table/blob/master/LICENSE) @ [JasperCK](https://github.com/jasperck)