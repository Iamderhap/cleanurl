# Clean Url Group project

This project was developed by a group of frontend engineer at Toshconsult Technologies to test our post request features.

Currently, we're using vite and react to consume the api developed by our backend engineer:
#Base url
- [cleanurl.site](https://cleanurl.site)

The API request post request to short a new url and here is a sample request

- [{baseurl}/v1/shorturl](https://cleanurl.site/v1/shorturl) make a post request and return a data in json format

# Parameters
url - a long URL to be shortened (example: https://toshconsultinc.com/).
please note that 'url' is in lower case else it will throw an error!

# Sample response

` "shorturl" : "https://cleanurl.site/pEqXje" `