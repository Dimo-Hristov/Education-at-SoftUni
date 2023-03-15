import * as request from './requester.js';

const baseurl = 'http://localhost:3030/data/offers';

export const getDashboard = () => request.get(`${baseurl}/?sortBy=_createdOn%20desc`);

export const create = (data) => request.post(baseurl, data)




