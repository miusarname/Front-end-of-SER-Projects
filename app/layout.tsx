/* export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
} */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="https://scontent.fbga1-4.fna.fbcdn.net/v/t39.30808-6/334018515_3413401262311897_8863148242789559263_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH-uHtZdDhduyCugU7e5x9a5dXSoUgEvE_l1dKhSAS8T7JW4t97NpT9k11RhQAFEGr3EUqgKfO507aPHVQwSYdk&_nc_ohc=iNoZQt0D818AX-USZ1Y&_nc_ht=scontent.fbga1-4.fna&oh=00_AfAHIoaUdE3Jgc5y3-p6PtjzLXjFfLOspiczjgWSZFp6Jw&oe=641AF8B6"
          type="image/x-icon"
        />
        <title>Campus ®</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        />
      </head>
      <body>
        {/* <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400;1,600&display=swap');
        </style> */}
        {/* <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
          crossOrigin="anonymous"
        ></script> */}
        {/*  <script
          src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
          crossOrigin="anonymous"
        ></script> */}
        {children}
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
          integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"
          integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
