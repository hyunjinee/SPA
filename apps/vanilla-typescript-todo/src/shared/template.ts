export const newItemEntryTemplate = `
  <section class="newItemEntry">
    <h2>New Item Entry</h2>
    <form class="newItemEntry__form" id="itemEntryForm">
      <label for="newItem" class="offscreen">Enter a new todo item</label>
      <input
        type="text"
        class="newItemEntry__input"
        id="newItem"
        maxlength="40"
        autocomplete="off"
      />
      <button id="addItem" class="button newItemEntry__button">+</button>
    </form>
  </section>
`;

export const todoListTemplate = `
  <section class="listContainer">
    <header class="listTitle">
      <h2 id="listName">List</h2>
      <button
        id="clearItemsButton"
        class="button listTitle__button"
        title="Clear the list"
        aria-label="Remove all items from the list"
      >
        Clear
      </button>
    </header>

    <hr />

    <ul id="listItems"></ul>
  </section>
`;

export const pageTemplate = `
  <main>
    <h1>My List</h1>

    <section class="newItemEntry">
      <h2>New Item Entry</h2>

      <form class="newItemEntry__form" id="itemEntryForm">
        <label for="newItem" class="offscreen">Enter a new todo item</label>
        <input
          type="text"
          class="newItemEntry__input"
          id="newItem"
          maxlength="40"
          autocomplete="off"
        />
        <button id="addItem" class="button newItemEntry__button">+</button>
      </form>
    </section>

    <section class="listContainer">
      <header class="listTitle">
        <h2 id="listName">List</h2>
        <button
          id="clearItemsButton"
          class="button listTitle__button"
          title="Clear the list"
          aria-label="Remove all items from the list"
        >
          Clear
        </button>
      </header>

      <hr />

      <ul id="listItems"></ul>
    </section>
  </main>
`;
