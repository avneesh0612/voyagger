<h1 align="center">Welcome to Voyagger 👋</h1>
<p>
  <a href="https://github.com/avneesh0612/Voyagger/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/avneesh0612" target="_blank">
    <img alt="Twitter: avneesh0612" src="https://img.shields.io/twitter/follow/avneesh0612.svg?style=social" />
  </a>
</p>

> Connecting people, Changing lives

### 🏠 [Homepage](https://www.voyagger.tech//)

### ✨ [Demo](https://www.voyagger.tech//)

## Install

```sh
yarn install
```

## Usage

```sh
yarn dev
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/avneesh0612/Voyagger/issues).

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
FIREBASE_CONFIG_API_KEY="AIzaSyC61I6HDzJPfxWN7ANmNpUxrcZTWdcSZzk"
FIREBASE_AUTH_DOMAIN="Voyagger-developmen.firebaseapp.com"
FIREBASE_PROJECT_ID="Voyagger-developmen"
FIREBASE_STORAGE_BUCKET="Voyagger-developmen.appspot.com"
FIREBASE_MESSAGEING_SENDER_ID="981973597448"
FIREBASE_APP_ID="1:981973597448:web:b2ac192135988df2a340bd"
FIREBASE_MEASUREMENT_ID="G-6YT0T2GW78"
BOOK_API_KEY="AIzaSyC61I6HDzJPfxWN7ANmNpUxrcZTWdcSZzk"

# Stripe
STRIPE_SIGNING_SECRET="whsec_QcwcdZEGlDIsG5BQe9V0iFGotphZAiJ7"
HOST="http://localhost:3000"
STRIPE_SECRET_KEY="sk_test_51JQY90SFCK0n3kd3T7WIc1h0B9vlGsJrwetby1i7hongwgGufUsz8IioqTPMHxix5BZ4uYmfwrCcWKZJAXXPAsh600qPCQO6KJ"
STRIPE_PUBLIC_KEY="pk_test_51JQY90SFCK0n3kd3cbqLphItaBERQdMyIHdlEwx9Gv11laqkYB51T54nPAaf7wsqVLCAG52f5Qc5Yo3JiCewMTvm00yvevpMcs"
STRIPE_SHIPPING_RATE=shr_1JQa0SSFCK0n3kd38NRJOcjE

# Firebase permissions
PERMISSION_TYPE="service_account"
PERMISSION_PROJECT_ID="Voyagger-developmen"
PERMISSION_PRIVATE_KEY_ID="d9aef77034e9fc85c232ebb24b8c054896765435"
PERMISSION_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDBr1ACBxQLdMnX\nGoY6lxbUKgh4hdJDvVKtrRU8dCLqmLAqIv6hczllwrIfLIFyhOvRoIz9GlI6nUzJ\noCaQFkirVn6FTNvYP4N0HMOXiYLUNQtE1A79uDqdgD/EDTKP9h/zVLKN47Jhd6vF\nYaqcyAR6VdjZNfG4rxXVdkJ+K8oznqlhntmmXDHWyv0nvrV1Kke+vMDVbthrAw02\nko8+ZDU5sWZ4CV/Xilg24eu+txow3zGh8WKXSbaf2bMJ7jjecgd8Cmev4dpC0OJc\nO4xVPh+/vjXUx1ZeVrK8/g6mRWxEoFGXaXwtQrh9uaYtnJcDFKa87OoTTlN5JmLc\n7Yn6VK0fAgMBAAECggEAX0Ol5CFsJAhhAIp8zBOleFxmRzV3Crdzk5YG1HHA/Md2\nGnuU538/k4Q0TS38S4ICZVyFDDamjErzSlaZsRQs0Q1ddJ4tocr3kqRVNdM+hLbE\nYKm25+d1+SLr+jeNj458/5fArRZ6FgOg+pgDrVKaFTvlSU0FpBOF9zTQFrPeJA3C\nVfwMzhSSjVIzvhiW9gldiBtFwTu9flvMDG1gHBFjkYhvcY72+L1ndMkuOlcxYmjP\n/CxnDHNOulzPHqRuEBT0o4sxFrCrxO2oe5lbRr+nVIq8xlpi5SGMRHiqV9JBJMiD\n+m4yWbgxZKgReMFBX2DhnfKmM5xoCeiXGwBKyKgD5QKBgQDlrBwkrG12RyhsSABr\ngTnCRuqHJyw0wfjiEtPIIe30BhyqJLowVzpVz77/mCq403OonxrNKNgmjRKw9Djw\nl+2JCuL8oQ5bS+hiM+gVVKwHyA5QMleZq8TZEbj828MJv1cmobFzfCxc8WuWL7ln\ncg4+gTA16xJiIvBTiG6BUGDi4wKBgQDX4yAOOKRZRCh43RJ9ysAx6JqxgKmZVtLq\nBui98VyeEtMzuv+KfB7I19lu0iK1es2b/fqN6WVPpu5vc6SzwnwmOHNrkS9Otpmc\nhw6fUWUbTjVhWutVWMWw8XzevL7SfecTmHHr50QV6mE9q6Dg8hFe8FbqnK4RtoY7\ndTyzn5wVlQKBgHW9VqwiTPdOoVVpT/XMyIxlCIQCu/HL4sgauMEnS7JGk9lRfLWd\ncgVdu9+R5YzcsbUm43l7T9vrhEJ84NfOOvJ/R0AVXKPG9TmqvHZ68roGf/fy5t+b\npA1XvYq7KnBLy+S9DZhTdvaquOnES3rRiKXYWpu5h7IRkTxxe50FVLXbAoGAGOMa\n9+i5sXy0+bHqhsvPujEpXBsL8hxbNhVT0Um4tpRO+qCtAsbqOZcAftEEpU0h1MDD\nmIZ2YmdJB1oae4qJC1Loo1baUEWmka/UFLOqZypt5uo3ROB18b70+SxjBxryf4TM\nZTiE1c3uJdDaO/RL4ljsfCFRw8L52HLca4yTzr0CgYAiBAI4rXhWTsY1fv/zrq5a\nsPGaQ722HcGp83/OUmhFOjFjVnorzwzDSfgWHGlSOChxyn0Lp6IUtEK3Cy/rj3ov\nz5D6oql3gzMSIfnNI66C9MpWCkz5xsR4WvYPhO1Gjq9vU6OcbT0ELFgfTAIqK71l\nfh91yDIYmKbYDr/aL6gXkg==\n-----END PRIVATE KEY-----\n"
PERMISSION_CLIENT_EMAIL="firebase-adminsdk-n5ggx@Voyagger-developmen.iam.gserviceaccount.com"
PERMISSION_CLIENT_ID="115109409345022971033"
PERMISSION_AUTH_URI="https://accounts.google.com/o/oauth2/auth"
PERMISSION_TOKEN_URI="https://oauth2.googleapis.com/token"
PERMISSION_AUTH_PROVIDER_URL="https://www.googleapis.com/oauth2/v1/certs"
PERMISSION_CLIENT_PROVIDER_URL="https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-n5ggx%40Voyagger-developmen.iam.gserviceaccount.com"
```

## Author

👤 **Avneesh Agarwal**

- Website: https://www.voyagger.tech//
- Twitter: [@avneesh0612](https://twitter.com/avneesh0612)
- Github: [@avneesh0612](https://github.com/avneesh0612)
- LinkedIn: [@avneesh-agarwal-78312b20a](https://linkedin.com/in/avneesh-agarwal-78312b20a)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Avneesh Agarwal](https://github.com/avneesh0612).<br />
This project is [MIT](https://github.com/avneesh0612/Voyagger/blob/main/LICENSE) licensed.
