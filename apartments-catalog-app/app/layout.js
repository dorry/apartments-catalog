import "./globals.css";
import Provider from "../providers/next-ui.provider";
import MainHeader from "@/components/layout/main-header";

export const metadata = {
  title: "Apartments Catalog",
  description: "Apartments Listing website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Provider>
          <MainHeader />
          {children}
        </Provider>
      </body>
    </html>
  );
}
