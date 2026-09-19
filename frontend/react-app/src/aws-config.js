const awsConfig = {
  Auth: {
    Cognito: {
      userPoolId: "ap-south-1_bCbIwaTRN", // e.g., ap-south-1_xxxxxxxxx
      userPoolClientId: "78h8kh9t4mj0mtgvloqqit7a68", // e.g., 1a2b3c4d5e6f7g8h9i0j1k2l3m
      loginWith: {
        email: true,
      },
    },
  },
  API: {
    baseUrl: "", // e.g., https://xxxxxxxxxx.execute-api.ap-south-1.amazonaws.com
  },
};

export default awsConfig;
