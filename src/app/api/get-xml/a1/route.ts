
import { NextResponse } from 'next/server';

// Helper function to introduce a delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function GET() {
  // Introduce a 30-second delay
  await delay(30000); // 30,000 ms = 30 seconds

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

  // Return the XML response after the delay
  return new NextResponse(xmlData, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
