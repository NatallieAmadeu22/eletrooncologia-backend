"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApplication = exports.getApplications = void 0;
let applications = [];
const getApplications = (req, res) => {
    return res.status(200).json(applications);
};
exports.getApplications = getApplications;
const createApplication = (req, res) => {
    const newApplication = {
        id: Date.now().toString(),
        ...req.body,
        createdAt: new Date()
    };
    applications.push(newApplication);
    return res.status(201).json(newApplication);
};
exports.createApplication = createApplication;
