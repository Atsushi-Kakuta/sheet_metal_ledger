<script>
    import Button from "./Button.svelte";
</script>

<table class="min-w-full hover:bg-gray-400">
    <thead class="bg-sky-500 hover:bg-sky-700">
    <tr>
        <th scope="col"
            class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
            No
        </th>
        <th scope="col"
            class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
            得意先名
        </th>
        <th scope="col"
            class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
            入庫日
        </th>
        <th scope="col"
            class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
            出庫日
        </th>
        <th scope="col"
            class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
            車種
        </th>
        <th scope="col"
            class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
            プレートNo
        </th>
        <th scope="col"
            class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
            修理箇所
        </th>

        <th scope="col"
            class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
        </th>
    </tr>
    </thead>
    <tbody>
    <tr class="bg-white hover:bg-stone-200">
        <td class="px-5 py-5 text-sm border-b border-gray-200">
            <p class=" text-gray-900 whitespace-no-wrap">
                1
            </p>
        </td>
        <td class="px-5 py-5 text-sm border-b border-gray-200">
            <p class="text-gray-900 whitespace-no-wrap">
                Admin
            </p>
        </td>
        <td class="px-5 py-5 text-sm border-b border-gray-200">
            <p class="text-gray-900 whitespace-no-wrap">
                12/09/2020
            </p>
        </td>
        <td class="px-5 py-5 text-sm border-b border-gray-200">
            <p class="text-gray-900 whitespace-no-wrap">
                12/09/2020
            </p>
        </td>
        <td class="px-5 py-5 text-sm border-b border-gray-200">
            <p class="text-gray-900 whitespace-no-wrap">
                12/09/2020
            </p>
        </td>
        <td class="px-5 py-5 text-sm border-b border-gray-200">
            <p class="text-gray-900 whitespace-no-wrap">
                1111111
            </p>
        </td>
        <td class="px-5 py-5 text-sm border-b border-gray-200">
            <p class="text-gray-900 whitespace-no-wrap">
                rererere
            </p>
        </td>
        <td class="px-5 py-5 text-sm border-b border-gray-200">
            <Button kind="Edit" textContent="編集"/>
        </td>
    </tr>
    </tbody>
</table>
