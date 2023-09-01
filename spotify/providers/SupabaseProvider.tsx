"use client";

import { Database } from "@/types_db";
import React, { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

interface SupabaseProps {
  children: React.ReactNode;
}

const SupabaseProvider: React.FC<SupabaseProps> = ({ children }) => {
  const [supabaseClient] = useState(() => {
    return createClientComponentClient<Database>();
  });

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
};

export default SupabaseProvider;
