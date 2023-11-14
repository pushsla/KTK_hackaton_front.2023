<template>
    <Form data={data}/>
</template>

<script lang="ts">
    import Form from "$lib/features/register_form/Form.svelte"
    import type { PageData } from "./$types";
	export let data: PageData;
</script>

<style lang="postcss">

</style>
