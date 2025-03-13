"use client";

import React, { useState } from "react";
import SearchSection from "./_components/SearchSection";
import TemplateListSection from "./_components/TemplateListSection";

function DashboardPage() {
  const [userSearchInput, setUserSearchInput] = useState<string>(""); // ✅ Default empty string

  return (
    <div>
      {/* SEARCH SECTION */}
      <SearchSection
        onSearchInput={(value: string) => setUserSearchInput(value)}
      />

      {/* TEMPLATE LIST SECTION */}
      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  );
}

export default DashboardPage;
