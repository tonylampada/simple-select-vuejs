var app = new Vue({
  el: '#app',
  data: {
    items: [],
    selected: [],
    selected_items: [],
    selectAll: false,
  },
  methods: {
    list_items(){
      axios.get('https://api.github.com/repos/rg3915/simple-select-vuejs/issues')
      .then((result) => {
        this.items = result.data.map((item) => {
          return {number: item.number, id: item.id, title: item.title, state: item.state, url: item.url}
        })
      })
    },
    select(){
      this.selected = [];
      this.selected_items = [];
      if (!this.selectAll) {
        for (let i in this.items) {
          this.selected.push(this.items[i].number);
        }
        for (let j in this.items) {
          this.selected_items.push(
            {number: this.items[j].number, id: this.items[j].id, title: this.items[j].title, state: this.items[j].state, url: this.items[j].url}
          );
        }
      }
    }
  },
  mounted(){
    this.list_items()
  }
})
