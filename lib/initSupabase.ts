// import { createClient } from '@supabase/supabase-js'
// import { Database } from './schema'

// export const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// )


import { createClient } from '@supabase/supabase-js';
import { Database } from './schema';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://gggpxtqdfvnztcejfheu.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdnZ3B4dHFkZnZuenRjZWpmaGV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyNzkxMTYsImV4cCI6MTk5ODg1NTExNn0.tPfwPdg7ElEN4qxc5vxT5Sg-aimqe32dD4DUOZrK8yY';

export const supabase = createClient(supabaseUrl, supabaseKey);
