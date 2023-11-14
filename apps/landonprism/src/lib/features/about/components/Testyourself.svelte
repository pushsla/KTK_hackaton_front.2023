<!-- Copyright 2023 Svyatoslav Pushkarev
* This file contains code distributed as free (as in freedom) software / piece of code.
* you can redistribute and/or modify its content under terms of the GNU General Public license,
*    either version 3 of the License, or (at your option) any later version
* This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
*    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
* See the GNU General Public License for more details.
-->

<template>
    <section class="testyou">
        <ul class="ul">
            <li class="li">
                <span>
                    <span class="preambule">5</span>
                    <span class="ambule">человек -</span>
                </span>
                <span class="ambule">собери команду</span>
            </li>
            <li class="li">
                <span>
                    <span class="preambule">2</span>
                    <span class="ambule">минуты -</span>
                </span>
                <span class="ambule">заполни анкету</span>
            </li>
        </ul>
        <div class="targets">
            <button class="btn variant-ringed-secondary">{$_("landing.common.btnask")}</button>
            <a href="/register" class="btn variant-ringed-primary">{$_("landing.common.btnregister_alt")}</a>
        </div>
    </section>
</template>

<script lang="ts">
    import {_} from "svelte-i18n"
</script>

<style lang="postcss">
    .targets {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 2rem;
    }
    .testyou {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 5rem;
        height: 100%;
    }
    .ul{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: .3rem;
    }
    .li {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 2fr 5fr;
    }
    .preambule{
        color: rgb(var(--color-primary-500));
        text-transform: uppercase;
        font-size: 1.2rem;
        margin-right: .3rem;
    }
    .ambule{
        text-transform: uppercase;
        font-size: 1.2rem;
    }
    .btn {
        font-family: 'LCD', sans;
        color: rgb(var(--color-primary-500))
    }
</style>
