import { param } from 'express-validator';
import { checkValidationResults } from './handleValidationErrors.js';

export const validateTaskId = [
    param('id')
    .exists()
    .withMessage('ID is required')
    .bail()
    .isInt()
    .withMessage('ID must be a number'),

    checkValidationResults
];