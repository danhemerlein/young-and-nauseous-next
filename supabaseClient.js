import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hatryjubzrydfwcnitnj.supabase.co'
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
