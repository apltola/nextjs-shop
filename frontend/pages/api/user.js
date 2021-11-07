import { fetchJson } from '../../lib/api';
const { CMS_URL } = process.env;

async function handleUser(req, res) {
  const { jwt } = req.cookies;
  if (!jwt) return res.status(401).end();

  try {
    const user = await fetchJson(`${CMS_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    res.status(200).json({
      id: user.id,
      name: user.username,
    });
  } catch (e) {
    console.log(e);
    res.status(401).end();
  }
}

export default handleUser;
