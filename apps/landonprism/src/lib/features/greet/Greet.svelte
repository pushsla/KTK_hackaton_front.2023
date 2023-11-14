<!-- Copyright 2023 Svyatoslav Pushkarev
* This file contains code distributed as free (as in freedom) software / piece of code.
* you can redistribute and/or modify its content under terms of the GNU General Public license,
*    either version 3 of the License, or (at your option) any later version
* This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
*    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
* See the GNU General Public License for more details.
-->

<template>
    <article class="greet">
        <Cow />
        <Logo />
        <Counter deadlineTime={deadlineTime}/>
        <article class="greet__p">
            <span class="greet__p_ambule">{$_("landing.greet.desc.ambule1")}</span>
            <span class="greet__p_accent1">{$_("landing.greet.desc.accent1")}</span>
            <span class="greet__p_ambule">{$_("landing.greet.desc.ambule2")}</span>
            <span class="greet__p_accent2">{$_("landing.greet.desc.accent2")}</span>
            <span class="greet__p_ambule">{$_("landing.greet.desc.ambule3")}</span>
        </article>
    </article>
</template>

<script lang="ts">
    import {_} from "svelte-i18n"

    import Cow from "./components/Cow.svelte"
    import Logo from "./components/Logo.svelte"
    import Counter from "./components/Counter.svelte"

    export let deadlineTime: Date
</script>

<style lang="postcss">
    .greet{
        height: 90vh;
        width: 100vw;
        position: relative;
        padding: 5rem 0 0 0;
    }
    .greet__p{
        font-family: 'Roboto';
        font-size: 3rem;
        text-align: center;
        line-height: 4rem;
    }
    .greet__p_accent1{
        color: rgb(var(--color-error-400))
    }
    .greet__p_accent2{
        color: rgb(var(--color-primary-700))
    }
    .greet__p_ambule{

    }

    @media screen and (max-width: 1000px){
        .greet {
            padding: 1rem;
        }
        .greet__p{
            font-size: 2rem;
            text-align: left;
        }
    }
</style>
