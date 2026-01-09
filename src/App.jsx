import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Suspense fallback={<div className="loading">Loading...</div>}>
      <Home />
    </Suspense>
  );
}

export default App;
