import mongoose from 'mongoose';

const LinkSchema = new mongoose.Schema({
  link: {
    id: {type: String},
    platform: { type: String, required: true }, 
    link: { type: String, required: true },  
}
});  

export const LinkModel = mongoose.model('Link', LinkSchema);

export const getLinks = () => LinkModel.find();
export const createLink = (values: Record<string, any>) => new LinkModel(values).save().then((link) => link.toObject());
export const deleteLinkById = (id: string) => LinkModel.findOneAndDelete({ _id: id });
export const updateLinkById = (id: string, values: Record<string, any>) => LinkModel.findByIdAndUpdate(id, values);