<script>
    import {Label, Input, Select, Button, Modal} from 'flowbite-svelte'

    let createModal = false;
</script>

<Button class="bg-purple-500 shadow-purple-500/50 rounded-lg shadow-md hover:bg-purple-700"
        on:click={() => createModal = true}>新規作成
</Button>
<Modal class="w-screen" title="入庫車新規作成" bind:open={createModal} autoclose>
    <form class="text-left">
        <div class="mb-6">
            <Label for="entry_person" class="mb-2">記入者</Label>
            <Select placeholder="選択してください" name="entry_person">
                <option value="カクタナオミ">カクタナオミ</option>
                <option value="カクタサトミ">カクタサトミ</option>
            </Select>
        </div>
        <div class="mb-6">
            <Label for="email" class="mb-2">得意先名</Label>
            <Input type="text" id="customer" placeholder="田所カーショップ" required/>
        </div>
        <div class="mb-6">
            <Label for="receipt_date" class="mb-2">入庫日</Label>
            <Input type="date" id="receipt_date" placeholder="•••••••••" required/>
        </div>
        <div class="mb-6">
            <Label for="delivery_date" class="mb-2">出庫日</Label>
            <Input type="date" id="delivery_date" placeholder="•••••••••" required/>
        </div>
        <div class="mb-6">
            <Label for="car_model" class="mb-2">車種</Label>
            <Input type="text" id="car_model" placeholder="トヨタ プリウス" required/>
        </div>
        <div class="mb-6">
            <Label for="plate_no" class="mb-2">プレートNo</Label>
            <Input type="text" id="plate_no" placeholder="大阪559 さ 20-25" required/>
        </div>
        <div class="mb-6">
            <Label for="repair_point" class="mb-2">修理箇所</Label>
            <Input type="text" id="repair_point" placeholder="右フロントドア" required/>
        </div>
        <Button outline color="purple" class="w-full" on:click={() => alert('Handle "success"')}>作成する</Button>
    </form>
</Modal>

