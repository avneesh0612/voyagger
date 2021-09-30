# Contributing to Voyagger

## Setting up workflow

- Fork this repository
- If you have yarn installed

```
yarn install
```

- If you don't have yarn installed

```
npm i -g yarn
yarn install
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

Auth0

```
AUTH0_SECRET
AUTH0_BASE_URL
AUTH0_ISSUER_BASE_URL
AUTH0_CLIENT_ID
AUTH0_CLIENT_SECRET
```

Firebase

```
FIREBASE_CONFIG_API_KEY
FIREBASE_AUTH_DOMAIN
FIREBASE_PROJECT_ID
FIREBASE_STORAGE_BUCKET
FIREBASE_MESSAGEING_SENDER_ID
FIREBASE_APP_ID
FIREBASE_MEASUREMENT_ID
```

Stripe

```
STRIPE_PUBLIC_KEY
STRIPE_SECRET_KEY
STRIPE_SIGNING_SECRET
```

Firebase permissions for Stripe webhook

```
PERMISSION_TYPE
PERMISSION_PROJECT_ID
PERMISSION_PRIVATE_KEY_ID
PERMISSION_PRIVATE_KEY
PERMISSION_CLIENT_EMAIL
PERMISSION_CLIENT_ID
PERMISSION_AUTH_URI
PERMISSION_TOKEN_URI
PERMISSION_AUTH_PROVIDER_URL
PERMISSION_CLIENT_PROVIDER_URL
HOST=http://localhost:3000
```

I created development credentials for making the job of contributing easier, so you can simply copy and paste these into `.env.local` to get your app up and running perfectly

```
# Auth0
AUTH0_SECRET='791dbc2bcd85f887912a5c98f26e0e7090442dfa0a1dfe33b5848188fa3839b4'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='https://avneesh0612.us.auth0.com'
AUTH0_CLIENT_ID='7SqxihF6VNb0yNCudX2qjmd2vd84Ztsu'
AUTH0_CLIENT_SECRET='r1YTMuh0VZbE_WQnUuA-YIy97aOqMztDVokQwqbBO6PAYx0bMLPKXNHY0MjzQxwQ'

# Firebase
FIREBASE_MEASUREMENT_ID="G-6YT0T2GW78"
FIREBASE_APP_ID="1:981973597448:web:b2ac192135988df2a340bd"
FIREBASE_MESSAGEING_SENDER_ID="981973597448"
FIREBASE_STORAGE_BUCKET="voyager-developmen.appspot.com"
FIREBASE_PROJECT_ID="voyager-developmen"
FIREBASE_AUTH_DOMAIN="voyager-developmen.firebaseapp.com"
FIREBASE_CONFIG_API_KEY="AIzaSyC61I6HDzJPfxWN7ANmNpUxrcZTWdcSZzk"

# Stripe
STRIPE_SIGNING_SECRET="whsec_QcwcdZEGlDIsG5BQe9V0iFGotphZAiJ7"
HOST="http://localhost:3000"
STRIPE_SECRET_KEY="sk_test_51JQY90SFCK0n3kd3T7WIc1h0B9vlGsJrwetby1i7hongwgGufUsz8IioqTPMHxix5BZ4uYmfwrCcWKZJAXXPAsh600qPCQO6KJ"
STRIPE_PUBLIC_KEY="pk_test_51JQY90SFCK0n3kd3cbqLphItaBERQdMyIHdlEwx9Gv11laqkYB51T54nPAaf7wsqVLCAG52f5Qc5Yo3JiCewMTvm00yvevpMcs"
STRIPE_SHIPPING_RATE=shr_1JQa0SSFCK0n3kd38NRJOcjE

# Firebase permissions
PERMISSION_TYPE="service_account"
PERMISSION_PROJECT_ID="voyager-developmen"
PERMISSION_PRIVATE_KEY_ID="4781a8bece41a3cfdea93a0d1019f368d3502ef2"
PERMISSION_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCUTZ749Zkq3p+x\nWmQ/cYKpBVzWjkgNiUeq/AtbIPfpiJut9zY459QQ8AFc+e2lB1OcNl0Jud3y7Tl4\ncImtziov1jQ8X4W3RiBhJ7MD3c9/wXlBMqR1sy0qI31dhm4Pxcpo8XZCjxMyvmZ7\nFB7kp3cQBnveNkUIpvBQH376JmNBID9fBJ15ZBoVdFAYWohbjrSmskeDzAHXNsph\nvBRb38frVg1/5B7RRGw5U9WhKDiKGVkHYeilUngNC8ths8mMal5uxd+6Zm6nPeVu\ngCzPrKxBGgXLqIB5ghO0FGbYIr/yhxYCIMiu6LO0BUrj9zvpH3HFc7KaQAJfjVq5\nFQS/+PjBAgMBAAECggEAQsdzAqrgxg+J/Bv2USUlT0Olas2Vv1amKWWmHWpKh+Om\nKl9LkLM/aEMSchHugyW57fkCyvrhaN6ORt/x9wwDLhg33EmtFfpjYSw1rVOHeIEf\nvw51RLSibTue22rJi5umSbwU4uK3I93dmqVUReTstZAd3dE1I7C8PG/6RtzbS7rw\noDOfP92EcqU0yRimOirU0QEDop146ZVQRBLtDBGPcnKmEt2/QtGTBzdEF4Td70CP\n8Vvoqm5nySqhI/2MKyjCxv0jp64BW1DR8243mmyv3eeigt7m9m1KCYH1ULhPeCfH\nLfJ4NUXzgn1Q2ypFjvvf7ZNL6Tzm4xkWS9MHQLs+2wKBgQDFXgNmof4s2uSkq1ag\nmi4Z81R9PnAoCR+ZUXeqwcfkNjtxhS79PX8PaqVlr8wNk2I7leGtzbfYXSoGN6QN\nZhBJer4FEAvgmn79/jSoCpYJrSg88aarKMvRb7lo/zrGtbCnPJ2T0mDsAY/SVIIP\nP113SY5KKyi6kPrAWpBqafd9vwKBgQDAXDx9drSk5ooSErOgCrAxLkyumwolbqFZ\nXRlWGu1mWMEzk7iPm9t8G65wXqe59rcfOydxN70Gxjqos3PazPrEZWqZW7J8yuxt\ncRDLMzI1wU4ucoeVgAFU4XdY0tLvc+Lh8QzqHLxyd4lJI6q6FUZWD426CuXQtIbN\nP4YvdHIpfwKBgDw7FI6doRPPOTeHkkgwxSDmQUJ3a4LMRfhkBED4Iihi5IEgQ9bE\njaIGybLek0cRU0kb1GNWBGTjCZAcKtRr8Ux7SMICw50niNm6WhduI5uQXFc858AU\nEx83GT4Rpb4+dEqVFQGnkixzzZBCee5tR/i/Wc0InsVQuTU6bhgLfpvBAoGAL8N3\nXavpBP0dkYlFQtsEjuGxNrXWmh7TP45HaUL8aapmJrlqXXZU1IdHFC3ctedV5xJY\nI9u0Owdjr1oHzW+SYMvR4UyMkEIO3MnzYpFOyVw7XnsfwXZsXjgx20NWDxEWaAXj\nsAn8nOujkh6iGNyJf3sTNPvZvq3kvvgkCIqAgl8CgYBYeUVvtnsLSVADWUvWcdYF\neoOeqcsx5QvPcmea98IvQOmdu07tDUfGFuyAFoqIxkqYRsmlVgGBbmkRdufXS3Cu\nnZXKJnMTBpLSWgp4HC4q7wfGVwqnUmf8kuXYSmims2FzxmPQGsE/H7AZ0lwjYOuj\nhQ0NXJaX/xoPCNQ0qyCF7Q==\n-----END PRIVATE KEY-----\n"
PERMISSION_CLIENT_EMAIL="firebase-adminsdk-n5ggx@voyager-developmen.iam.gserviceaccount.com"
PERMISSION_CLIENT_ID="115109409345022971033"
PERMISSION_AUTH_URI="https://accounts.google.com/o/oauth2/auth"
PERMISSION_TOKEN_URI="https://oauth2.googleapis.com/token"
PERMISSION_AUTH__X509_CERT_URL="https://www.googleapis.com/oauth2/v1/certs"
PERMISSION_CLIENT__X509_CERT_URL="https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-n5ggx%40voyager-developmen.iam.gserviceaccount.com"
```

## Starting the development server

```
yarn dev
```

#### Now you are ready to work on a new features/ fixing issues.

When you are done, make a pull request and I will merge it soon 🥳🥳
