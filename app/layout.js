"use client";
import "./styles/globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Social Gram",
//   description: "Small social media app built with Next.js",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Social Gram - Small social media app built with Next.js</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <body className={inter.className}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
