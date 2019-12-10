const mongoose = require('mongoose');

const PrimaryObjectSchema = new mongoose.Schema({
    name: { type: String, required: [true, "A name is required"] },
    type: { type: String, required: [true, "A plant type is required"] },
    watered: { type: Boolean, default: false, required: [true, "A confirmation is required"] },
}, { timestamps: true })

mongoose.model('PrimaryObject', PrimaryObjectSchema);