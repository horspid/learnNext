import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getUsers() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users', {
		cache: 'no-store',
	});

	if (res.status === 404) return notFound();
	if (!res.ok) throw new Error('Failed to fetch users');
	return res.json();
}

const UserItem = ({ user }) => {
	return (
		<Link href={`/users/${user.id}`} className="item">
			<div>
				<div className="item-title">{`${user.id}. ${user.name}`}</div>
				<div className="item-sub">{user.email}</div>
			</div>
			<span aria-hidden></span>
		</Link>
	);
};

const UserPage = async () => {
	const users = await getUsers();
	console.log(users);

	return (
		<section className="content">
			<h2 className="section-title">Users</h2>
			<div className="users-list">
				{users.map((user) => (
					<UserItem user={user} key={user.id} />
				))}
			</div>
		</section>
	);
};

export default UserPage;
