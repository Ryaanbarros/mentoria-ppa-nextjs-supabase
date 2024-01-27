'use client'

import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

export default function Page() {
  const [empresas, setEmpresas] = useState<any[] | null>(null)
  const supabase = createClient()

  useEffect(() => {
    getEmpresas()
  }, [])

  
  async function getEmpresas() {
    const { data } = await supabase.from("empresas").select();
    setEmpresas(data);
  }

  // return <pre>{JSON.stringify(empresas, null, 2)}</pre>
  return (
    <ul>
      {empresas.map((empresas) => (
        <li key={empresas.nome}>{empresas.nome}</li>
      ))}
    </ul>
  );
}