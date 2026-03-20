import PublicRouther from "/src/modules/routher/PublicRouther.jsx"
import MonsterRouther from "/src/modules/routher/MonsterRouther.jsx"
import AuthRouther from "/src/modules/routher/AuthRouther.jsx"

export default function App() {
  const activity = true;
  const session = true;

  if (activity) return <MonsterRouther />;
  if (session) return <AuthRouther />;
  return <PublicRouther />;
}
