const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    userID: String,
    reason: String,
    reportedBy: String,
    reportedByID: String,
    time: String,
    lb: String,
    money: Number,
    xp: Number,
    daily: Number,
})

module.exports = mongoose.model("Report", ReportSchema);