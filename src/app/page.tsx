"use client";
import Game from "./components/Game";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 gap-4">
      <h1>Tic Tac Toe Game Exercise with Nextjs</h1>
      <Game />
    </main>
  );
}
