<script lang="ts">
  import LanguageColors from "language-colors";

  interface Repo {
    author: string;
    name: string;
    description: string;
    language: string;
    stars: number;
    forks: number;
  }

  let props: { repos: Repo[] | undefined } = $props();
  const { repos } = props;
</script>

<ul
  class="grid gap-2.5 overflow-x-scroll justify-center grid-cols-1 lg:grid-cols-2 max-w-[1024px] mx-auto scrolltrack-minimal"
>
  {#each repos || [] as repo}
    <li class="h-full w-full rounded text-foreground grid">
      <a
        href="https://github.com/{repo.author}/{repo.name}"
        class="grid [&>h5]:hover:underline py-2 px-3 [&>div>div>svg.star]:hover:fill-yellow-500"
        target="_blank"
      >
        <h5 class="font-semibold text-lg">
          {repo.author}/{repo.name}
        </h5>
        <p class="text-muted-foreground">
          {repo.description}
        </p>

        <div class="mt-auto pt-2 flex gap-4">
          <div class="flex gap-1.5 items-center">
            <div
              class="w-3 h-3 rounded-full"
              style="background-color: {LanguageColors?.[
                repo.language.toLowerCase()
              ]};"
            ></div>
            <p>{repo.language}</p>

            <svg
              class="lucide h-4 w-4 ml-2 star"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
              /></svg
            >
            <p>
              {repo.stars}
            </p>

            <svg
              class="lucide h-4 w-4 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><circle cx="12" cy="18" r="3" /><circle
                cx="6"
                cy="6"
                r="3"
              /><circle cx="18" cy="6" r="3" /><path
                d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"
              /><path d="M12 12v3" /></svg
            >

            <p>
              {repo.forks}
            </p>
          </div>
        </div>
      </a>
    </li>
  {/each}
</ul>
