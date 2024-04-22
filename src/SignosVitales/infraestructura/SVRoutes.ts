import express from 'express';
import {addSignsController } from './dependencias';
export const svRouter = express.Router()

svRouter.post(
    '/',
    addSignsController.run.bind(addSignsController)
)