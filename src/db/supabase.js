const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

let supabase = null;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(`[${new Date().toISOString()}] Missing Supabase env vars — DB features will not work.`);
} else {
  supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false }
  });
}

module.exports = { supabase };
