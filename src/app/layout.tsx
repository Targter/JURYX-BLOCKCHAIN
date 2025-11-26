import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/component/auth/AuthProvider";
import Navbar from "@/component/UserNavbar";

export const metadata: Metadata = {
  title: {
    default: "Abhay Bansal | Full Stack & AI Developer Portfolio",
    template: "%s | Abhay Bansal",
  },
  description:
    "Professional portfolio of Abhay Bansal - Full Stack Developer specializing in AI, 3D web applications, and modern JavaScript frameworks. View my projects, skills, and work experience.",
  keywords: [
    "Abhay Bansal",
    "Abhay Bansal Portfolio",
    "Full Stack Developer India",
    "AI Developer Portfolio",
    "Next.js Developer",
    "React Expert",
    "3D Web Developer",
    "Machine Learning Engineer",
    "Web Development Freelancer",
    "JavaScript Specialist",
  ],
  authors: [{ name: "Abhay Bansal", url: "https://abhaybansal.in" }],
  metadataBase: new URL("https://abhaybansal.in"),
  openGraph: {
    title: "Abhay Bansal - Full Stack & AI Developer",
    description:
      "Explore Abhay's projects and skills in AI and full-stack development.",
    url: "https://abhaybansal.in",
    siteName: "Abhay Bansal Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://abhaybansal.in/abhay.jpg",
        width: 1200,
        height: 630,
        alt: "Abhay Bansal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Abcheckk",
    creator: "@Abcheckk",
    title: "Abhay Bansal - Full Stack AI Developer",
    description: "Full Stack AI projects, 3D web, and professional portfolio.",
    images: ["https://abhaybansal.in/abhay.jpg"],
  },
  alternates: {
    canonical: "https://abhaybansal.in",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/globe.svg",
        color: "#5bbad5",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

// Moved cookies access inside the component
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const cookieStore = await cookies();
  // const userId = cookieStore.get('user_id')?.value;
  // // const emailId = cookieStore.get('user_email')?.value;
  // // console.log("userId:",userId,"e:",emailId)
  // const isAuthenticated = !!userId;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abhay Bansal",
    jobTitle: "Full Stack & AI Developer",
    url: "https://abhaybansal.in",
    sameAs: [
      "https://github.com/Targter",
      "https://linkedin.com/in/abhaybansal001",
      "https://x.com/abhaybansal001",
    ],
    image: "https://abhaybansal.in/abhay.jpg",
    description:
      "Full Stack Developer specializing in AI and modern web technologies",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "India",
    },
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Artificial Intelligence",
      "Machine Learning",
      "Web Development",
    ],
  };
  return (
    <html lang="en">
      {/* ${geistSans.variable} ${geistMono.variable} */}
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={` antialiased`}>
        <AuthProvider>
          <div className="">
            <Navbar />
          </div>
          {children}{" "}
        </AuthProvider>
      </body>
    </html>
  );
}
