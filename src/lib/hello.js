export function getHelloMessage(params) {
	return { message: 'hello, from shared module API' };
}

export function createHelloGreeting(name) {
	return { message: `Hello, ${name} from shared module POST` };
}
