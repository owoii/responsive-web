// 一条线
export function Line({ className }: { className?: string }) {
  const baseStyle = "w-[150px] h-1 bg-red-400 m5-2 mx-auto rounded-sm ";
  return <div className={baseStyle + className} />;
}
// 红色按钮
const baseButtonStyle =
  "py-2 px-9 bg-red-400 rounded-full  duration-500 ease hover:scale-110 hover:shadow-md hover:shadow-red-400 ";
export function OButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <button className={baseButtonStyle + className}>{children}</button>;
}
