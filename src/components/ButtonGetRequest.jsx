'use client';

async function getMessageFromAPI() {
	const res = await fetch(`/api/hello`);

	return res.json();
}

const ButtonGetRequest = () => {
	const onClickHandler = async () => {
		const { message } = await getMessageFromAPI();
		alert(message);
	};
	return (
		<button onClick={() => onClickHandler()} className="btn btn-ghost">
			Make get request from client
		</button>
	);
};

export default ButtonGetRequest;
