// UseSupabase.js
import { createClient } from "@supabase/supabase-js";

// these can come from an environment variable if desired
// not required however as they are 100% exposed on the client side anyway 
// and that's ok, Supabase expects this (security is provided by Row Level Security)
const supabaseUrl = "https://vjvnyujhzqdnczybxrou.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqdm55dWpoenFkbmN6eWJ4cm91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjcyMDc2NzQsImV4cCI6MTk4Mjc4MzY3NH0.K9oXixQ5KaUMMoKzoxLNT08te_iMobYlRHnJhduYkno";

// setup client
const supabase = createClient(supabaseUrl, supabaseKey);

// expose supabase client
export default function useSupabase() {
  return { supabase };
}