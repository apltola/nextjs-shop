import cookie from 'cookie';
import { fetchJson } from '../../lib/api';
const CMS_URL = process.env.CMS_URL;

async function handleLogin(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end();
  }

  const { email, password } = req.body;
  try {
    const { jwt, user } = await fetchJson(`${CMS_URL}/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ identifier: email, password }),
    });
    console.log({ jwt, user });
    res
      .status(200)
      .setHeader(
        'Set-Cookie',
        cookie.serialize('jwt', jwt, {
          path: '/api',
          httpOnly: true,
        })
      )
      .json({
        id: user.id,
        name: user.username,
      });
  } catch (e) {
    console.log(e);
    res.status(401).end();
  }
}

export default handleLogin;
