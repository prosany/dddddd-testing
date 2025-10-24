import { corsConfigs } from '@/configs';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import path from 'path';

import { app } from '@/libs/initiateServer';
import errorHandler, { notFound } from '@/middlewares/errorHandler.middleware';

import coreRoutes from '@/routes/core.route';

// enable cors
app.use(cors(corsConfigs));
app.options('(.*)', cors(corsConfigs));

// parse cookies
app.use(cookieParser());

// body parser
app.use(express.urlencoded({ extended: true, limit: '100mb' }));
app.use(express.json({ limit: '100mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// trust proxy
app.set('trust proxy', true);

// gzip compression
app.use(compression());

// routes
app.use(coreRoutes);

// global error handler
app.use(notFound);
app.use(errorHandler);

export default app;
