const form = document.querySelector("form");
const output = document.querySelector("pre > code");

function generateConfig() {
	const data = new FormData(form);
	let config = `prefix = "${data.get("prefix")}"\n`;

	const error_url = data.get("error_webhook");
	const log_level = data.get("log_level");

	if (error_url) {
		config += `error_url = "${error_url}"\n`;
	} else {
		config += '# error_url = "..."\n';
	}

	config += `log_level = ${log_level}\n\n`;
	config += "[database]\n";

	const database_type = data.get("database_type");
	const database_connection = data.get("database_connection");

	config += `type = "${database_type}"\n`;

	if (database_connection) {
		config += `connection = "${database_connection}"\n\n`;
	} else if (database_type === "postgres") {
		config += 'connection = "..." # you MUST change this\n\n';
	}

	if (data.get("enable_discord")) {
		config += "[plugins.discord]\n";

		const token = data.get("discord_token");

		if (token) {
			config += `token = "${token}"\n\n`;
		} else {
			config += 'token = "..." # you MUST change this\n\n';
		}
	}

	if (data.get("enable_guilded")) {
		config += "[plugins.guilded]\n";

		const token = data.get("guilded_token");

		if (token) {
			config += `token = "${token}"\n\n`;
		} else {
			config += 'token = "..." # you MUST change this\n\n';
		}
	}

	if (data.get("enable_stoat")) {
		config += "[plugins.revolt]\n";

		const token = data.get("stoat_token");

		if (token) {
			config += `token = "${token}"\n\n`;
		} else {
			config += 'token = "..." # you MUST change this\n\n';
		}
	}

	if (data.get("enable_telegram")) {
		config += "[plugins.telegram]\n";

		const token = data.get("telegram_token");

		if (token) {
			config += `token = "${token}"\n`;
		} else {
			config += 'token = "..." # you MUST change this\n';
		}

		const port = data.get("telegram_port");

		if (port) {
			config += `proxy_port = "${port}"\n`;
		} else {
			config += "proxy_port = 8080 # you MUST change this\n";
		}

		const url = data.get("telegram_url");

		if (url) {
			config += `proxy_url = "${url}"\n\n`;
		} else {
			config += 'proxy_url = "..." # you MUST change this\n\n';
		}
	}

	output.textContent = config.trim();
}

function handleToggles() {
	const data = new FormData(form);

	for (
		const [id, inputs] of Object.entries({
			"enable_discord": ["discord_token"],
			"enable_guilded": ["guilded_token"],
			"enable_stoat": ["stoat_token"],
			"enable_telegram": [
				"telegram_token",
				"telegram_port",
				"telegram_url",
			],
		})
	) {
		const enabled = data.get(id) == true;

		for (const input of inputs) {
			const element = document.getElementById(input);

			if (element) element.disabled = !enabled;
		}
	}
}

form.addEventListener("input", () => {
	handleToggles();
	generateConfig();
});

handleToggles();
generateConfig();
