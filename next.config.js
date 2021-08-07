module.exports = {
  images: {
    domains: [
      "res.cloudinary.com",
      "lh3.googleusercontent.com",
      "images.dominos.co.in",
    ],
  },

  env: {
    firebase_config_api_key: process.env.FIREBASE_CONFIG_API_KEY,
    firebase_authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    firebase_projectId: process.env.FIREBASE_PROJECT_ID,
    firebase_storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    firebase_messagingSenderId: process.env.FIREBASE_MESSAGEING_SENDER_ID,
    firebase_appId: process.env.FIREBASE_APP_ID,
    firebase_measurementid: process.env.FIREBASE_MEASUREMENT_ID,
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
    permission_type: process.env.PERMISSION_TYPE,
    permission_project_id: process.env.PERMISSION_PROJECT_ID,
    permission_private_key_id: process.env.PERMISSION_PRIVATE_KEY_ID,
    permission_private_key: process.env.PERMISSION_PRIVATE_KEY,
    permission_client_email: process.env.PERMISSION_CLIENT_EMAIL,
    permission_client_id: process.env.PERMISSION_CLIENT_ID,
    permission_auth_uri: process.env.PERMISSION_AUTH_URI,
    permission_token_uri: process.env.PERMISSION_TOKEN_URI,
    permission_auth_provider_x509_cert_url:
      process.env.PERMISSION_AUTH_PROVIDER_URL,
    permission_client_x509_cert_url: process.env.PERMISSION_CLIENT_PROVIDER_URL,
  },
};
