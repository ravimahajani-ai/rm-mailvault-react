const API_ROOT = '/mv-api.php';

export async function apiCall(action, params = {}, method = 'POST') {
  let opts = { method, headers: { 'Content-Type': 'application/json' } };
  let url = API_ROOT;

  if (method === 'POST') {
    opts.body = JSON.stringify({ ...params, action });
  } else {
    url += `?action=${action}&${new URLSearchParams(params)}`;
  }

  const res = await fetch(url, opts);
  const json = await res.json();
  if (!json.ok) throw new Error(json.error || 'API error');
  return json;
}