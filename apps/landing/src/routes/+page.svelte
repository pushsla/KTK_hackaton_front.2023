<!-- Copyright 2023 Svyatoslav Pushkarev
* This file contains code distributed as free (as in freedom) software / piece of code.
* you can redistribute and/or modify its content under terms of the GNU Affero General Public license,
*    either version 3 of the License, or (at your option) any later version
* This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
*    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
* See the GNU General Public License for more details.
-->

<template>
	<div class="container h-full mx-auto flex justify-center items-center">
		<div class="space-y-5">
			<h1 class="h1">{$_("testMessage")}</h1>
			<p>Start by exploring:</p>
			<ul>
				<li><code class="code">/src/routes/+layout.svelte</code> - barebones layout</li>
				<li><code class="code">/src/app.postcss</code> - app wide css</li>
				<li>
					<code class="code">/src/routes/+page.svelte</code> - this page, you can replace the contents
				</li>
			</ul>
		</div>
	</div>
</template>


<script lang="ts">
	import {_} from "svelte-i18n"
</script>
