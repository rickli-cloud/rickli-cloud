<script lang="ts">
  import LoaderCircle from "lucide-svelte/icons/loader-circle";
  import type { ComponentProps } from "svelte";

  interface $$Props extends ComponentProps<LoaderCircle> {}
</script>

<LoaderCircle {...$$restProps} class="animate-spin {$$restProps.class}" />
