import {Hono} from "hono"
import {template} from "./template.ts"

const app = new Hono()

app.get("/", (c) => {
	return c.text("To begin, write a recipient name on a home param separated by a '-'; for example (john-doe)")
})

app.get("/:fullname", async (c) => {
	const name = c.req.param("fullname")
	const fullname = name.replaceAll('-', ' ')
	return c.html(template(fullname))
})

Bun.serve({
	port: process.env.PORT || 3000,
	fetch: app.fetch
})
