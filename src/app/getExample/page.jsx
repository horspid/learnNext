import ButtonGetRequest from '@/components/ButtonGetRequest';

async function getMessageFromAPI() {
	const res = await fetch('http://localhost:3000/api/hello');

	return res.json();
}

const GetExample = async () => {
	const { message } = await getMessageFromAPI();

	return (
		<section className="content">
			<h1>Get Request</h1>
			{message && <p>{message}</p>}
			<ButtonGetRequest />
		</section>
	);
};

export default GetExample;
