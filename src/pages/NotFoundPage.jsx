import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="container-xl py-5">
      <h1 className="h3">Page not found</h1>
      <p>This page doesn&apos;t exist. <Link to="/">Go back to rewards</Link>.</p>
    </div>
  );
}
