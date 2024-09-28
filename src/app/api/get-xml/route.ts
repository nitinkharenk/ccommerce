import { NextResponse } from 'next/server';

export async function GET() {
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

  // Return the XML response
  return new NextResponse(xmlData, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

