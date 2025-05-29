const jsforce = require('jsforce');
const express = require('express');
const cors = require('cors');
const apexScenarios = require('./data/apexScenarios'); // adjust path if needed

app.get('/auth/login', (req, res) => {
  const oauth2 = new jsforce.OAuth2({
    loginUrl: 'https://login.salesforce.com',
    clientId: process.env.SF_CLIENT_ID,
    clientSecret: process.env.SF_CLIENT_SECRET,
    redirectUri: process.env.SF_CALLBACK_URL,
  });

  // Redirect to Salesforce login
  res.redirect(oauth2.getAuthorizationUrl({ scope: 'full refresh_token' }));
});
app.get('/auth/callback', async (req, res) => {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send('Missing code in callback URL');
  }

  const oauth2 = new jsforce.OAuth2({
    loginUrl: 'https://login.salesforce.com',
    clientId: process.env.SF_CLIENT_ID,
    clientSecret: process.env.SF_CLIENT_SECRET,
    redirectUri: process.env.SF_CALLBACK_URL,
  });

  const conn = new jsforce.Connection({ oauth2 });

  try {
    await conn.authorize(code);
    console.log('Access Token:', conn.accessToken);
    console.log('Instance URL:', conn.instanceUrl);
    console.log('User ID:', conn.userInfo.id);

    // Optionally, set a session/cookie/token
    res.send('Salesforce connected! You can now start practicing.');
  } catch (err) {
    console.error('Authorization error:', err);
    res.status(500).send('Salesforce authorization failed.');
  }
});

const app = express();
app.use(cors());
app.use(express.json());

// Route to fetch all scenarios
app.get('/api/apex-scenarios', (req, res) => {
  res.json(apexScenarios);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
