<script lang="ts">
	let initialHistory = [
		{ output: ["whoami", "Eugene / DevOps Engineer"] },
	];
	let history: { output: string[] }[] = initialHistory;
	let currentCommand = "";
	let commandHistory: string[] = [];
	let historyIndex = -1;

	const processCommand = () => {
		const trimmedCommand = currentCommand.trim();
		if (trimmedCommand.toLowerCase() === "clear") {
			history = [];
		} else if (trimmedCommand.toLowerCase() === "pwd") {
			const output = [`${trimmedCommand}`, "/home/slidxr"];
			history = [...history, { output: output }];
		} else if (trimmedCommand.toLowerCase() === "whoami") {
			const output = [
				`${trimmedCommand}`,
				"you have to find out",
			];
			history = [...history, { output: output }];
			commandHistory.unshift(trimmedCommand);
		} else if (trimmedCommand.toLowerCase().startsWith("cd")) {
			handleCdCommand(trimmedCommand);
		} else if (trimmedCommand !== "") {
			const output = [
				`${trimmedCommand}`,
				`${trimmedCommand}: command not found`,
			];
			history = [
				...history,
				{
					output: output,
				},
			];
		}

		commandHistory.unshift(trimmedCommand);
		currentCommand = "";
		historyIndex = -1;
	};

	const handleCdCommand = (cdCommand: string) => {
		const path = cdCommand.slice(2).trim(); 
		if (path === "projects" || path === "projects/") {
			window.open(`/projects`, "_blank");
			history = [...history, { output: [`${cdCommand}`] }];
		} else if (path === "") {
			history = [
				...history,
				{
					output: [`${cdCommand}`, ``],
				},
			];
		} else {
			history = [
				...history,
				{
					output: [
						`${cdCommand}`,
						`cd: ${path}: No such file or directory`,
					],
				},
			];
		}
	};

	const handleMove = (direction: "up" | "down") => {
		if (
			direction === "up" &&
			historyIndex < commandHistory.length - 1
		) {
			historyIndex++;
			currentCommand = commandHistory[historyIndex];
		} else if (direction === "down" && historyIndex > 0) {
			historyIndex--;
			currentCommand = commandHistory[historyIndex];
		} else if (direction === "down" && historyIndex === 0) {
			historyIndex--;
			currentCommand = "";
		}
	};
</script>


<h1 class="flex justify-center text-6xl font-pixel">slidxr</h1>
<br />
<div class="mt-8 overflow-auto align-left">
	{#each history as { output }}
		{#each output as line}
			{#if line === output[0]}
				<p>
					<span class="text-accent"> $ </span>
					{line}
				</p>
			{:else}
				<p class="command">
					{line}
				</p>
			{/if}
		{/each}
	{/each}

	<div class="input">
		<span class="text-accent">$ </span>
		<!-- svelte-ignore a11y-autofocus -->
		<input
			maxlength="12"
			bind:value={currentCommand}
			on:keydown={(e) =>
				e.key === "Enter" && processCommand()}
			on:keydown={(e) =>
				e.key === "ArrowUp" && handleMove("up")}
			on:keydown={(e) =>
				e.key === "ArrowDown" && handleMove("down")}
			class="bg-black focus:outline-none"
			autofocus
		/>
	</div>
</div>
