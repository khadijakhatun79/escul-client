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

    const data: TCourse = await req.json();

    if (!data.title || !data.category || !data.price || !data.image) {
      return NextResponse.json(
        {
          error: "Title, category, price, and image are required.",
        },
        { status: 400 }
      );
    }

    const { _id, id, ...courseData } = data;

    const result = await db.collection("courses").insertOne({
      ...courseData,
      createdAt: new Date(),
    });

    return NextResponse.json(
      {
        message: "Course created successfully.",
        id: result.insertedId.toString(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to create course." },
      { status: 500 }
    );
  }
}