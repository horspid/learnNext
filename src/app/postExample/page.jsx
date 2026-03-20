async function makePostRequest(params) {
	const result = await fetch(`${process.env.NEXT_URL}/api/hello`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify({ name: 'Yurij' }),
	});

	const data = await result.json();

	return data;
}

const PostExample = async () => {
	const { message } = await makePostRequest();

	return <section className="content">{message && <p>{message}</p>}</section>;
};

export default PostExample;
