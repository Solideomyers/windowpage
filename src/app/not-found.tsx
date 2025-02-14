'use client';

import Error from 'next/error';

export default function NotFound() {
  return (
    <html lang='en'>
      <body>
        <Error statusCode={401} />
        <h1>hola</h1>
      </body>
    </html>
  );
}
