"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
const handleDuplicateError = (err) => {
    const match = err.message.match(/"([^"]*)"/);
    const errorMessage = match && match[1];
    const statusCode = 400;
    const errorSources = [
        {
            path: '',
            message: `${errorMessage} is already exits`,
        },
    ];
    return {
        statusCode,
        message: 'Invalid Id',
        errorSources,
    };
};
exports.default = handleDuplicateError;
