import express from 'express';
const router = express.Router();
import {uuid} from 'uuidv4';

router.get('/', (req, res) => {
  // Get the proxyServer value from the environment variable
  var proxyServer = process.env.PROXY_SERVER;
  var projectLocation = process.env.PROJECT_LOCATION;
  // If the environment variable is not set, use the default value
  if (!proxyServer) {
    proxyServer = 'http://localhost:8080';
  }
  const conversationId = `a${uuid()}`;
  const conversationName = `${projectLocation}/conversations/${conversationId}`;
  const conversationProfile = req.query.conversationProfile;
  const features = req.query.features;
  res.render('index', { title: 'Express Test', proxyServer, conversationName, conversationProfile, features });
});

export default router;
