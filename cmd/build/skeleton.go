package main

func getFirstSkeleton(folder, title, description, icon, image string) string {
	return `
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset='utf-8'>
	<title>` + title + `</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="` + description + `">
	<link rel="stylesheet" href="/assets/inter/inter.css">
	<link rel="stylesheet" href="/assets/cascadia/cascadia.css">
	<link rel="stylesheet" href="/assets/style.css">
	<link rel="icon" href="/assets/` + icon + `">
	<meta property="og:title" content="` + title + `">
	<meta property="og:image" content="https://williamhorning.eu.org/assets/` + image + `">
	<meta property="og:description" content="` + description + `">
</head>

<body>` + getNav(folder)
}

func getSecondSkeleton() string {
	return `
	</main>
	<footer aria-label="jersey site footer">
		<ul aria-label="jersey site footer link list">
			<li aria-label="jersey site"><a href="/"><img alt="jersey" src="/assets/jersey.svg"></a></li>
			<li aria-label="pride flag"><img alt="pride flag" src="/assets/pride.svg"></li>
			<li aria-label="gay pride flag"><img alt="gay pride flag" src="/assets/gay.svg"></li>
			<li aria-label="github"><a href="https://github.com/williamhorning/lightning"><img alt="github"
						src="/assets/github.svg"></a></li>
			<li aria-label="jsr"><a href="https://jsr.io/@jersey"><img alt="jsr" src="/assets/jsr.svg"></a></li>
			<li aria-label="bluesky"><a href="https://bsky.app/profile/williamhorning.bsky.social"><img alt="bluesky"
						src="/assets/bluesky.svg"></a></li>
			<li aria-label="discord"><a href="/go/discord"><img alt="discord" src="/assets/discord.svg"></a>
			</li>
			<li aria-label="guilded"><a href="/go/guilded"><img alt="guilded" src="/assets/guilded.svg"></a>
			</li>
			<li aria-label="revolt"><a href="/go/revolt"><img alt="revolt" src="/assets/revolt.svg"></a></li>
			<li aria-label="telegram"><a href="/go/telegram"><img alt="telegram" src="/assets/telegram.svg"></a></li>
		</ul>
		<p aria-label="disclaimer">this site doesn't use cookies. all content is available under the MIT license.
			made with ❤️ by jersey</p>
	</footer>
</body>

</html>
`
}

func getNav(folder string) string {
	switch folder {
	case "bolt":
		return boltNav
	case "lightning":
		return lightningNav
	default:
		return stdNav
	}
}

const boltNav = `	<nav aria-label="main navigation">
		<ul aria-label="main navigation list">
			<li aria-label="bolt"><a href="/bolt"><img alt="logo" src="/assets/bolt.png">bolt</a></li>
			<span>
				<li aria-label="docs"><a href="/lightning/bridge/users">docs</a></li>
				<li aria-label="legal"><a href="/bolt/legal">legal</a></li>
				<li aria-label="github"><a href="https://github.com/williamhorning/lightning"><img alt="github"
							src="/assets/github.svg"></a></li>
				<li aria-label="discord"><a href="/bolt/invite/discord"><img alt="discord"
							src="/assets/discord.svg"></a>
				</li>
				<li aria-label="guilded"><a href="/bolt/invite/guilded"><img alt="guilded"
							src="/assets/guilded.svg"></a>
				</li>
				<li aria-label="revolt"><a href="/bolt/invite/revolt"><img alt="revolt" src="/assets/revolt.svg"></a>
				</li>
				<li aria-label="telegram"><a href="/bolt/invite/telegram"><img alt="telegram"
							src="/assets/telegram.svg"></a></li>
			</span>
		</ul>
	</nav>
	<main class="bolt">
`

const lightningNav = `	<nav aria-label="main navigation">
		<ul aria-label="main navigation list">
			<li aria-label="lightning"><a href="/lightning"><img alt="logo" src="/assets/lightning.png">lightning</a>
			</li>
			<span>
				<li aria-label="bridge"><a href="/lightning/bridge">bridge</a></li>
				<li aria-label="framework"><a href="/lightning/framework">framework</a></li>
				<li aria-label="github"><a href="https://github.com/williamhorning/lightning"><img alt="github"
							src="/assets/github.svg"></a></li>
				<li aria-label="discord"><a href="/bolt/support/discord"><img alt="discord"
							src="/assets/discord.svg"></a>
				</li>
				<li aria-label="guilded"><a href="/bolt/support/guilded"><img alt="guilded"
							src="/assets/guilded.svg"></a>
				</li>
				<li aria-label="revolt"><a href="/bolt/support/revolt"><img alt="revolt" src="/assets/revolt.svg"></a>
				</li>
				<li aria-label="telegram"><a href="/bolt/support/telegram"><img alt="telegram"
							src="/assets/telegram.svg"></a></li>
			</span>
		</ul>
	</nav>
	<main class="bolt docs">
`

const stdNav = `	<nav aria-label="main navigation">
		<ul aria-label="main navigation list">
			<li aria-label="jersey"><a href="/"><img alt="logo" src="/assets/jersey.svg">jersey</a></li>
			<span>
				<li aria-label="blog"><a href="/blog">blog</a></li>
				<li aria-label="bolt"><a href="/bolt">bolt</a></li>
				<li aria-label="lightning"><a href="/lightning">lightning</a></li>
			</span>
		</ul>
	</nav>
	<main>
`
