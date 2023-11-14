<!-- Copyright 2023 Svyatoslav Pushkarev
* This file contains code distributed as free (as in freedom) software / piece of code.
* you can redistribute and/or modify its content under terms of the GNU General Public license,
*    either version 3 of the License, or (at your option) any later version
* This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
*    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
* See the GNU General Public License for more details.
-->


<template>
    <ul class="ul">
        <li class="li">
            <span class="ambule">{$_("landing.about.windows.tasks.text.1")}</span>
        </li>
        <li class="li">
            <span class="ambule">{$_("landing.about.windows.tasks.text.2")}</span>
        </li>
        <li class="li">
            <span class="ambule">{$_("landing.about.windows.tasks.text.3")}</span>
        </li>
        <li class="li">
            <span class="ambule">{$_("landing.about.windows.tasks.text.4")}</span>
        </li>
    </ul>
</template>

<script lang="ts">
    import {_} from "svelte-i18n"

</script>

<style lang="postcss">
    .ul{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: .3rem;
    }
    .li {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
    }
    .preambule{
        display: none;
    }
    .ambule{
        text-transform: uppercase;
        font-size: 1.2rem;
    }
</style>
