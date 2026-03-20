import { createHelloGreeting } from '@/lib/hello';

const PostExample = () => {
	const { message } = createHelloGreeting('Yurij');

	return <section className="content">{message && <p>{message}</p>}</section>;
};

export default PostExample;
