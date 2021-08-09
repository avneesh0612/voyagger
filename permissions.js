module.exports = {
  type: process.env.permission_type,
  project_id: process.env.permission_project_id,
  private_key_id: process.env.permission_private_key_id,
  private_key: process.env.permission_private_key,
  client_email: process.env.permission_client_email,
  client_id: process.env.permission_client_id,
  auth_uri: process.env.permission_auth_uri,
  token_uri: process.env.permission_token_uri,
  auth_provider_x509_cert_url:
    process.env.permission_auth_provider_x509_cert_url,
  client_x509_cert_url: process.env.permission_client_x509_cert_url,
};
