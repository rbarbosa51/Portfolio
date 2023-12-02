export default function HtmlLoading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-blue-400 to-pink-400">
      <progress className="neonShadow progress w-[50%] mx-auto"></progress>
    </div>
  );
}
