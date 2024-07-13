import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://nsksibfsdqfezuvhdlqt.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5za3NpYmZzZHFmZXp1dmhkbHF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA4NDQ2MDgsImV4cCI6MjAzNjQyMDYwOH0.kCu63sENFi3tdLq_oXNaY_ePVewl4YAAwLh8sHQnlRM"
);
