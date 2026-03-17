import Link from 'next/link';

const Navigation = () => {
	return (
		<nav className="navigation">
			<Link href={'/'} className="nav-link">
				Main
			</Link>
			<Link href={'/about'} className="nav-link">
				About
			</Link>
			<Link href={'/users'} className="nav-link">
				Users
			</Link>
			<Link href={'/contacts'} className="nav-link">
				Contacts
			</Link>
		</nav>
	);
};

export default Navigation;
