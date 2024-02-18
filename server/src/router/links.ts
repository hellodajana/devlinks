import express from 'express';

import { getAllLinks, createNewLink, updateLink, deleteLink } from '../controllers/links';
import { isAuthenticated, isOwner } from '../middlewares';

export default (router: express.Router) => {
  router.get('/links', isAuthenticated, getAllLinks);
  router.delete('/links/:id', isAuthenticated, isOwner, deleteLink);
  router.patch('/links/:id', isAuthenticated, isOwner, updateLink);
  router.post('/links', createNewLink)
};