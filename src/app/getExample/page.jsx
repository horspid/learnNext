import ButtonGetRequest from '@/components/ButtonGetRequest';
import { getHelloMessage } from '@/lib/hello';

const GetExample = () => {
	const { message } = getHelloMessage();

	return (
		<section className="content">
			<h1>Get Request</h1>
			{message && <p>{message}</p>}
			<ButtonGetRequest />
		</section>
	);
};

export default GetExample;
