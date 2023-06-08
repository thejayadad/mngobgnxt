import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 4
    },
    desc: {
        type: String,
        required: true,
        min: 6
    },
    category: {
        type: String,
        required: true,
        enum: [
            'Sports',
            'Money',
            'News',
            'Tech',
            'Programming',
        ]
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    likes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        default: []
    }
}, {timestamps: true})

export default mongoose?.models?.Post || mongoose.model("Post", PostSchema)