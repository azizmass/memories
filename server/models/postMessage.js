import Mongoose from 'mongoose';

const postSchemer=new Mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    likeCount:{
        type:Number,
        default:0
    },
    createdAt: {
        type:Date,
        default: new Date()
    }
})
const PostMessage=Mongoose.model('PostMessage',postSchemer);

export default PostMessage;