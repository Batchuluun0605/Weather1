import Weather from "@/components/Weather";

export default function Home() {
  return (
    <main className="w-fit h-screen bg-indigo-800 bg-gradient-to-t mx-auto mt-10 rounded-xl px-32 py-10">
      <div className="flex justify-center m-0">
        <Weather />
      </div>
    </main>
  );
}
