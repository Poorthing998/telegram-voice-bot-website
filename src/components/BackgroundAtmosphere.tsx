export default function BackgroundAtmosphere() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-20%] left-[-15%] w-[800px] h-[800px] bg-mint/5 rounded-full blur-[180px] animate-float-1" />
      <div className="absolute bottom-[0%] right-[-10%] w-[600px] h-[600px] bg-cyan/[0.04] rounded-full blur-[160px] animate-float-2" />
      <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-warm/[0.03] rounded-full blur-[140px] animate-float-3" />
      <div className="absolute inset-0 noise-overlay z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base/50 to-base" />
    </div>
  );
}
