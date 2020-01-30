<!--
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
-->

[![Version](https://img.shields.io/npm/v/@adobe/aio-lib-magento.svg)](https://npmjs.org/package/@adobe/aio-lib-magento)
[![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-lib-magento.svg)](https://npmjs.org/package/@adobe/aio-lib-magento)
[![Build Status](https://travis-ci.com/adobe/aio-lib-magento.svg?branch=master)](https://travis-ci.com/adobe/aio-lib-magento)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) [![Greenkeeper badge](https://badges.greenkeeper.io/adobe/aio-lib-magento.svg)](https://greenkeeper.io/)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-lib-magento/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-lib-magento/)

# Adobe I/O ??? Lib

### Installing

```bash
$ npm install @adobe/aio-lib-magento
```

### Usage
1) Initialize the SDK

```javascript
const sdk = require('@adobe/aio-lib-magento')

async function sdkTest() {
  //initialize sdk
  const client = await sdk.init('<tenant>', 'x-api-key', '<valid auth token>')
}
```

2) Call methods using the initialized SDK

```javascript
const sdk = require('@adobe/aio-lib-magento')

async function sdkTest() {
  // initialize sdk
  const client = await sdk.init('<tenant>', 'x-api-key', '<valid auth token>')

  // call methods
  try {
    // get profiles by custom filters
    const result = await client.getSomething({})
    console.log(result)

  } catch (e) {
    console.error(e)
  }
}
```

## Classes

<dl>
<dt><a href="#MagentoCoreAPI">MagentoCoreAPI</a></dt>
<dd><p>This class provides methods to call your MagentoCoreAPI APIs.
Before calling any method initialize the instance by calling the <code>init</code> method on it
with valid values for tenantId, apiKey and accessToken</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#init">init(tenantId, apiKey, accessToken)</a> ⇒ <code><a href="#MagentoCoreAPI">Promise.&lt;MagentoCoreAPI&gt;</a></code></dt>
<dd><p>Returns a Promise that resolves with a new MagentoCoreAPI object.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#MyParameters">MyParameters</a> : <code>object</code></dt>
<dd><p>An example of a typed object.</p>
</dd>
<dt><a href="#AnotherThing">AnotherThing</a> : <code>object</code></dt>
<dd><p>Another typed object.</p>
</dd>
</dl>

<a name="MagentoCoreAPI"></a>

## MagentoCoreAPI
This class provides methods to call your MagentoCoreAPI APIs.
Before calling any method initialize the instance by calling the `init` method on it
with valid values for tenantId, apiKey and accessToken

**Kind**: global class  

* [MagentoCoreAPI](#MagentoCoreAPI)
    * [.tenantId](#MagentoCoreAPI+tenantId) : <code>string</code>
    * [.apiKey](#MagentoCoreAPI+apiKey) : <code>string</code>
    * [.accessToken](#MagentoCoreAPI+accessToken) : <code>string</code>
    * [.init(tenantId, apiKey, accessToken)](#MagentoCoreAPI+init) ⇒ [<code>Promise.&lt;MagentoCoreAPI&gt;</code>](#MagentoCoreAPI)
    * [.getSomething([parameters])](#MagentoCoreAPI+getSomething) ⇒ <code>Promise.&lt;Response&gt;</code>

<a name="MagentoCoreAPI+tenantId"></a>

### magentoCoreAPI.tenantId : <code>string</code>
The tenant id

**Kind**: instance property of [<code>MagentoCoreAPI</code>](#MagentoCoreAPI)  
<a name="MagentoCoreAPI+apiKey"></a>

### magentoCoreAPI.apiKey : <code>string</code>
The api key from your integration

**Kind**: instance property of [<code>MagentoCoreAPI</code>](#MagentoCoreAPI)  
<a name="MagentoCoreAPI+accessToken"></a>

### magentoCoreAPI.accessToken : <code>string</code>
The access token from your integration

**Kind**: instance property of [<code>MagentoCoreAPI</code>](#MagentoCoreAPI)  
<a name="MagentoCoreAPI+init"></a>

### magentoCoreAPI.init(tenantId, apiKey, accessToken) ⇒ [<code>Promise.&lt;MagentoCoreAPI&gt;</code>](#MagentoCoreAPI)
Initializes a MagentoCoreAPI object and returns it.

**Kind**: instance method of [<code>MagentoCoreAPI</code>](#MagentoCoreAPI)  
**Returns**: [<code>Promise.&lt;MagentoCoreAPI&gt;</code>](#MagentoCoreAPI) - a MagentoCoreAPI object  

| Param | Type | Description |
| --- | --- | --- |
| tenantId | <code>string</code> | the tenant id |
| apiKey | <code>string</code> | the API key for your integration |
| accessToken | <code>string</code> | the access token for your integration |

<a name="MagentoCoreAPI+getSomething"></a>

### magentoCoreAPI.getSomething([parameters]) ⇒ <code>Promise.&lt;Response&gt;</code>
Get something.

**Kind**: instance method of [<code>MagentoCoreAPI</code>](#MagentoCoreAPI)  
**Returns**: <code>Promise.&lt;Response&gt;</code> - the response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [parameters] | [<code>MyParameters</code>](#MyParameters) | <code>{}</code> | parameters to pass |

<a name="init"></a>

## init(tenantId, apiKey, accessToken) ⇒ [<code>Promise.&lt;MagentoCoreAPI&gt;</code>](#MagentoCoreAPI)
Returns a Promise that resolves with a new MagentoCoreAPI object.

**Kind**: global function  
**Returns**: [<code>Promise.&lt;MagentoCoreAPI&gt;</code>](#MagentoCoreAPI) - a Promise with a MagentoCoreAPI object  

| Param | Type | Description |
| --- | --- | --- |
| tenantId | <code>string</code> | the tenant id |
| apiKey | <code>string</code> | the API key for your integration |
| accessToken | <code>string</code> | the access token for your integration |

<a name="MyParameters"></a>

## MyParameters : <code>object</code>
An example of a typed object.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| optionA | <code>string</code> | some option |
| optionB | <code>string</code> | another option |

<a name="AnotherThing"></a>

## AnotherThing : <code>object</code>
Another typed object.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| mayBeSomething | <code>boolean</code> | an option |

### Debug Logs

```bash
LOG_LEVEL=debug <your_call_here>
```

Prepend the `LOG_LEVEL` environment variable and `debug` value to the call that invokes your function, on the command line. This should output a lot of debug data for your SDK calls.

### Contributing

Contributions are welcome! Read the [Contributing Guide](./.github/CONTRIBUTING.md) for more information.

### Licensing

This project is licensed under the Apache V2 License. See [LICENSE](LICENSE) for more information.
