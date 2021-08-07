// {
//   "type": "service_account",
//   "project_id": "voyager-40301",
//   "private_key_id": "da8a402169fecab427b8375b7bbcc626ed476bf9",
//   "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC8cxw5H/66ZLBy\nyJe4mqypFoWpoc30Ye5pQlz8Jjl5ukTss0JYX2+BwHKzemT+uWucMdMPv5bW+364\n9NPCnoWzue34FAY2dsVzCmHjNLtmBOy/vLJz7GE9GQPItGqtWGijcW4hBqiv3YPi\nsrPTddqGMDGFCpkcUPk6HyPXg1PLcxlsmuDlPuJK5AQr60+V1VkinOnNWYYavM4H\nlMS9EBKiWQ7EUypS/nLcn3Aki46yvzmpKG9XNbXkuQIlMcXF6Wy1eUBNUmj/VHEg\nXOi+ZvdrKjvTrwAG6kwvLiNCwjq4O5tnzTcVJ4zMpXEezQKXd/BA8FYuYiexTwKU\nPajUuUcFAgMBAAECggEACumy6jSfSIWj2YR36Mb9la3KCr3l0oTzTKF9B1W4AVkX\nPF/Qc+lUPel6RZ4iXW/jupVWDso+VBpsnGMCek7kw44nqN87/DPE5mRlBnEbeGJz\nn/zaQVqgckHRwByBNaLyLaOCyE3S6fBEKWtw0h+NNTUdllc78PGtemoAO4Q4OjFJ\ngv4/yZ/WSPfPFRI+sqX3SXkLA/LGQP4YTOPxbTM1sSVGpbqnzB31HNl8uBNs8ER2\n5omt3QuBsmyHBcLpTxYcNmAt6VG9qlCT8IKTSh/iU7WeLtUqSXCC1ASx0J6Qkf/v\n9CozoQ2a6N2bWCKud7ABH2tAOcYZN1wJQv/il2woAQKBgQDlFazM0GRkwU1yx/K/\nwGyJFzGs8uzFwsD+s7N2J9zOdRa+rgHl8yHziF0Lu6Y2bha1N1TKKNNiFW2wOLwj\ntvk6+H8dSrUQ7klXJc7vrvq/bzvXel26jxitNadXOntVwnlyGnWLdLAVcEL7h7rd\ntOTo5IEBaBgrcr2s3Y/r1h1UAQKBgQDSlzrg7QwNiBkLIYdpZzY/tTwwblUVcRB2\n/1IxVO3/hKXsRu53pM4JEop8I10B8o/RWoEzSsejd3QlCTAvJnZ22JK7iRjJSOPq\neUnvtFBoiJl2kJs/1BweC5SL4noaEImJYj4nJAr1GPaHmGVO5TfazS6Qunwxxaw3\n6FwrMaqjBQKBgQDHnhqEIjbJARPOp+KkKjWpQ7e6n7eoH6tyhf4kQFoM4USfhRsM\nV89G2ZVSiwIrvcQ1xnAw9GA1wLxi6R0v9dm5BB4n1RhwF2N69+wZOR0wQOohOnSA\nAv8at30I6mHceei/f8TbbyOcmsUTTtOLK3yoX6z2H9Gn0oTrI+msNFg8AQKBgGGU\n8hOHxC4BApnFz5ln2htrP5ixh3uICLkbVlrFoALm1HvH4nhORaqujL05Jb/hRgMc\njQHXhOqaT5dZypoOmJY5hMShonqi6/maekg4pYnKwlHOcCIDh4PkmdC4ARxSzWh7\nvZElgm5QQuxSEZ+dV2Rr70fhIetuTX8ajJr3SLqBAoGACnc2yEDLeWGUuViXZXbv\nYBtnkPC9hFu+u5qWn0DqswRdfat/N/cE7NBGbu7cnwgGnGbK7B51+5+ThUVZH8vB\nlFkvyZ/hRSQYXv4uoOsIPK8FgNamXY+yGCb0BnRHjv2sPJNhy5FsZEZxGyhkMRLG\ndFsfd+BMHN74O10Gy2L844g=\n-----END PRIVATE KEY-----\n",
//   "client_email": "firebase-adminsdk-jjxfw@voyager-40301.iam.gserviceaccount.com",
//   "client_id": "113902668000545467492",
//   "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//   "token_uri": "https://oauth2.googleapis.com/token",
//   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//   "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-jjxfw%40voyager-40301.iam.gserviceaccount.com"
// }

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
