import { mongoConnect } from "@/lib/mongoConnect";
import { TCourse } from "@/types/course";
import { NextRequest, NextResponse } from "next/server";

// GET all courses
export async function GET() {
  try {
    const { db } = await mongoConnect();

    const courses = await db.collection("courses").find().toArray();

    const formattedcourses = courses.map((course) => ({
      id: course._id.toString(),
      title: course.title,
      description: course.description,
      category: course.category,
      image: course.image,
      price: course.price,
      rating: course.rating,
      stock: course.stock,
      featured: course.featured,
    }));

    return NextResponse.json(formattedcourses);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 },
    );
  }
}

// POST new course
export async function POST(req: NextRequest) {
  try {
    const { db } = await mongoConnect();

    const data: Tcourse = await req.json();

    // Basic validation
    if (!data.title || !data.category || !data.price || !data.image) {
      return NextResponse.json(
        {
          error: "Title, category, price, and image are required.",
        },
        { status: 400 },
      );
    }

    const result = await db.collection("courses").insertOne({
      ...data,
      createdAt: new Date(),
    });

    return NextResponse.json(
      {
        message: "course created successfully.",
        id: result.insertedId,
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to create course." },
      { status: 500 },
    );
  }
}
