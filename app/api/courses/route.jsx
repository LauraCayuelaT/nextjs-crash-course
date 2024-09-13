import { NextResponse } from "next/server";
import courses from "./data.json";

export async function GET(request) {
    return NextResponse.json(courses)  
}

//We shoul be able to check the endpoing with a GET localhost:3000/api/courses 

