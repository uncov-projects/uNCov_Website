import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ylcyxaoizklsajcyyqki.supabase.co" // Found in Supabase Dashboard > Settings > API
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsY3l4YW9pemtsc2FqY3l5cWtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2NTA3NzYsImV4cCI6MjA3MDIyNjc3Nn0.NoEO73IqcldJ4e8b9Sy7cpJNZeRNTBtnlowyMtKYt1o" // Found in Supabase Dashboard > Settings > API

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
