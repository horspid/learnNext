import { getHelloMessage, createHelloGreeting } from '@/lib/hello';
import { NextResponse } from 'next/server';

export async function GET() {
	const data = getHelloMessage();
	return NextResponse.json(data);
}

export async function POST(request) {
	const { name } = await request.json();
	const result = createHelloGreeting(name);

	return NextResponse.json(result);
}
