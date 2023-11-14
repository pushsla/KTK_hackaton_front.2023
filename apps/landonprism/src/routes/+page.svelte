<!-- Copyright 2023 Svyatoslav Pushkarev
* This file contains code distributed as free (as in freedom) software / piece of code.
* you can redistribute and/or modify its content under terms of the GNU Affero General Public license,
*    either version 3 of the License, or (at your option) any later version
* This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
*    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
* See the GNU General Public License for more details.
-->

<template>
	<Greet deadlineTime={data.stats.registerDeadline} />
	<About stats={data.stats} speakers={data.speakers}/>
	<Program programs={data.programs}/>
	<Partners />
</template>


<script lang="ts">
    import Greet from "$lib/features/greet/Greet.svelte"
	import About from "$lib/features/about/About.svelte"
	import Program from "$lib/features/program/Program.svelte"
	import Partners from "$lib/features/partners/Partners.svelte"
	import {_} from "svelte-i18n"

	import type { PageData } from "./$types";
	export let data: PageData;


	import Form from "$lib/features/register_form/Form.svelte"
</script>
