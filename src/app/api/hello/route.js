import { NextResponse } from 'next/server';

export async function GET() {
	return NextResponse.json({ message: 'hello from api' });
}

export async function POST(request) {
	const data = await request.json();
	const { name } = data;

	return NextResponse.json({ message: `Hello ${name}, from API post` });
}
