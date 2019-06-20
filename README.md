# _Remove Background_ OMG Microservice

[![Open Microservice Guide](https://img.shields.io/badge/OMG%20Enabled-👍-green.svg?)](https://microservice.guide)

An OMG service to remove background from the image in which at least one detectable person.

## Direct usage in [Storyscript](https://storyscript.io/):

**Note**: Remove background support JPG and PNG images with a maximum file size of 8 MB converted into base64 format. Every image must contain at least one detectable person.

##### Remove Background
```coffee
>>> remove-bg process base64content:'base64data'
```

Curious to [learn more](https://docs.storyscript.io/)?

✨🍰✨

## Usage with [OMG CLI](https://www.npmjs.com/package/omg)

##### Remove background
```shell
$ omg run process -a base64content='<base64_content>' -e API_KEY=<API_KEY>
```

**Note**: the OMG CLI requires [Docker](https://docs.docker.com/install/) to be installed.

## License
[MIT License](https://github.com/omg-services/image-diff/blob/master/LICENSE).
