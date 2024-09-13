import { NextResponse } from "next/server";
import courses from "../data.json"

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query')
    const filteredCourses = courses.filter((course)=>{
        return course.title.toLowerCase().includes(query.toLowerCase());
    })
    return NextResponse.json(filteredCourses);
}

export async function POST(request) {
    const { title, description, level, link} = await request.json();
    console.log(title,description,level,link)

    return NextResponse.json({message: 'Course created'})
}