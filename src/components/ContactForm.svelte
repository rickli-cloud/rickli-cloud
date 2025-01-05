<script lang="ts">
  import { Textarea } from "$lib/components/ui/textarea";
  import { Button } from "$lib/components/ui/button/";
  import { Label } from "$lib/components/ui/label";
  import { Input } from "$lib/components/ui/input";
  import { onMount } from "svelte";

  let { id } = $props();

  const formData = $state({
    subject: "",
    body: "",
  });

  function submit(ev: SubmitEvent) {
    ev.preventDefault();
    console.debug("SUBMIT");
    alert(1);
  }

  onMount(() => {
    console.debug("mount");
  });
</script>

<form {id} class="space-y-6" onsubmit={submit}>
  <div class="space-y-2">
    <Label for="subject" class="star-note">Title</Label>
    <Input name="subject" id="subject" required bind:value={formData.subject} />
  </div>

  <div class="space-y-2">
    <Label for="body" class="star-note">Message</Label>
    <Textarea
      name="body"
      id="body"
      class="h-64"
      required
      bind:value={formData.body}
    />
  </div>

  <div class="flex gap-1.5 justify-end items-center">
    <Button variant="outline" class="w-24" type="submit">Submit</Button>
  </div>
</form>
