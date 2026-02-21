"use client";

import { useEffect } from "react";
import "../lib/firebase"; // Just importing initializes the SDK

export function FirebaseAnalytics() {
  useEffect(() => {
    // This empty effect ensures we run on the client,
    // and importing the file resolves the analytics promise
  }, []);

  return null;
}
