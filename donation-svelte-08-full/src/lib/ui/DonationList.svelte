<script lang="ts">
  import type { Donation, Track } from "$lib/types/donation-types";

  export let donations: Donation[];
  export let tracks: Track[];
  console.log(tracks,'tracks')
</script>

<!-- <table class="table is-fullwidth">
  <thead>
    <th>Amount</th>
    <th>Method</th>
    <th>Candidate</th>
    <th>Donor</th>
  </thead>
  <tbody>
    {#each donations as donation}
      <tr>
        <td>
          {donation.amount}
        </td>
        <td>
          {donation.method}
        </td>
        <td>
          {#if typeof donation.candidate !== "string"}
            {donation.candidate.lastName}, {donation.candidate.firstName}
          {/if}
        </td>
        <td>
          {#if typeof donation.donor !== "string"}
            {donation.donor.lastName}, {donation.donor.firstName}
          {:else}
            {donation.donor}
          {/if}
        </td>
      </tr>
    {/each}
  </tbody>
</table> -->
<!-- <div class="columns is-multiline is-gap is-mobile">
   {#each donations as donation}
<div>
  <img src={donation.img}/>
</div>
<div>{donation.amount}</div>
  {/each}
</div> -->

<div class="columns is-multiline is-gap is-mobile">
  {#each donations as donation}
  <div class="column is-half">
    <div class="card grid-item">
      <div class="card-image">
        <figure class="image is-4by3">
          <!-- svelte-ignore a11y-img-redundant-alt -->
          <img src={donation.img} alt="image">
        </figure>
      </div>
      <div class="card-content" style="height: 600px; overflow: hidden;">
        <div class="media">
          <div class="media-content">
            <p class="title">{donation.amount}</p>
            <p class="subtitle">{donation.amount}</p>
          </div>
        </div>
        <div class="content">
          {donation.amount}
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          <!-- {{!-- <button class="button is-small expand-button">Expand</button> --}} -->
        </div>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="ui icon ">
            <i class="fas fa-trash"></i>
          </a>
        </p>
        <p class="card-footer-item">
          <a target="_blank" class="ui icon" href="https://www.google.com/maps/place/51%C2%B046'19.0%22N+10%C2%B032'19.0%22W">    
            <i class="fas fa-map-pin"></i>
          </a>
        </p>
      </footer>
    </div>
  </div>
  {/each}
</div>

