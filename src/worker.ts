export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const authResponse = await env.FOO.fetch(request.clone());
		return new Response('Hello World!');
	},
};
