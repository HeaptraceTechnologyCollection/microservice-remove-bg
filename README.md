# Remove Background as a microservice
An OMG service to remove background from the image in which at least one detectable person.

[![Open Microservice Guide](https://img.shields.io/badge/OMG-enabled-brightgreen.svg?style=for-the-badge)](https://microservice.guide)

This microservice's goal is to compare different images.

## [OMG](hhttps://microservice.guide) CLI

### OMG

* omg validate
* omg build

### Test Service

* Remove background support JPG and PNG images with a maximum file size of 8 MB converted into base64 format. Every image must contain at least one detectable person.

### CLI
```sh
$ omg exec removebg -a image='{"base64imageData":"<base64image_Data>"} -e API_KEY=<API_KEY>
```

### Postman
```sh
* RUN with command "npm start"
* POST localhost:3000/remove-bg
* Set header
* - apikey = <API_KEY>
* - Content-Type = application/json
* Set body in JSON(application/json) format
* eg: {	
        {"base64Data" :"<base64image_Data>"}
      }

## License
### [MIT](https://choosealicense.com/licenses/mit/)

## Docker
### Build
```
docker build -t microservice-remove-bg .
```
### RUN
```
docker run -p 3000:3000 microservice-remove-bg
```