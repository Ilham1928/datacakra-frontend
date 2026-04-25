const Toast = ({ title, detail, show }) => {
  return (
    <div
      className={`fixed bottom-7 left-1/2 -translate-x-1/2 z-9999 pointer-events-none
      bg-[#C8FF00] text-[#080808] font-[Syne,sans-serif]
      px-5 py-3 rounded-xl
      transition-all duration-350 ease-[cubic-bezier(0.34,1.56,0.64,1)]
      ${show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      <div className="font-bold text-[13px]">{title}</div>
      {detail && <div className="text-[11px] opacity-70 mt-1">{detail}</div>}
    </div>
  );
};

export default Toast;
