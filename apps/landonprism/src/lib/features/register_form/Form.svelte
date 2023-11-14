<!-- Copyright 2023 Svyatoslav Pushkarev
* This file contains code distributed as free (as in freedom) software / piece of code.
* you can redistribute and/or modify its content under terms of the GNU General Public license,
*    either version 3 of the License, or (at your option) any later version
* This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
*    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
* See the GNU General Public License for more details.
-->

<template>
    <section class="regform card" on:scroll={denyScroll}>
        <form class="form" action="/register" id="regform" method="POST">
            <label>
                <span>{$_("registerform.labels.name")}</span>
                <input type="text" class="input" name="name" bind:value={nameval}>
            </label>
            <label>
                <span>{$_("registerform.labels.lastname")}</span>
                <input type="text" class="input" name="lastname" bind:value={lastnameval}>
            </label>
            <label>
                <span>{$_("registerform.labels.birth")}</span>
                <input type="date" class="input" name="birth" bind:value={birthval}>
            </label>
            <label>
                <span>{$_("registerform.labels.region")}</span>
                <select class="select" size="4" name="region" id="regionsel" bind:value={regionval}>
                    {#each data.regions as reg}
                        <option value="{reg.id}">{reg.name}</option>
                    {/each}
                </select>
            </label>
            <label>
                <span>{$_("registerform.labels.contacttype")}</span>
                <select class="select" size="2" name="contact" id="regionsel" bind:value={contactval}>
                    {#each data.contacts as c}
                        <option value="{c.id}">{c.trait}</option>
                    {/each}
                </select>
            </label>
            <label>
                <span>{$_("registerform.labels.contact")}</span>
                <input type="text" class="input" name="contactData" bind:value={contactdataval}>
            </label>

            {#if !wantteam}
                <label>
                    <input type="checkbox" class="checkbox" bind:checked={selteam}>
                    <span>{$_("registerform.labels.hasteam")}</span>
                </label>
            {/if}

            {#if selteam}
                <section class="form__team">
                    <label>
                        <span>{$_("registerform.labels.teamsel")}</span>
                        <select class="select" size="5" name="selteam" id="regionsel" bind:value={teamval}>
                            {#each data.teams as t}
                                <option value="{t.id}">{t.name}</option>
                            {/each}
                        </select>
                    </label>
                    <label>
                        <span>{$_("registerform.labels.teamcode")}</span>
                        <input type="text" class="input" name="teamcode" bind:value={teamcodeval}>
                    </label>
                </section>
            {:else}
                <label>
                    <input type="checkbox" class="checkbox" bind:checked={wantteam}>
                    <span>{$_("registerform.labels.wantteam")}</span>
                </label>
            {/if}

            {#if wantteam}
                <section class="form_regteam">
                    <label>
                        <span>{$_("registerform.labels.teamname")}</span>
                        <input type="text" class="input" name="createteam" bind:value={createteamval}>
                        <span>{$_("registerform.labels.teamsizewarning")}</span>
                    </label>
                </section>
                <label>
                    <span>Это коды приглашения в Вашу команду. Сохраните их.</span>
                </label>
                {#each codes as t, i}
                    <input type="text" class="input" readonly value="{t}" name="code{i}">
                {/each}
            {/if}

            <div class="btnsubmit">
                {#if !enable}
                    <span class="card variant-ghost-error">
                        Все поля обязательны для заполнения
                    </span>
                {:else}
                    <button type="submit" form="regform" class="btn variant-filled-primary">
                        {$_("registerform.submit")}
                    </button>
                {/if}
            </div>
        </form>
    </section>
</template>

<script lang="ts">
    import {_} from "svelte-i18n"

    export let data: any

    let selteam: boolean = false
    let wantteam: boolean = false

    let nameval: string | null = null
    let lastnameval: string | null = null
    let birthval: string | null = null
    let regionval: string | null = null
    let contactval: string | null = null
    let contactdataval: string | null = null
    let teamval: string | null = null
    let teamcodeval: string | null = null
    let createteamval: string | null = null

    let enable: boolean = false

    $: {
        if (selteam) {
            wantteam = false
            createteamval = null
        }

        if (wantteam) {
            selteam = false
            teamval = null
            teamcodeval = null
        }
    }

    $: {
        nameval;
        lastnameval;
        birthval;
        regionval;
        contactval;
        contactdataval;
        teamval;
        teamcodeval;
        createteamval;
        if (nameval && lastnameval && birthval && regionval && contactdataval && contactval && ((teamval && teamcodeval) || createteamval)) enable = true
        else enable = false
    }

    let codes = []

    for (let i = 0; i < 6; i++){
        codes.push(crypto.randomUUID())
    }

    const denyScroll = (e: any) => {
        e.stopPropagation()
    }
</script>

<style lang="postcss">
    .regform {
        margin: 2rem;
        padding: 2rem;
    }
    .form{
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .btnsumbit {
        display: flex;
        justify-content: center;
        width: 100%;
    }
    .btn {
        font-family: 'LCD', sans;
        font-size: 1.3rem;
        font-weight: 500;
        max-width: 30%;
    }
</style>
