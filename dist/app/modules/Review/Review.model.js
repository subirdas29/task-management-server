"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
    customerId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    mealProviderId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    review: { type: String, required: true },
}, { timestamps: true });
const Review = (0, mongoose_1.model)('Review', reviewSchema);
exports.default = Review;
