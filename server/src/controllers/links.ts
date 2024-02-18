import express from 'express';
import { deleteLinkById, getLinks, updateLinkById, createLink } from '../db/links';

export const getAllLinks = async (req: express.Request, res: express.Response) => {
  console.log("Received link get request", req.body);
  try {
    const links = await getLinks();

    return res.status(200).json(links);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const createNewLink = async (req: express.Request, res: express.Response) => {
    try {
        const savedLink = await createLink( req.body);
        res.json(savedLink);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
};
  

export const deleteLink = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const deleteLink = await deleteLinkById(id);

    return res.json(deleteLink);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const updateLink = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const updatedLink = await updateLinkById(id, req.body);

    if (!updatedLink) {
      return res.sendStatus(404);
    }

    await updatedLink.save();

    return res.status(200).json(updatedLink).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }

}