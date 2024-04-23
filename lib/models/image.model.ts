import { Document, Schema, model, models } from 'mongoose';

export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: URL;
  width?: number;
  height?: number;
  config?: Record<string, any>;
  transformatioUrl?: URL;
  aspectRatio?: string;
  color?: string;
  prompt?: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  author: Schema.Types.ObjectId;
  createtedAt?: Date;
  updatedAt?: Date;
}

const ImageSchema = new Schema({
  title: { type: String, required: true },
  transformationType: { type: String, required: true },
  publicId: { type: String, required: true },
  secureUrl: { type: URL, required: true },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformatioUrl: { type: URL },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  createtedAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model('Image', ImageSchema);

export default Image;
