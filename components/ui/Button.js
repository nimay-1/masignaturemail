export default function Button({ children }) {
  return (
    <button
      className="bg-[var(--color-accent)] rounded-xl font-semibold text-[var(--color-primary)] p-4 transition-all duration-150 shadow-sm hover:shadow-lg hover:bg-[var(--color-accent-hover)] hover:cursor-pointer transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
    >
      {children}
    </button>
  );
}
