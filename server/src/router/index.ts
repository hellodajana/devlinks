import express from 'express';

import authentication from './authentication';
import users from './users';
import links from './links';

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  links(router)

  return router;
};