import React from "react";
import { Sidebar } from "./Sidebar";

export const JournalScreen = () => {
  return (
    <div className="jorunal__main-content">
      <Sidebar />

      <main>
        <h1>Main content</h1>
      </main>
    </div>
  );
};
