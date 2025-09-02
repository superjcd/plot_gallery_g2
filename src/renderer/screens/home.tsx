import Layout from "renderer/components/layout";
import StockProceChange from "renderer/components/plot/StockPriceChange";
import AreaChangeBar from "renderer/components/plot/AreaChangeBar";
import SimpleGroupBar from "renderer/components/plot/SimpleGroupBar";
import SimpleStack from "renderer/components/plot/SimpleStack";
import KLinePlot from "renderer/components/plot/KlinePlot";
function Home() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <StockProceChange />
      <AreaChangeBar />
      <SimpleStack />
      <SimpleGroupBar />
      <KLinePlot />
    </div>
  );
}

export default function Screen() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
