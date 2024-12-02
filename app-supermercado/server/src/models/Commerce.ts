import mongoose, { Schema, Document, Types } from "mongoose";

interface ICommerce extends Document {
    rfc: string;
    name: string;
    businessLine: string;
    dateAdded: Date;
  }
  
  const CommerceSchema = new Schema<ICommerce>({
    rfc: { type: String, required: true },
    name: { type: String, required: true },
    businessLine: { type: String, required: true },
    
  });
  
  const Commerce = mongoose.model<ICommerce>("Commerce", CommerceSchema);
  