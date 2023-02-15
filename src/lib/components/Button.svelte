<script>
    export let textContent;
    export let kind;
</script>

{#if kind === "Filter"}
    <button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-500 shadow-purple-500/50 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
            type="submit">
        {textContent}
    </button>
{/if}
<!--{#if kind === "Create"}-->
<!--    <button data-modal-target="createModal" data-modal-toggle="createModal" class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-500 shadow-purple-500/50 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"-->
<!--            type="button">-->
<!--        {textContent}-->
<!--    </button>-->
<!--{/if}-->
{#if kind === "Edit"}
    <button class="shadow-lg bg-purple-500 shadow-purple-500/50 px-4 hover:bg-purple-700 text-white rounded py-2">{textContent}</button>
{/if}
