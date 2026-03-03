import Layout from "@/components/Layout";
import TopSection from "@/components/dashboard/TopSection";
import BottomSection from "@/components/dashboard/BottomSection";

export default function Home({ mode, setMode }) {
  return (
    <Layout mode={mode} setMode={setMode}>
      <TopSection />
      <BottomSection />
    </Layout>
  );
}
