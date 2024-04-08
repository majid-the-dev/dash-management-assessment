import mongoose from "mongoose";
import { Reviews } from "@/models/Reviews";

export const POST = async (req) => {
  mongoose.connect(process.env.MONGO_URL);
  const { amenities, rating, review, postAsAnonymous } = await req.json();
  const ReviewDoc = Reviews.create({
    amenities,
    rating,
    review,
    postAsAnonymous,
  });
  return Response.json(ReviewDoc);
};

export const GET = async () => {
  mongoose.connect(process.env.MONGO_URL);
  return Response.json(await Reviews.find());
};
