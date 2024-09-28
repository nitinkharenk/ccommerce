import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // Ensures the API route is dynamic

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function GET() {
  await delay(30000); // 30-second delay

  const xmlData = `
    <root>
      <item>
        <name>Item 1</name>
        <description>This is the first item</description>
      </item>
      <item>
        <name>Item 2</name>
        <description>This is the second item</description>
      </item>
    </root>
  `;

  return new NextResponse(xmlData, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
