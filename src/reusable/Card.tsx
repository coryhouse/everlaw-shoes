type CardProps = {
  /** Content to display inside the Card  */
  children: React.ReactNode;
};

export function Card(props: CardProps) {
  return (
    <div className="max-w-sm p-4 m-2 transition-colors bg-blue-100 border border-gray-400 rounded-lg shadow-lg hover:bg-indigo-600 hover:text-white">
      {props.children}
    </div>
  );
}
