import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data: tasks } = await supabase.from('tasks').select()

  return <pre>{JSON.stringify(tasks, null, 2)}</pre>
}