export default function Button({
  label = 'Button',
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="rounded px-4 py-2 text-indigo-500 border border-indigo-500 font-medium uppercase text-sm tracking-wide w-full hover:bg-indigo-500 hover:text-slate-100 transition-all">
      {label}
    </button>
  );
}
