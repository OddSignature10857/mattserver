import connectionDb from "@/app/lib/mongoose";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectionDb();
    
    const { name, email } = await request.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const newUser = new User({ name, email });
    await newUser.save();

    return NextResponse.json(newUser, { status: 201 });

  } catch (error) {
    console.log(error);
    
    return NextResponse.json(
      { message: "Something went wrong, please try again later." },
      { status: 500 }
    );
  }
}
