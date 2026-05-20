export default function AnnouncementBar() {
  return (
    <div
      style={{ background: '#3B5240', color: 'rgba(255,255,255,0.92)' }}
      className="text-center px-8 py-[10px] text-[0.78rem] font-normal tracking-[0.04em] flex items-center justify-center gap-8 flex-wrap"
    >
      <strong className="font-medium">🟢 Now delivering to KPHB, Kukatpally &amp; HiTech City</strong>
      <span style={{ opacity: 0.55 }}>|</span>
      Free delivery on your first order · Use code <strong className="font-medium">FRESH50</strong>
      <span style={{ opacity: 0.55 }}>|</span>
      Order before 8 PM for next-day delivery
    </div>
  );
}
