import CreateInvestment from "./create-investiment/page";

export default function Home() {
  return (
    <div style={{ background: 'linear-gradient(to right, #e5f3e7, #ffffff)', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CreateInvestment />
    </div>
  );
}
