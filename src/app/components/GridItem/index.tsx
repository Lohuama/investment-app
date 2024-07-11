export default function GridItem({ title, children }) {
    return (
      <div className="flex flex-col items-center justify-center p-4 border border-slate-900 rounded-xl h-[400px]">
        <h3 className="text-2x1 font-semibold text-white mb-4">{title}</h3>
        {children}
      </div>
    )
  }
  