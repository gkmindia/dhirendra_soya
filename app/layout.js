import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "@/styles/globals.css";
import Header from "@/components/Header";
import TopContactDetails from "@/components/TopContactDetails";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
    title: "Dhirendra Soya | Leading Soybean Processing & Agro Products Company",
    description: "Dhirendra Soya is a trusted leader in soybean processing and agro products, offering high-quality soybean oil, meal, and related products with state-of-the-art infrastructure.",
    keywords: [
        "Dhirendra Soya",
        "Soybean Processing",
        "Soybean Oil",
        "Soybean Meal",
        "Agro Products",
        "Soybean Export",
        "Soybean Supplier India",
        "Agro Industry",
    ],
    authors: [{ name: "Dhirendra Soya" }],
    creator: "Dhirendra Soya",
    publisher: "Dhirendra Soya",
    
    // openGraph: {
    //     title: "Dhirendra Soya | Leading Soybean Processing & Agro Products Company",
    //     description: "Explore Dhirendra Soya’s premium soybean products, from oil to meal, backed by modern infrastructure and commitment to quality.",
    //     url: "https://www.dhirendrasoya.com",
    //     siteName: "Dhirendra Soya",
    //     images: [
    //         {
    //         url: "https://www.dhirendrasoya.com/images/og-image.jpg",
    //         width: 1200,
    //         height: 630,
    //         alt: "Dhirendra Soya Agro Products",
    //         },
    //     ],
    //     locale: "en_US",
    //     type: "website",
    // },
    // twitter: {
    //     card: "summary_large_image",
    //     title: "Dhirendra Soya | Leading Soybean Processing & Agro Products Company",
    //     description: "Premium soybean oil, meal, and agro products from Dhirendra Soya. Trusted quality, modern infrastructure.",
    //     images: ["https://www.dhirendrasoya.com/images/og-image.jpg"],
    //     creator: "@dhirendrasoya", // if you have a Twitter handle
    // },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                {/* <TopContactDetails /> */}
                <Header />
                {children}
                <Toaster position="top-right" reverseOrder={false} />
                <Footer />
            </body>
        </html>
    );
}
