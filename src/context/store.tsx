/* eslint-disable @typescript-eslint/no-explicit-any */
import {  useState } from "react";
import { createClient } from "@supabase/supabase-js";
import React from "react";

export const AppContext = React.createContext({
  supabase: {},
});

interface AppContextProviderProps extends React.PropsWithChildren {}




export const AppContextProvider: React.FunctionComponent<
  AppContextProviderProps
> = ({ children }) => {
  const [supabase, _ ] = useState({
    supabase: createClient('https://xyzcompany.supabase.co', 'public-anon-key')
  });
  return <AppContext.Provider value={{supabase}}>{children}</AppContext.Provider>;
};


