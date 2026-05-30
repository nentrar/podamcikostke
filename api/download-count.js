export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const { scenario, action } = req.query;
  if (!scenario) return res.status(400).json({ error: 'Missing scenario' });

  const base = `${process.env.SUPABASE_URL}/rest/v1/downloads`;
  const headers = {
    'apikey': process.env.SUPABASE_ANON_KEY,
    'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY}`,
    'Content-Type': 'application/json',
  };

  if (action === 'increment') {
    // Read current count
    const getRes = await fetch(`${base}?scenario=eq.${scenario}&select=count`, { headers });
    const [row] = await getRes.json();
    const newCount = (row?.count ?? 0) + 1;

    // Write new count
    await fetch(`${base}?scenario=eq.${scenario}`, {
      method: 'PATCH',
      headers: { ...headers, 'Prefer': 'return=minimal' },
      body: JSON.stringify({ count: newCount }),
    });

    return res.status(200).json({ count: newCount });
  }

  // Just read
  const getRes = await fetch(`${base}?scenario=eq.${scenario}&select=count`, { headers });
  const [row] = await getRes.json();
  return res.status(200).json({ count: row?.count ?? 0 });
}