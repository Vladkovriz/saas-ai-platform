import { model, models, Schema } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  clerkId: string;
  planId: string;
  password: string;
  firstName?: string;
  lastName?: string;
  photo: string;
  creditBalance: string;
}

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  clerkId: { type: String, required: true, unique: true },
  planId: { type: String, default: 1 },
  password: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  photo: { type: String, required: true },
  creditBalance: { type: Number, default: 10 },
});

const User = models?.User || model<IUser>("User", UserSchema);

export default User;
