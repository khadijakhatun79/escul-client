import { mongoConnect } from "@/lib/mongoConnect";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

// Get course by ID
export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;

    const { db } = await mongoConnect();

    const course = await db
      .collection("courses")
      .findOne({ _id: new ObjectId(id) });

    if (!course) {
      return NextResponse.json({ error: "course not found" }, { status: 404 });
    }

    const formattedcourse = {
      id: course._id.toString(),
      title: course.title,
      description: course.description,
      image: course.image,
      category: course.category,
      price: course.price,
      rating: course.rating,
      stock: course.stock,
      featured: course.featured,
    };

    return NextResponse.json(formattedcourse);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch course" },
      { status: 500 },
    );
  }
}

// Update course
export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;

    const body = await req.json();

    const { db } = await mongoConnect();

    const result = await db.collection("courses").updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: body,
      },
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "course not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "course updated successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to update course" },
      { status: 500 },
    );
  }
}

// Delete course
export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;

    const { db } = await mongoConnect();

    const result = await db.collection("courses").deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "course not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "course deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to delete course" },
      { status: 500 },
    );
  }
}
