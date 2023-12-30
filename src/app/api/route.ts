/** @format */

import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
	const key_name = "token";
	cookies().set(key_name, "test");

	const response = NextResponse.json(
		{
			msg: "Hell world!",
			key_name,
		},
		{
			status: 200,
		}
	);
	// response.cookies.set(key_name, "override");

	console.log("cookie from request(from document)", request.cookies.get(key_name));
	console.log("cookie", cookies().get(key_name));
	console.log("cookie from response", response.cookies.get(key_name));
	return response;
}
