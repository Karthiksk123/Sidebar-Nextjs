import Layout from "@/components/Layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout className="text">
    This is a Home Page
    </Layout>
  );
}
