import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://ksfvwrvgoailedftgigm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzZnZ3cnZnb2FpbGVkZnRnaWdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwNzAzODYsImV4cCI6MjAxNDY0NjM4Nn0.SxSSJLdSLHqvRq9EN6qceAhOaCsHvA_WS5Ki_L-QKGA';

export const supabase = createClient(supabaseUrl, supabaseKey);