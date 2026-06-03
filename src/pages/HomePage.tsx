/**
 * HomePage route entry — re-exports the composed App as a named component
 * so a future router (React Router, TanStack Router, etc.) can import it
 * without restructuring. Kept as a thin shim to avoid orphan files while
 * leaving room for route-level data loaders, metadata, or layouts later.
 */
import App from '../App';

export const HomePage = App;
export default HomePage;
