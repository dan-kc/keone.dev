import Navbar from "@components/Navbar";

interface Props {
  path: string;
}

export default function Header({ path }: Props) {
  return (
    <header>
      <Navbar path={path} />
    </header>
  );
}
