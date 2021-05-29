const mongoose = require("mongoose")

const Schema = mongoose.Schema

const complaintSchema = new Schema({
    title:      {type: String, required: true},
    content:    {type: String, required: true},
    from :      {type: String, required: true},
    to:         {type: String, required: true},
    likes:      {type: Number},
    dislikes:   {type: Number},
})

const Complaint = mongoose.model("complaint", complaintSchema)

module.exports = Complaint;